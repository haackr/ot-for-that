import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PostTemplate = ( {data, preview} ) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;

  return (
    <Layout>
      <SEO title={`OT for That - ${frontmatter.title}`}/>
      <article>
        <h1>{frontmatter.title}</h1>
        <p className="date">Andrea Schoeny - {moment(frontmatter.date).format("MMMM DD, YYYY")}</p>
        {preview || <div dangerouslySetInnerHTML={{__html: html}}></div>}
      </article>
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