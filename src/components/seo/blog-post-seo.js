import * as React from "react"

//SEO for Blog Posts
const BlogPostSeo=({title, description, children})=>{

    const seo={
        title: title,
        description: description
    }

    return(
        <>
        <title>{seo.title} | javaondemand.com</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content="" />
        <meta name="author" content="shakilmith" />
        {/*meta tags for open graph protocol (og:title, og:image)*/}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />

        {/*children: global props(add external scripts, or other metadata*/}
        {children}
        </>
    )
}

export default BlogPostSeo;