import { createContext } from "react"
import React from "react"


export const UserContext= createContext({users:[]});


{/*function Card(props){
    return (
        <div style={{maxWidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id="createStatus">{props.status}</div>)}
            </div>
        </div>
    )
}*/}

export default UserContext;