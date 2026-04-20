import * as React from "react"
import Layout from "../../components/layout";
import { linkStyle, urlEffect, gridContainer, listStyle, tutorialPageTitle } from "../../components/layout.module.css"
import SEO from "../../components/seo/seo";
import { Link } from "gatsby";




//link icon svg path
const linkIcon=(
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-link-45deg" viewBox="0 0 16 16">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>
)


//page component
export default function ThymeleafTutorialPage(){
    return(
        <>
        <SEO title="Thymeleaf Template Engine | CodeinJar"></SEO>
        <Layout>
            <div className={tutorialPageTitle}>
              <p>Thymeleaf Tutorial</p>
           </div>

    
                <ThymeleafPosts />
        </Layout>
        </>
    )
}


const ThymeleafPosts=()=>{

    return(
         <div>
         <ul className={`${listStyle} ${gridContainer}`}>
         {
            posts.map((data, id)=>(
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

const posts=[
        {
            id: "1",
            title: "Spring Boot Thymeleaf View",
            url: "/spring-boot-thymeleaf-view"
        },
        {
            id: "2",
            title: "Thymeleaf Standard Dialects with Examples",
            url: "/thymeleaf-standard-dialects-tutorial"
        },
        {
            id: "3",
            title: "How to Use Thymeleaf Variable Expression",
            url: "/thymeleaf-variable-expression"
        },
        {
            id: "4",
            title: "Using Thymeleaf th:each attribute",
            url: "/thymeleaf-th-each-attribute"
        },
        {
            id: "5",
            title: "Thymeleaf URL Expression",
            url: "/thymeleaf-url-expression"
        },
        {
            id: "6",
            title: "What is the use of thymeleaf th:text attribute",
            url: "/thymeleaf-th-text-attribute"
        },
        {
            id: "7",
            title: "Thymeleaf Fragment Expression (Useful for creating reusable section or content)",
            url: "/thymeleaf-fragment-expression"
        },
        {
            id: "8",
            title: "Thymeleaf Selection Expression (using th:object attribute)",
            url: "/thymeleaf-selection-expression"
        },
        {
            id: "9",
            title: "Thymeleaf Message (i18n) Expression",
            url: "/thymeleaf-message-expression"
        },
        {
            id: "10",
            title: "Tutorial to Build A Spring Boot Crud Application Using Thymeleaf and Spring Data JPA",
            url: "/spring-boot-crud-application-with-spring-data-jpa-and-thymeleaf-view"
        },
]







//header section for SEO
export function Head(){
    return(
        <>
        <title>Thymeleaf Tutorial | javaondemand.com</title>
    </>
    )
}