import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Table from './Table'

function User() {
    return (
        <>
            <div>
                <Link to="/user-create" className="btn btn-success" > create user </Link>
                <Table />
            </div>
        </>
    )
}
export default User