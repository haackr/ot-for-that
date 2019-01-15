import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => (
  <h1>About Me</h1>
)

export const query = graphql`
  query AboutPage{
   allMarkdownRemark {
     edges  {
       node {
         id
       }
     }
   } 
  }
`

export default About;