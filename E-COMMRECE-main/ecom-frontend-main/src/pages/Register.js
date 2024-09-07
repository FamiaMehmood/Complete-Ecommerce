import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const formData = {name, address, email, password}
    const submitForm = async () => {
        try {
            await axios.post("http://localhost:8000/api/buyers/register",formData);
            alert("Buyer Registered successfully")
            navigate("/login")
        } catch (error) {
            alert("Something went wrong")
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 left-col">
                    <h1 className='mt-4 text-center'>Signup</h1>
                        <form className='mt-5 shadow p-3 mb-5 bg-white rounded' onSubmit={(e) => e.preventDefault()}>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputEmail3" value = {name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Address</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="inputEmail3" value = {address} onChange={(e) => setAddress(e.target.value)}/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail3" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword3" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            
                            <p>Already have an account ? click here to <Link to = "/login">signin </Link></p>
                            <div className="text-center">
                            <button onClick={submitForm} class="btn" style={{background : "#093d91", color : "white", width : "140px"}}>Signup</button>
                            </div>
                            
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 right-col-col">
                        <img src="/images/sign.png" alt="" style={{ height: "500px", width: "600px" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register