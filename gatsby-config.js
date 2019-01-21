module.exports = {
  siteMetadata: {
    title: `There's OT for That`,
    description: `One Occupational Therapist's Journey: navigating the call to occupational therapy, various settings in "OT Land," the country as a traveling therapist.`,
    author: `Andrea Schoeny`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/page-content`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              madWidth: 760,
              backgroundColor: `transparent`,
              quality: 100,
              showCaptions: true,
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-132786797-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `There's OT For That`,
        short_name: `OT For That`,
        start_url: `/`,
        background_color: `#9ad3de`,
        theme_color: `#9ad3de`,
        display: `minimal-ui`,
        icon: `static/images/icons/apple-touch-icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `static/images/icons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src:`static/images/icons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
        ]
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      },
    },
    `gatsby-plugin-netlify` // THIS MUST BE LAST!!!
  ],
}
