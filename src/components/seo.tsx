import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Logo from '-!url-loader!../images/unifavela.secondary.svg';

type SEOProps = {
  scope?: string;
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
};

export const SEO = (props: SEOProps) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: props.title || defaultTitle,
    description: props.description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${props.pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon" href={Logo} />
      {props.children}
    </>
  )
}
