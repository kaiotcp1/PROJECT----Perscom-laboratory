import React, { useEffect, useState } from 'react'
import { LoginUser } from '../../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setBearerToken, setCurrentUser } from '../../redux/authSlice';
import { setLoading } from '../../redux/loadingSlice';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.currentUser);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const user = { email, password };
            const response = await LoginUser(user);
            dispatch(setLoading(false));
            localStorage.setItem('token', response.token);
            dispatch(setCurrentUser(response.user));
            navigate('/squad')
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-2">Welcome to PERSCOM, soldier management <br /> to help Milsim groups manage members and improve operational efficiencies</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
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
                                <a href="/register" className="label-text-alt link link-hover">No have account?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login