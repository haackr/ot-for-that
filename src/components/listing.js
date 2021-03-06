import React from 'react';
import {Link, StaticQuery, graphql } from 'gatsby';
import moment from 'moment';

const Listing = () => (
  <StaticQuery 
    query={LISTING_QUERY} 
    render={({allMarkdownRemark}) => (
      allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id} className="blog-item">
          <div className="blog-title">
            <Link to={`/posts${node.fields.slug}`} className="title">
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p className="date">{moment(node.frontmatter.date).format("MMM DD, YYYY")}</p>
          </div>
          <p className="date">Andrea Schoeny</p>
          <p>{node.excerpt}</p>
          <p><Link to={`/posts${node.fields.slug}`}>Read more...</Link></p>
        </div>  
      ))
    )}
  />
)

const LISTING_QUERY = graphql`
  query PostListing {
    allMarkdownRemark (filter: {
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