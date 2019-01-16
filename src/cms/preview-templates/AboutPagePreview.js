import React from 'react';
import AboutPage from '../../pages/about';

const AboutPagePreview =({entry, widgetFor}) => {
  const AboutProps = {data:{
    markdownRemark: {
      html: widgetFor('body')
    }
  }};
  return (
    <AboutPage {...AboutProps} />
  )
}

export default AboutPagePreview