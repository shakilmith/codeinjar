import * as React from "react"
import {Link} from "gatsby"
import Layout from "../../components/layout";
import { linkStyle, urlEffect, tutorialPageTitle, tutorialPageContainer, tutorialPageSubtitle } from "../../components/layout.module.css"
import SEO from "../../components/seo/seo";
import HashIcon from "../../components/HashIcon";




const SpringBootPage=()=>{
    return(
        <>
        <SEO title="Spring Data JPA | CodeinJar"></SEO>
        <Layout>
            
            <div className={tutorialPageTitle}>
              <p>Spring Data JPA Tutorial</p>
           </div>
           
           <div className={tutorialPageContainer}>
            <SpringDataJpaPosts />
           </div>
                
        </Layout>
        </>
    )
}


const SpringDataJpaPosts=()=>{

    return(
         <div>
            <div>
                <h3 className={tutorialPageSubtitle}>Spring Data JPA Basics</h3>
            </div>
         <ul>
         {
            posts.map((data, id)=>(
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

const posts=[
        {
            id: "1",
            title: "Create Your First Spring Data JPA Powered Application",
            url: "/create-your-first-spring-data-jpa-application"
        },   
        {
            id: "2",
            title: "Spring Data JPA One-TO-One Mapping Tutorial",
            url: "/spring-data-jpa-one-to-one-mapping-tutorial"
        }, 
        {
            id: "3",
            title: "Spring Data JPA One-To-Many and Many-To-One Mapping Tutorial",
            url: "/spring-data-jpa-one-to-many-and-many-to-one-mapping-tutorial"
        }, 
        {
            id: "4",
            title: "Spring Data JPA Many-To-Many Mapping Tutorial",
            url: "/spring-data-jpa-many-to-many-mapping-tutorial"
        }, 
]



export default SpringBootPage;




//header section for SEO
export function Head(){
    return(
        <>
        <title>Spring Data JPA | javaondemand.com</title>
    </>
    )
}