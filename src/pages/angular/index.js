import * as React from "react"
import {Link} from "gatsby"
import Layout from "../../components/layout";
import { linkStyle, urlEffect, tutorialPageTitle, tutorialPageContainer, listStyle} from "../../components/layout.module.css"
import SEO from "../../components/seo/seo";
import HashIcon from "../../components/HashIcon"





//link icon svg path

//root component
const AngularPage=()=>{
    return(
        <div>
            <SEO
            title="Angular Tutorial | CodeinJar"
            />

        <Layout>
            <div className={tutorialPageTitle}>
              <h2>Angular Tutorial</h2>
           </div>

            <div className={tutorialPageContainer}>
                <AngularPosts />
            </div>
        </Layout>
        </div>
    )
}


//angular posts component
const AngularPosts=()=>{

    return(
         <div>
         <ul className={listStyle}>
         {
            posts.map((data, id)=>(
                <li key={data.id}>
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
