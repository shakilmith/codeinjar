import { Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import { 
    linkStyle, 
    urlEffect, 
    gridContainer, 
    listStyle, 
    tutorialPageTitle,
    tutorialPageContainer,
    tutorialPageSubtitle
} from "../../components/layout.module.css"

import SEO from "../../components/seo/seo";
import HashIcon from "../../components/HashIcon";



const QuarkusPage = () => {

  return (
    <>
    <SEO title="Quarkus Tutorial | CodeinJar"></SEO>
    <Layout>
        <div className={tutorialPageTitle}>
        <p>Quarkus Tutorials</p>
        </div>

        <div className={tutorialPageContainer}>
            <Qposts />
        </div>
    </Layout>
    </>
  );
};

const Qposts=()=>{

    return(
         <div>
            <div>
                <h3 className={tutorialPageSubtitle}>Start With Quarkus</h3>
            </div>
         <ul className={listStyle}>
         {
            qlinks.map((data, id)=>(
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


const qlinks=[
    {
        id: "1",
        title: "Quarkus Hello World Application",
        url: "/quarkus-develop-your-first-quarkus-application"
    },
    {
        id: "2",
        title: "Using Hibernate Orm with Panache",
        url: "/quarkus-hibernate-orm-with-panache"
    },
    {
        id: "3",
        title: "Create A Crud Application Using Hibernate ORM With Panache",
        url: "/quarkus-create-a-crud-application-using-hibernate-orm-panache"
    },
    {
        id: "2",
        title: "Quarkus: Let's Build a Simple Employee Rest Service",
        url: "/quarkus-develop-a-simple-employee-rest-service-using-hibernate-orm-panache"
    },


    
    
]

export default QuarkusPage;


//header section for SEO
export function Head(){
    return(
        <>
        <title>Quarkus Tutorial | javaondemand.com</title>
    </>
    )
}