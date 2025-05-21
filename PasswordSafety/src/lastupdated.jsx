import React from "react";
import Text from "./text";

function LastUpdated(props){
    return(
        <div className="lastUpdated">
           <Text txt={"Sist oppdatert: " + props.date} ></Text> 
        </div>
    )
}

export default LastUpdated