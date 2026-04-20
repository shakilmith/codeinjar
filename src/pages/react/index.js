import * as React from "react"
import {Link} from "gatsby"
import Layout from "../../components/layout";
import SEO from "../../components/seo/seo";


const ReactPage=()=>{
    return(
        <>
        <SEO title="React | CodeinJar"></SEO>
        <Layout>
            <div>
                <h2>React Tutorial</h2>
            </div>
            <ul>
                <li>
                    <Link to="/first-react-application">Create Your First React Application</Link>
                </li>
                <li>
                    <Link to="/react-list">React List</Link>
                </li>
                <li>
                    <Link to="/react-functional-component">React Functional Component</Link>
                </li>
                <li>
                    <Link to="/react-hooks">React Hooks</Link>
                </li>
                <li>
                    <Link to="/react-useState-hook">React UseState Hook</Link>
                </li>
                <li>
                    <Link to="/react-props">React Props</Link>
                </li>
                <li>
                    <Link to="/react-useCallback-hook">React useCallback Hook</Link>
                </li>

                <li>
                    <Link to="/conditionally-render-elements-in-react">conditionally Render Elements in React</Link>
                </li>
            </ul>
        </Layout>
        </>
    )
}



export default ReactPage;
