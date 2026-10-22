import * as React from "react"
import {Link} from "gatsby"
import Layout from "../../components/layout";
import SEO from "../../components/seo/seo";
import {tutorialPageContainer, tutorialPageTitle, linkStyle, urlEffect} from "../../components/layout.module.css"
import HashIcon from "../../components/HashIcon";


const ReactPage=()=>{
    return(
        <>
        <SEO title="React | CodeinJar"></SEO>
        <Layout>
            <div className={tutorialPageTitle}>
                <h2>React Tutorial</h2>
            </div>


        {/*Post links*/}
        <div className={tutorialPageContainer}>
         <ul>
         {
            reactLinks.map((data, id)=>(
                <li key={id}> 
                <HashIcon style={{display: "inline", paddingRight: "0.50rem"}} size={24}/>
                 <Link to={data.url} className={`${linkStyle} ${urlEffect}`}>{data.title}</Link>
                </li>
            ))
         }
         </ul>
         </div>

            </Layout>
        </>
    )
}






const reactLinks=[
     {
        id: "1",
        title: "Create Your First React Application",
        url: "/first-react-application"
    },
    {
        id: "2",
        title: "React Props Basics",
        url: "/react-props"
    },
    {
        id: "3",
        title: "React Components Basics",
        url: "/react-functional-component"
    },
    {
        id: "4",
        title: "Work with React Lists",
        url: "/react-list"
    },
    {
        id: "5",
        title: "React Built in Hooks",
        url: "/react-hooks"
    },
    {
        id: "6",
        title: "React useState Hook",
        url: "/react-useState-hook"
    },
    {
        id: "7",
        title: "React useCallBack Hook",
        url: "/react-useCallback-hook"
    },
    {
        id: "8",
        title: "How to Conditionally Render Elements in React",
        url: "/conditionally-render-elements-in-react"
    }
]


export default ReactPage;
