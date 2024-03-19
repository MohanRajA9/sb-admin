import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function User () {
    return (
        <>
        <div> 
            <Link to="/user-create"  className= "btn btn-success" > create user </Link>
        </div>
        </>
    )
}
export default User