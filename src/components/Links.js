import React from "react";

function Links(props){
    return(
    <div>
        {console.log(props)}
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href = {props.linkedin}> {props.linkedin}</a>
    </div>

    )}

export default Links;
// const h3 = <h3> <strong>Links</strong> </h3>

// <a href = {user.links.github}>{user.links.github} </a
    
// <a href = {user.links.linkedin}> {user.links.linkedin </a>