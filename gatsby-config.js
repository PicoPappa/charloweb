module.exports = {
  siteMetadata: {
    title: `Charlo - Escuela de Español`,
    description: `Study spanish with native teachers on private live classes focused on your needs. `,
    author: `Charlo`,
    siteUrl: `https://www.charlo.es`,
    meta: {
        charset: 'utf-8',
        name: {
          keywords: 'spanish school,school,spanish,online,courses,native teachers,budget,learn,class,lessons'
        }
      }
  },
  
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.charlo.es',
        sitemap: 'https://www.charlo.es/sitemap.xml',
        policy: [ { userAgent: '*', allow: '/' } ],
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MMFWLF8",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

      },
    },
    
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Charlo-school`,
        short_name: `Charlo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/charlo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
