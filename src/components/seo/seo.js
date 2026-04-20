import * as React from "react";

//seo function
export default function SEO({
  title,
  description,
  pathname,
  children,
}) {
    //default title, description etc. 
    // if there is no metadata provided
  const siteUrl = "https://codeinjar.com"; // change
  const defaultTitle = "CodeinJar";
  const defaultDescription = "Learn Web Development with codeinjar.com";

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: siteUrl + (pathname || ""),
  };


  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/*meta for social media og-graph*/}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      {children}
    </>
  );
}
