
import React,{userContext} from "react"

import {Navigate} from "react-router-dom"
import{AuthContext} from "../context/AuthContext"

const ProtectedRouter = ({children})=>{
    const{user} =userContext(AuthContext);

    if(!user){
        return <Navigate to ="/"/>;
    }

    return children;
}

export default ProtectedRouter;