import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { LoginUser } from '../../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setBearerToken, setCurrentUser } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState(null);
    const [name, setName] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.currentUser);
    const token = localStorage.getItem('token');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const user = { name, email, password, passwordConfirm };
            const response = await axios.post('/api/v1/auth/signup', user, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-2">Welcome to PERSCOM, soldier management <br /> to help Milsim groups manage members and improve operational efficiencies</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" onChange={(e) => setName(e.target.value)} />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" onChange={(e) => setPassword(e.target.value)} />
                            <label className="label">
                                <span className="label-text">Password Confirm</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" onChange={(e) => setPasswordConfirm(e.target.value)} />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">You have account? Make login here</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={handleRegister}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login