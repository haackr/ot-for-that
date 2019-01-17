import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({data, preview}) => (
  <Layout>
    <SEO title="OT for That - About"/>
    <article>
     {preview || <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>}
    </article>
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