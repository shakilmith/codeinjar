import * as React from "react"
import {Link} from "gatsby"
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



const JavafxPage=()=>{
    return(
        <>
        <SEO title="JavaFX Tutorial | CodeinJar">

        </SEO>
        <Layout>
            <div className={tutorialPageTitle}>
              <p>JavaFX Tutorial</p>
           </div>
                <JavaFXUI />
                <JavafxCharts />
                <JavafxShapes />
        </Layout>
        </>
    )
}



//Initial part (start with javafx)
/**
const GettingStartedGuide=()=>{
    return( 
        <div>
        <h2>JavaFX Basic Controls</h2>
        <ul className={`${gridContainer} ${listStyle}`}>
         {
            charts.map((data, id)=>(
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
*/

//javafx Basic controllers
const JavaFXUI=()=>{
    return( 
        <div>
            <h2>JavaFX Layouts and UI Controls</h2>
        <ul className={`${gridContainer} ${listStyle}`}>
         {
            javafxUI.map((data, id)=>(
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

//javafx charts
const JavafxCharts=()=>{

    return( 
        <div>
            <h2>JavaFX Charts</h2>
        <ul className={`${gridContainer} ${listStyle}`}>
         {
            charts.map((data, id)=>(
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


//effects on javafx

/** 
const JavafxEffects=()=>{
    return( 
        <div>
            <h2>JavaFX Effects</h2>
        <ul className={`${gridContainer} ${listStyle}`}>
         {
            charts.map((data, id)=>(
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
*/

/**
 * Javafx Posts urls will be added below.
 * 
 */

//controller posts
const javafxUI=[
    {
        id: "1",
        title: "Javafx Label",
        url: "/javafx-label"
    },
    {
        id: "2",
        title: "Javafx Button",
        url: "/javafx-button"
    },
    {
        id: "3",
        title: "Javafx Text",
        url: "/javafx-text"
    },
    {
        id: "4",
        title: "Javafx Group",
        url: "/javafx-group"
    },
    {
        id: "5",
        title: "Javafx StackPane",
        url: "/javafx-stackpane"
    },
    {
        id: "6",
        title: "Javafx HBox",
        url: "/javafx-hbox"
    },
    {
        id: "7",
        title: "javafx VBox",
        url: "/javafx-vbox"
    },
    {
        id: "8",
        title: "Javafx GridPane",
        url: "/javafx-gridpane"
    },
    {
        id: "9",
        title: "Javafx TilePane",
        url: "/javafx-tilepane"
    }, 
    {
        id: "10",
        title: "Javafx FlowPane",
        url: "/javafx-flowpane"
    },
    {
        id: "11",
        title: "JavaFX Accordion",
        url: "/javafx-accordion"
    },
    {
        id: "12",
        title: "JavaFX Tab",
        url: "/javafx-tab"
    }

]


//javafx Charts
const charts=[
    {
        id: "1",
        title: "JavaFX PieChart",
        url: "/javafx-piechart"
    },
    {
        id: "2",
        title: "JavaFX BarChart",
        url: "/javafx-barchart"
    },
    {
        id: "3",
        title: "JavaFX StackedBarChart",
        url: "/javafx-stacked-barchart"
    }
]


//javafx shapes component
const JavafxShapes=()=>{
    return(
        <div>
        <h2>JavaFX Graphics</h2>
    <ul className={`${gridContainer} ${listStyle}`}>
     {
        shapes.map((data)=>(
            <li key={data.id}>
                 <b><dt style={{fontSize: 22}}>{data.title}</dt></b>
                 
          <div>   
            <dl>
            {
                data.shape.map((data)=>(
                   <dd key={data.id}>
                    <li>
                    <span style={{fontWeight: "bold", color: "gray"}}>{linkIcon}</span>{` `}
                     <Link to={data.url} className={`${linkStyle} ${urlEffect}`}>
                       {data.title}
                     </Link>
                 </li>
                 </dd>
                ))
                }
            </dl>
            </div>
        </li>
        
        ))
    
     }
     </ul>  
    </div>
   )
}



//starting part
const shapes = [

    {
        id: "1",
        title: "JavaFX 2D Shapes",
        shape: [
            {
                id: "1",
                title: "JavaFX Line",
                url: "/javafx-line"
            },
            {
                id: "2",
                title: "JavaFX Rectangle",
                url: "/javafx-rectangle"
            }
        ],
    },

    {
        id: "2",
        title: "JavaFX 3D Shapes",
        shape: [
        {
            id: "1",
            title: "JavaFX Box",
            url: "/javafx-box"
        },
        {
            id: "2",
            title: "JavaFX Cylinder",
            url: "/javafx-cylinder"
        },
        {
            id: "3",
            title: "JavaFX Sphere",
            url: "/javafx-sphere"
        },
    ],
}

]



export default JavafxPage;



//header section for SEO
export function Head(){
    return(
        <>
        <title>JavaFX Tutorial | javaondemand.com</title>
    </>
    )
}