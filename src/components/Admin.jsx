import React from 'react'
import { useParams } from 'react-router-dom'

function Admin() {
    const param=useParams()
    const adminName=param.name

    return (
    <div>These are details of admin {adminName}</div>
  )
}
export default Admin