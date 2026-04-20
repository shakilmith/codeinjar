import * as React from "react"
import { Script } from "gatsby"

const AdsTerraBlock=()=>{
    return(
        <div>
            <h1>Hello, World</h1>
        </div>
    )
}


export const Greeting=()=>{
    return(
        <div>
            <h1>Hello, Java</h1>
        </div>
    )
}

/**
 * Native Script: 1/4
 */
export const AdsterraNativeScript1=()=>{
    return(
        <div>
        <Script async="async" 
        data-cfasync="false" 
        src="//pl24196633.cpmrevenuegate.com/8087a81e4dc85e674df6bb122cbfc649/invoke.js" />
        <div 
        style={{
            marginTop: 100
        }}
        id="container-8087a81e4dc85e674df6bb122cbfc649"></div>
        </div>
    )
}

/**
 * Banner: 300x250
 */
export const AdsTerraBanner1=()=>{

    return(
        <div>
        {/*iFrame for loading banner ad: 300X250 */}
      <iframe
        src="//www.topcreativeformat.com/watchnew?key=b14c98b2bd5c88adcc7c5c5b3c9de813/invoke.js"
        width="300"
        height="250"
        border="none"
        scrolling="no"
        title="Banner Ad"
        loading="lazy"
      ></iframe>
        </div>
    )
}


export default AdsTerraBlock;