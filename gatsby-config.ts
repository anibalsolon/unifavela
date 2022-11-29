import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: `/unifavela`,

  siteMetadata: {
    title: `UniFavela`,
    siteUrl: `https://www.yourdomain.tld`,
    navbar: [
      { name: "Home", path: "/", side: "left" },
      { name: "Quem Somos", path: "/quem-somos", side: "left" },
      { name: "Projetos e Ações", path: "/projetos-e-acoes", side: "left" },
      { name: "Na Mídia", path: "/na-midia", side: "left" },
      { name: "Depoimentos", path: "/depoimentos", side: "right" },
      { name: "Parceiros", path: "/parceiros", side: "right" },
      { name: "Apoie", path: "/apoie", side: "right" },
      { name: "Fale Conosco", path: "/fale-conosco", side: "right" },
    ]
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          precision: 6
        },
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "UA-159251615-1"
      }
    },
    'gatsby-plugin-fontawesome-css',
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};

export default config;
