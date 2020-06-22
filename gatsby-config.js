module.exports = {
  siteMetadata: {
    author: `@izabellewilding`,
    title: "Chantal Baptiste Doula",
    titleTemplate: "Chantal Baptiste Doula · %s",
    description: "Birth and Post Natal Doula based in Bristol.",
    siteUrl: "https://chantal-baptiste-doula-prod.netlify.com/",
    url: "https://chantal-baptiste-doula-prod.netlify.com/",
    image: "/src/icons/doula-logo.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chantal Baptiste Doula`,
        short_name: `Chantal Baptiste Doula`,
        start_url: `/`,
        background_color: `#f9f6f6`,
        theme_color: `#008080`,
        display: `standalone`,
        icon: `static/img/doula-logo.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    // [`gatsby-plugin-sitemap`],
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     path: `${__dirname}/src/img`,
    //     name: "images"
    //   }
    // },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `iamchantalbaptiste`,
        // access_token: "17841404047621002",
        // instagram_id: "205837940787420",
      },
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `izz__belle`,
    //     access_token: "17841404047621002",
    //     instagram_id: "205837940787420"
    //   }
    // },

    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: false, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
