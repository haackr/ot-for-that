const path = require('path');
const { createFilePath, createFileNode } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = (({node, getNode, actions}) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);
  if(node.internal.type === "MarkdownRemark"){
    const slug = createFilePath({node, getNode, basePath: `posts`});
    createNodeField({
      node, 
      name: 'slug',
      value: slug,
    })
  }
});

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark (filter: {
          frontmatter: {
            content_type: {
              eq: "blog-post"
            }
          }
        }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
    results.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: `/posts${node.fields.slug}`,
        component: path.resolve('./src/templates/post-template.js'),
        context: {
          slug: node.fields.slug,
        }
      })
    })
    resolve();
  }).catch(error => {
    reject();
  });
});
}