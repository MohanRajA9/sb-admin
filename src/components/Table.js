import React, { useContext } from "react"
import { UserContext } from "./UserContext"

function Table() {
    const data = useContext(UserContext)
    //    console.log(data) //{userData: Array(2), setUserData: ƒ}
    // console.log(data.userData[0].name)

    return (
        <div>
            <div className='card' >
                <div className='card-header' >
                    User Data
                </div>
                <div className='card-body' >
                    <div className='table-responsive' >
                        <table className='table table-bordered' id='dataTable' width='100%' cellSpacing='0' >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>E-Mail</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.userData.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table