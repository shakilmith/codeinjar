import * as React from "react"
import {Link} from "gatsby"
import {footerContainer} from "./layout.module.css"

//import icons
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Footer=()=>{

    return(
        <div className={footerContainer}>
            <h1>Codeinjar.com</h1>
            <p><Link to="/" style={{textDecoration: "none"}}>Codeinjar.com</Link> is maintained by @shakilmith {` `}
                <a href="https://github.com/shakilmith"><GitHubIcon fontSize="iconSize" /></a> {` `}
                <a href="https://x.com/shakilmith"><TwitterIcon fontSize="iconSize" /></a>
            </p>
            <p>Copyright <CopyrightIcon fontSize="iconSize" /> 2023. All right reserved.</p>
        </div>
    )
}


export default Footer;