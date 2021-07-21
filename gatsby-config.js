const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `CapacitBay`,
    description: `Kick off your next great goal with programs and mentorship, might need.`,
    author: `@nnahnnamdi`,
  },
  pathPrefix: "/Official_Website_CapacityBay",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,   
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/static`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `CapacityBay`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/title.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
     
  ],
}
