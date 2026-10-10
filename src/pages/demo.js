import { Link } from "gatsby"
import * as React from "react"

export default function Demo(){
    return (
        <div>
            <h2>Demo Page</h2>
            <br/>
            <Link to="/hello">Hello, Page</Link>
            <Link to="/">Go to Index Page</Link>
        </div>
    )
}
        