import * as React from "react"
import {Link} from "gatsby"
import Layout from "../../components/layout";
import { linkStyle, urlEffect, gridContainer, listStyle, tutorialPageTitle, tutorialPageContainer, tutorialPageSubtitle} from "../../components/layout.module.css"
import SEO from "../../components/seo/seo";
import HashIcon from "../../components/HashIcon";




const SpringBootPage=()=>{
    return(
        <>
        <SEO title="Spring Boot | CodeinJar"></SEO>
        <Layout>

           <div className={tutorialPageTitle}>
              <p>Spring Boot Tutorial</p>
           </div>
           
           <div className={tutorialPageContainer}>
            <SpringBootPosts />
           </div>
        </Layout>
        </>
    )
}


const SpringBootPosts=()=>{

    return(
         <div>
            <div>
                <h3 className={tutorialPageSubtitle}>Start With Spring Boot</h3>
            </div>
         <ul>
         {
            sbposts.map((data, id)=>(
                <li key={id}> 
                <HashIcon style={{display: "inline", paddingRight: "0.50rem"}} size={24}/>
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