import { Link } from "gatsby";
import * as React from "react";
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


const JpaIndexPage = () => {

  return (
    <>
    <SEO title="JPA Tutorial | CodeinJar"></SEO>
    <Layout>
        
        <div className={tutorialPageTitle}>
              <p>JPA Tutorial</p>
        </div>

     <Jpaposts/>
    </Layout>
    </>
  );
};


const Jpaposts=()=>{

    return(
         <div>
         <ul className={`${gridContainer} ${listStyle}`}>
         {
            jpalinks.map((data, id)=>(
                <li key={id}> 
                <span style={{fontWeight: "bold", color: "gray"}}>{linkIcon}</span> {` `}
                 <Link to={data.url} className={`${linkStyle} ${urlEffect}`}>{data.title}</Link>
                </li>
            ))
         }
         </ul>
         </div>
    )
}


const jpalinks=[
    {
        id: "1",
        title: "JPQL at a glance",
        url: "/jpa-jpql-at-a-glance"
    },
    {
        id: "2",
        title: "Create Your First JPA application",
        url: "/jpa-create-our-first-jpa-application" 
    },
    {
        id: "3",
        title: "How to Save an entity object in JPA",
        url: "/jpa-save-an-entity" 
    },
    {
        id: "4",
        title: "How to update an entity object in JPA",
        url: "/jpa-update-an-entity" 
    },
    {
        id: "5",
        title: "How to find an entity record from database",
        url: "/jpa-find-an-entity" 
    },
    {
        id: "6",
        title: "How to delete an entity object",
        url: "/jpa-delete-an-entity" 
    },
    {
        id: "7",
        title: "JPA one-to-one mapping overview",
        url: "/jpa-one-to-one-mapping" 
    },
    {
        id: "8",
        title: "JPA one-to-many mapping overview",
        url: "/jpa-one-to-many-mapping" 
    },
    {
        id: "9",
        title: "JPA many-to-many mapping overview",
        url: "/jpa-many-to-many-mapping" 
    },
    {
        id: "10",
        title: "JPA inheritance strategies with examples",
        url: "/jpa-inheritance-strategies-with-examples" 
    },
    {
        id: "11",
        title: "JPA Single Table strategy",
        url: "/jpa-single-table-strategy" 
    },
    {
        id: "12",
        title: "JPA basic operaions in a nutshell - Save, Update, Remove, Find",
        url: "/jpa-save-find-update-delete-operations" 
    },
    {
        id: "13",
        title: "JPQL Overview",
        url: "/jpa-jpql-overview" 
    },
    {
        id: "14",
        title: "JPQL dynamic query example",
        url: "/jpa-jpql-dynamic-query-example"
    },
    {
        id: "15",
        title: "JPA table per class strategy",
        url: "/jpa-table-per-class-strategy"
    },
    {
        id: "16",
        title: "JPA joined table strategy",
        url: "/jpa-joined-table-strategy"
    },
    {
        id: "17",
        title: "JPA Embedded Objects",
        url: "/jpa-embedded-objects"
    },
    {
        id: "18",
        title: "JPA Map A List Of Values to An Entity",
        url: "/jpa-map-a-list-of-values-to-an-entity"
    }
   
]



export default JpaIndexPage;



//header section for SEO
export function Head(){
    return(
        <>
        <title>JPA Tutorial | javaondemand.com</title>
    </>
    )
}