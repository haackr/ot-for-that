import React from 'react';
import {Link, StaticQuery, graphql } from 'gatsby';
import moment from 'moment';

const Listing = () => (
  <StaticQuery 
    query={LISTING_QUERY} 
    render={({allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <Link to={`/posts${node.fields.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{moment(node.frontmatter.date).format("MMM DD, YYYY")}</p>
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
          id
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