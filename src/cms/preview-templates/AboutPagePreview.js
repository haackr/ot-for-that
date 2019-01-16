import React from 'react';
import AboutPage from '../../pages/about';

const AboutPagePreview =({entry, widgetFor}) => {
  const AboutProps = {data:{
    markdownRemark: {
      html: entry.getIn(['data', 'body'])
    }
  }};
  return (
    <AboutPage {...AboutProps} />
  )
}

export default AboutPagePreview