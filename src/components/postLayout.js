import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import SEO from './seo';

const PostLayout = ( {data} ) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;

  return (
    <Layout>
      <SEO title={`OT for That - ${frontmatter.title}`}/>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </Layout>
  )
}

export const query = graphql`
  query postQuery($slug: String!) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ){
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;

export default PostLayout;