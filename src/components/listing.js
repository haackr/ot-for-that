import React from 'react';
import {Link, StaticQuery, graphql } from 'gatsby';

const Listing = () => (
  <StaticQuery 
    query={LISTING_QUERY} 
    render={({allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(({node}) => (
        <div>
          <Link to={`/posts${node.fields.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </div>  
      ))
    )}
  />
)

const LISTING_QUERY = graphql`
  query PostListing {
    allMarkdownRemark (limit: 10, filter: {
      frontmatter: {
        content_type: {
          eq: "blog-post"
        }
      }
    }, sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter{
            title
            date
          }
          excerpt(pruneLength: 400)
        }
      }
    }
  }
`

export default Listing;