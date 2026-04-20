import * as React from "react"
import {cardContainer, cardBody} from "./card.module.css"



const CardComponent=({children})=>{
    return(
        <div className={cardContainer}>
        <div className={cardBody}>
        {children}
        </div>
        </div>
    )
}


export default CardComponent;