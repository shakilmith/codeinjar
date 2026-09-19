import * as React from "react"
import {Link} from "gatsby"
import {footerContainer} from "./layout.module.css"

//import icons


const Footer=()=>{

    return(
        <div className={footerContainer}>
            <h1>Codeinjar.com</h1>
            <p><Link to="/" style={{textDecoration: "none"}}>Codeinjar.com</Link> is maintained by @shakilmith {` `}
                <a href="https://github.com/shakilmith">Github Icon</a> {` `}
                <a href="https://x.com/shakilmith">Twitter Icon</a>
            </p>
            <p>Copyright <span>Copyright Icon</span> 2023. All right reserved.</p>
        </div>
    )
}


export default Footer;