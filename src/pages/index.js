import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Listing from '../components/listing';

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="There's OT for That" keywords={[`gatsby`, `application`, `react`]} />
    <Listing />
  </Layout>
)

export default IndexPage
