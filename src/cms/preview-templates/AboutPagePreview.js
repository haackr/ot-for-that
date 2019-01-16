import React from 'react';
import AboutPage from '../../pages/about';

const AboutPagePreview =({widgetFor}) => {
  return (
    <AboutPage preview={widgetFor('body')} />
  )
}

export default AboutPagePreview