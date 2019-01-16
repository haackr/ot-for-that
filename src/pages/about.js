import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({data}) => (
  <Layout>
    <SEO title="OT for That - About"/>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
  </Layout>
)

export const query = graphql`
query AboutPage{
	markdownRemark(frontmatter: {
    content_type: {
      eq: "about-page"
    }
  }) {
	  html
	}
}
`

export default About;