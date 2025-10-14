import React from "react";
import { useParams } from "react-router-dom";
const UserDetails = ()=> {
    const param = useParams()
    const userId= param.userId
    return <div>Details about user {userId}</div>
}
export default UserDetails
/*Linked to About.jsx page  */