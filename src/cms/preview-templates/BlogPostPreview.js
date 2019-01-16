import React from 'react';
import PostTemplate from '../../templates/post-template';

const BlogPostPreview = ({entry, widgetsFor}) => {
  const blogProps = {
    data:{
      frontmatter: {
      title: widgetsFor('title'),
      date: widgetsFor('date'),
    },
      html: widgetsFor('body'),
    }
  };

  return (
    <PostTemplate {...blogProps}/>
  )
};

export default BlogPostPreview;