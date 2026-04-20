import * as React from "react"
import {Link} from "gatsby"
import Layout from "../../components/layout";
import { linkStyle, urlEffect, gridContainer, listStyle, tutorialPageTitle } from "../../components/layout.module.css"
import SEO from "../../components/seo/seo";





//link icon svg path
const linkIcon=(
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-link-45deg" viewBox="0 0 16 16">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>
)


const SpringBootPage=()=>{
    return(
        <>
        <SEO title="Spring Boot | CodeinJar"></SEO>
        <Layout>

           <div className={tutorialPageTitle}>
              <p>Spring Boot Tutorial</p>
           </div>
           
                <SpringBootPosts />
        </Layout>
        </>
    )
}


const SpringBootPosts=()=>{

    return(
         <div>
         <ul className={`${listStyle} ${gridContainer}`}>
         {
            sbposts.map((data, id)=>(
                <li key={id}> 
                <span style={{fontWeight: "bold", color: "gray"}}>{linkIcon}</span>{` `} 
                <Link to={data.url} className={`${linkStyle} ${urlEffect}`}>{data.title}</Link>
                </li>
            ))
         }
         </ul>

         </div>
    )
}

const sbposts=[
        {
            id: "1",
            title: "Spring Boot Hello World Example Application",
            url: "/spring-boot-hello-world-example-application"
        },  
        {
            id: "2",
            title: "Spring Boot Rest Api Example Application",
            url: "/spring-boot-rest-api-example"
        }, 
        {
            id: "3",
            title: "Spring Boot Data JPA Example Application",
            url: "/spring-boot-data-jpa-example"
        }, 
        {
            id:"4",
            title: "Spring Boot Thymeleaf View",
            url: "/spring-boot-thymeleaf-view"
        },
        {
            id:"5",
            title: "Spring Boot and H2 Database",
            url: "/spring-boot-and-h2-database"
        },
        {
            id:"6",
            title: "Spring Boot and Mysql Database",
            url: "/spring-boot-and-mysql-database"
        },
        {
            id:"7",
            title: "Spring Data JPA One-To-One Mapping Tutorial",
            url: "/spring-data-jpa-one-to-one-mapping-tutorial"
        },
        {
            id:"8",
            title: "Spring Data JPA One-To-Many and Many-To-one Mapping Tutorial",
            url: "/spring-data-jpa-one-to-many-and-many-to-one-mapping-tutorial"
        },
        {
            id:"9",
            title: "Spring data JPA Many-To-Many Mapping Tutorial",
            url: "/spring-data-jpa-many-to-many-mapping-tutorial"
        },
        {
            id: "10",
            title: "Spring Boot Crud Application with Spring Data JPA and Thymeleaf View",
            url: "/spring-boot-crud-application-with-spring-data-jpa-and-thymeleaf-view"
        },
        {
            id: "11",
            title: "Customizing an Entity Model in Spring Boot",
            url: "/customizing-an-entity-model-in-spring-boot"
        },
        {
            id: "12",
            title: "Spring Boot Freemarker View",
            url: "/blog/spring-boot-freemarker-view"
        },
        {
            id: "13",
            title: "Generate Dynamic Html Pages Using Spring Boot",
            url: "/blog/generate-dynamic-html-pages-in-spring-boot"
        },
]



export default SpringBootPage;



//header section for SEO
export function Head(){
    return(
        <>
        <title>Spring Boot Tutorial | javaondemand.com</title>
    </>
    )
}