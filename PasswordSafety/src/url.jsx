import React from "react";

function URL(props){
    return (
        <a href={props.link} className="urlClass">{props.display}</a>
    )
}

export default URL;