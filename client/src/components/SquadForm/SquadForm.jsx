import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { createSquad } from '../../api/squad';
import { useSelector } from 'react-redux'


const SquadForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState()
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.auth.currentUser);

    const handleSquad = async (e) => {
        e.preventDefault();
        try {
            const squadName = { name };
            const response = await axios.post(`/api/v1/squad/${user._id}`, squadName, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative flex flex-col justify-center overflow-hidden">
            <div className="w-full p-6 m-auto bg-base-100 rounded-md shadow-md ring-2 ring-gray-800/50 md:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-700">Create Squad</h1>
                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Squad name</span>
                        </label>
                        <input type="text" placeholder="Name" className="w-full input input-bordered" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <button className="btn btn-block" onClick={handleSquad}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SquadForm