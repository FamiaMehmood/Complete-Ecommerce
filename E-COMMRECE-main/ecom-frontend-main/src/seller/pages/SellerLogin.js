import React from 'react'
import { Link } from 'react-router-dom'

const SellerLogin = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 left-col">
                    <h1 className='mt-4 text-center'>Login As Seller</h1>
                        <form className='mt-5 shadow p-3 mb-5 bg-white rounded'>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail3"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword3"/>
                                </div>
                            </div>
                            
                            <p>Dont have an account ? click here to <Link to = "/register">signup </Link></p>
                            <div className="text-center">
                            <button type="submit" class="btn" style={{background : "#093d91", color : "white", width : "140px"}}>Sign in</button>
                            </div>
                            
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 right-col-col">
                        <img src="/images/Login (2).jpg" alt="" style={{ height: "500px", width: "600px" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerLogin