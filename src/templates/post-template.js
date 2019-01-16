import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './post.css';

const PostTemplate = ( {data, preview} ) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;

  return (
    <Layout>
      <SEO title={`OT for That - ${frontmatter.title}`}/>
      <h1>{frontmatter.title}</h1>
      <p className="date">{moment(frontmatter.date).format("MMM DD, YYYY")}</p>
      {preview || <div dangerouslySetInnerHTML={{__html: html}}></div>}
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
        date
      }
    }
  }
`;

export default PostTemplate;