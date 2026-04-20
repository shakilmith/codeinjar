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
export default function JavaTutorialPage(){
    return(
        <>
        <SEO
        title="Java Tutorial | CodeinJar"
        >
        </SEO>
        <Layout>
            
            <div className={tutorialPageTitle}>
              <p>JavaSE Tutorial</p>
           </div>
            <JavaPosts1 />
            <JavaPosts3 />
            <JavaPosts2 />
        </Layout>
        </>
    )
}



/**
 * component for language basics
 */
const JavaPosts1=()=>{

    return(
         <div style={container}>
         <p className={tutorialPageSubtitle}>Language Basics</p>
         <ul className={gridContainer}>
         {
            posts1.map((data, id)=>(
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
 * Component for collection framework
 */
const JavaPosts2=()=>{

    return(
         <div style={container}>
         <p className={tutorialPageSubtitle}>Collection Framework</p>
         <ul className={gridContainer}>
         {
            posts2.map((data, id)=>(
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
 * component for java advanced topic
 */
const JavaPosts3=()=>{

    return(
         <div style={container}>
         <p className={tutorialPageSubtitle}>Advanced Topic</p>
         <ul className={gridContainer}>
         {
            posts3.map((data, id)=>(
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
 * Language basics post
 */

const posts1 = [
   {
    id: "1",
    title: "Install Java in Your System",
    url: "/install-java-in-your-system"
   },
   {
    id: "2",
    title: "Java Hello World Program",
    url: "/java-hello-world-program"
   },
   {
    id: "3",
    title: "Java Data Types",
    url: "/java-data-types"
   },
   {
    id: "4",
    title: "Java Modifiers",
    url: "/java-modifiers"
   },
   {
    id: "6",
    title: "Java For Loop",
    url: "/java-for-loop-statement"
   },
   {
    id: "7",
    title: "Java While Loop",
    url: "/java-while-loop-statement"
   },
   {
    id: "8",
    title: "Java Conditional Statements",
    url: "/java-conditional-statements"
   },
   {
    id: "9",
    title: "Java Switch Statement",
    url: "/java-switch-statement"
   },
   {
    id: "10",
    title: "Java Array",
    url: "/java-array"
   },
   {
    id: "11",
    title: "Java Methods or Functions",
    url: "/java-method"
   },
   {
    id: "9",
    title: "Java Abstract Class",
    url: "/java-abstract-class"
   },
   {
    id: "12",
    title: "Interface In Java",
    url: "/java-interface"
   },
   {
    id: "13",
    title: "Java Type Casting",
    url: "/java-type-casting"
   },
   {
    id: "17",
    title: "Java Constructor",
    url: "/java-constructor"
   },
]





/**
 * Java Collection Framework
 */
const posts2 = [
    {
     id: "1",
     title: "Java ArrayList",
     url: "/java-arraylist"
    },
    {
     id: "2",
     title: "Java LinkedList",
     url: "/java-linkedlist"
    },
    {
        id: "3",
        title: "Java HashSet",
        url: "/java-hashset"
    },
    {
        id: "4",
        title: "Java HashMap",
        url: "/java-hashmap"
    },
    {
        id: "5",
        title: "Java List Interface",
        url: "/java-list-interface"
    },
    {
        id: "6",
        title: "Java Set Interface",
        url: "/java-set-interface"
    },
    {
        id: "7",
        title: "Java Map Interface",
        url: "/java-map-interface"
    }
 ]


/**
* Advanced topic
*/
const posts3=[
    {
        id: "1",
        title: "Java Class Members",
        url: "/java-class-members"
    },
    {
        id: "2",
        title: "Java Class And Object",
        url: "/java-class-and-object"
    },
    {
        id: "3",
        title: "Java Method Overloading",
        url: "/java-method-overloading"
    },
    {
        id: "4",
        title: "Java Method Overriding",
        url: "/java-method-overriding"
    },
    {
        id: "5",
        title: "Java Package",
        url: "/java-package"
    },
    {
        id: "7",
        title: "Java Inheritance",
        url: "/inheritance-in-java"
    },
    {
        id: "8",
        title: "Java Polymorphism",
        url: "/java-polymorphism"
    },
    {
        id: "9",
        title: "Java Built in Packages or API",
        url: "/java-built-in-packages"
    },
    {
        id: "11",
        title: "Java Encapsulation",
        url: "/java-encapsulation"
    },
    {
        id: "10",
        title: "Enum Types in Java",
        url: "/java-enums"
    },
    {
        id: "11",
        title: "Java Iterator",
        url: "/java-iterator"
    },
    {
        id: "12",
        title: "Java Lambda Expression",
        url: "/java-lambda-expression"
    },
    {
        id: "13",
        title: "Java Recursion",
        url: "/java-recursion"
    },
    {
        id: "14",
        title: "Java User Input",
        url: "/java-user-input"
    },
    {
        id: "15",
        title: "Java Date/Time API",
        url: "/java-date-time-api"
    },
    {
        id: "16",
        title: "Handling Exceptions in Java",
        url: "/handling-exception-in-java"
    },
    {
        id: "17",
        title: "Java File Handling",
        url: "/java-file-handling"
    },
    {
        id: "18",
        title: "Java Method Parameters",
        url: "/java-method-parameters"
    },
    {
        id: "19",
        title: "Java Inner Class",
        url: "/java-inner-class"
    },
    {
        id: "20",
        title: "Java RegEx",
        url: "/java-regex"
    },
]



/**
 * misc posts
 */
const posts4=[
    {
        id: "1",
        title: "first Misc Post",
        url: "/misc-post"
    }
]


//header section for SEO
export function Head(){
    return(
        <>
        <title>Java Tutorial | javaondemand.com</title>
    </>
    )
}
