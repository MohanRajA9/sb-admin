import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from './UserContext'

function UserCreate() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const history = useHistory()
    const data = useContext(UserContext) //subscription
    console.log(data)//{userData: Array(0), setUserData: ƒ}

    const handleClick = () => {
        // console.log(name, email, phone)
        const newUserData = {
            name,
            email,
            phone
        }
        console.log(newUserData)
        //copy userData and add newUserData
        data.setUserData([...data.userData, newUserData])
        console.log("data", data.userData)
        history.push("/user")
    }
    return (
        <div className="container" >
            <h1>User Create</h1>

            <div className="row" >

                <div className="col-lg-12" >
                    <label>Name</label>
                    <input type="text" name="name" id="name" className="form-control"
                        onChange={(e) => { setName(e.target.value) }} />

                </div>

                <div className="col-lg-12" >
                    <label>E-mail</label>
                    <input type="text" name="email" id="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} />

                </div>

                <div className="col-lg-12" >
                    <label>Phone</label>
                    <input type="number" name="phone" id="phone" className="form-control"
                        onChange={(e) => { setPhone(e.target.value) }} />
                </div>

            </div>
            <div className="row" style={{ display: "flex", justifyContent: "center" }} >
                <div className="btn btn-primary" >
                    <input className="btn btn-primary" type="submit" onClick={handleClick} />
                </div>

            </div>

        </div>
    )
}

export default UserCreate

