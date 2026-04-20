import * as React from "react"
import {Link} from "gatsby"
import Layout from "../../components/layout";
import { linkStyle, urlEffect, gridContainer, listStyle, tutorialPageTitle} from "../../components/layout.module.css"
import SEO from "../../components/seo/seo";





//link icon svg path
const linkIcon=(
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-link-45deg" viewBox="0 0 16 16">
    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>
)


//root component
const AngularPage=()=>{
    return(
        <div>
            <SEO
            title="Angular Tutorial | CodeinJar"
            >

            </SEO>
        <Layout>
            <div className={tutorialPageTitle}>
              <p>Angular Tutorial</p>
           </div>
                <AngularPosts />
        </Layout>
        </div>
    )
}


//angular posts component
const AngularPosts=()=>{

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
        title: "Create Your First Angular Application",
        url: "/create-your-first-angular-application"
    },
    {
        id: "2",
        title: "Creating A New Angular Component",
        url: "/creating-new-angular-component"
    },
    {
        id: "3",
        title: "Using Angular NgIf Directive",
        url: "/angular-ng-if-directive"
    },
    {
        id: "4",
        title: "Using Angular NgFor Directive",
        url: "/angular-ng-for-directive"
    },
    {
        id: "5",
        title: "Using Angular NgSwitch and NgSwitchCase Directive",
        url: "/angular-ng-switch-directive"
    },
    {
        id: "6",
        title: "What is Angular Service and How to Create an Angular Service",
        url: "/angular-service-class"
    },
    {
        id: "7",
        title: "How to Share Data Between Components in Your Angular Application",
        url: "/sharing-data-between-components-in-angular"
    },
    {
        id: "8",
        title: "Angular Interface",
        url: "/angular-interface",
    },
    {
        id: "9",
        title: "Angular NgModel Attribute Directive",
        url: "/angular-ng-model-attribute-directive"
    },
    {
        id: "10",
        title: "Angular NgStyle and NgClass Directive",
        url: "/angular-ng-style-directive"
    }

]



export default AngularPage;




//header section for SEO
export function Head(){
    return(
        <>
        <title>Angular Tutorial | javaondemand.com</title>
    </>
    )
}