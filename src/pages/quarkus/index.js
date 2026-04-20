import { Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import { 
    linkStyle, 
    urlEffect, 
    gridContainer, 
    listStyle, 
    tutorialPageTitle 
} from "../../components/layout.module.css"
import SEO from "../../components/seo/seo";




//link icon svg path
const linkIcon=(
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-link-45deg" viewBox="0 0 16 16">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>
)


const QuarkusPage = () => {

  return (
    <>
    <SEO title="Quarkus Tutorial | CodeinJar"></SEO>
    <Layout>
        <div className={tutorialPageTitle}>
        <p>Quarkus Tutorials</p>
        </div>
    <main>
     <Qposts/>
     </main>
    </Layout>
    </>
  );
};

const Qposts=()=>{

    return(
         <div>
         <ul className={`${gridContainer} ${listStyle}`}>
         {
            qlinks.map((data, id)=>(
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