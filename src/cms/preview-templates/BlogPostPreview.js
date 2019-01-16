import React from 'react';
import PostTemplate from '../../templates/post-template';
import moment from 'moment';

const BlogPostPreview = ({entry, widgetFor}) => {
  const blogProps = {
    data: {
      markdownRemark: {
        frontmatter: {
          title: entry.getIn(['data','title']),
          date: moment(entry.getIn(['data','date'])).format("MMM DD, YYYY"),
        },
      },
    },
};

  return (
    <PostTemplate preview={widgetFor('body')} {...blogProps}/>
  )
};

export default BlogPostPreview;