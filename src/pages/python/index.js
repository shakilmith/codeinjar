import * as React from "react"
import Layout from "../../components/layout";
import {tutorialPageTitle, gridContainer} from "../../components/layout.module.css"
import { Link } from "gatsby";
import {tutorialPageLinkStyle, tutorialPageSubtitle} from "../../components/layout/tutorial-page.module.css"
import SEO from "../../components/seo/seo";


const container={
    marginLeft: 16 + "px",
    marginTop: 8 + "px"
}




/**
 * 
 * root component
 */
const PythonTutorial=()=>{
    return(
         <>
         <SEO title="Python Tutorial | CodeinJar"></SEO>
        <Layout>
            
            <div className={tutorialPageTitle}>
              <p>Python Tutorial</p>
           </div>
           <div>
            <LanguageBasics />
           </div>
           <div>
            <PythonCollection />
           </div>
           <div>
            <PythonAdvanced />
           </div>
        </Layout>
        </>
    )
}



/**
 * language basics
 */
const LanguageBasics=()=>{

    return(
         <div style={container}>
         <p className={tutorialPageSubtitle}>Language Basics</p>
         <ul className={gridContainer}>
         {
            language_basics.map((data, id)=>(
                <li key={id}>
                <Link to={data.url} className={`${tutorialPageLinkStyle}`}>
                    <span>{data.title}</span>
                </Link>
                </li>
            ))
         }
         </ul>

         </div>
    )
}


/**
 * collection type
 */
const PythonCollection=()=>{

    return(
         <div style={container}>
         <p className={tutorialPageSubtitle}>Python Sequence Types</p>
         <ul className={gridContainer}>
         {
            python_collections.map((data, id)=>(
                <li key={id}>
                <Link to={data.url} className={`${tutorialPageLinkStyle}`}>
                    <span>{data.title}</span>
                </Link>
                </li>
            ))
         }
         </ul>

         </div>
    )
}


/**
 * collection type
 */
const PythonAdvanced=()=>{

    return(
         <div style={container}>
         <p className={tutorialPageSubtitle}>Advanced Topic</p>
         <ul className={gridContainer}>
         {
            python_advanced.map((data, id)=>(
                <li key={id}>
                <Link to={data.url} className={`${tutorialPageLinkStyle}`}>
                    <span>{data.title}</span>
                </Link>
                </li>
            ))
         }
         </ul>

         </div>
    )
}


/**
 * posts for language basics
 */
const language_basics=[
    {
        id: "1",
        title: "Install Python in Your System",
        url: "/install-python"
    },
    {
        id: "2",
        title: "Python Hello World Program",
        url: "/python-hello-world"
    },
    {
        id: "3",
        title: "Python Syntax",
        url: "/python-syntax"
    },
    {
        id: "4",
        title: "Declaring Variable in Python",
        url: "/python-variable"
    },
    {
        id: "5",
        title: "Python Data Types",
        url: "/python-data-types"
    },
    {
        id: "6",
        title: "Python Function",
        url: "/python-function"
    },
    {
        id: "7",
        title: "Python Lambda Function",
        url: "/python-lambda-function"
    },
    {
        id: "8",
        title: "Python If Statement",
        url: "/python-if-statement"
    },
    {
        id: "9",
        title: "Python Elif Statement",
        url: "/python-elif-statement"
    },
    {
        id: "10",
        title: "Python Else If Statement",
        url: "/python-else-if-statement"
    },
    {
        id: "11",
        title: "Python For Loop",
        url: "/python-for-loop"
    },
    {
        id: "12",
        title: "Python While Loop",
        url: "/python-while-loop"
    },
    {
        id: "13",
        title: "Python range() Function",
        url: "/python-range-function"
    },
    {
        id: "14",
        title: "Enumeration in Python",
        url: "/python-enum"
    },
    {
        id: "15",
        title: "Python Match Expression",
        url: "/python-match-expression"
    },
    {
        id: "16",
        title: "Python Pass Statement",
        url: "/python-pass-statement"
    }

]


/**
* posts collection types
*/
const python_collections = [
    {
        id: "1",
        title: "Python List",
        url: "/python-list"
    },
    {
        id: "2",
        title: "Python Set",
        url: "/python-set"
    },
    {
        id: "3",
        title: "Python Tuple",
        url: "/python-tuple"
    },
    {
        id: "4",
        title: "Python Dictionary",
        url: "/python-dictionary"
    } 
]

/**
* posts advanced topics
*/
const python_advanced = [
    {
        id: "1",
        title: "Exception Handling in Python",
        url: "/python-exception-handling"
    },
    {
        id: "2",
        title: "File Handling in Python",
        url: "/python-file-handling"
    }
]


export default PythonTutorial;

//header section for SEO
export function Head(){
    return(
        <>
        <title>Python Tutorial | codeinjar</title>
    </>
    )
}