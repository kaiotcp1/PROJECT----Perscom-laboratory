import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux'

const SoldierForm = () => {
    const token = localStorage.getItem('token');
    const currentUser = useSelector(state => state.auth.currentUser);

    const [soldierData, setSoldierData] = useState({
        name: '',
        patent: '',
        steam: '',
        service: '',
        specialization: '',
        badges: '',
        condecoration: '',
        country: '',
        active: '',
    });

    const handleChange = (e) => {
        setSoldierData({
            ...soldierData,
            [e.target.id]: e.target.value,
        });
    };


    const handleSquad = async (e) => {
        e.preventDefault();
        try {
            const squadName = { name };
            const response = await axios.post(`/api/v1/soldier/${currentUser._id}`, soldierData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <form className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="text-gray-700">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="input input-bordered input-info w-full"
                        value={soldierData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="steam" className="text-gray-700">
                        Steam:
                    </label>
                    <input
                        type="text"
                        id="steam"
                        className="input input-bordered input-info w-full"
                        value={soldierData.steam}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="patent" className="text-gray-700">
                        Patent:
                    </label>
                    <select id="patent" className="input input-bordered input-success w-full"
                        value={soldierData.patent} onChange={handleChange}
                    >
                        <option value="">Select Patent</option>
                        <option value="Soldier">Soldier</option>
                        {/* Opções do select */}
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="service" className="text-gray-700">
                            Service:
                        </label>
                        <select id="service" className="select select-info w-full max-w-xs"
                            value={soldierData.service} onChange={handleChange}>
                            <option value="null">Select service</option>
                            <option value="infantary">Infantary</option>

                            {/* Opções do select */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="specialization" className="text-gray-700">
                            Specialization:
                        </label>
                        <select
                            id="specialization"
                            className="select select-info w-full max-w-xs"
                            value={soldierData.specialization} onChange={handleChange}

                        >
                            <option value="">Select specialization</option>
                            <option value="special-force">Special Force</option>
                            {/* Opções do select */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="badges" className="text-gray-700">
                            Badges:
                        </label>
                        <select id="badges" className="select select-info w-full max-w-xs"
                            value={soldierData.badges} onChange={handleChange}
                        >
                            <option value="">Select badges</option>
                            <option value="Curso-CIGS">Cigs</option>
                            <option value="combat-pilot">combat pilot</option>

                            {/* Opções do select */}
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="condecoration" className="text-gray-700">
                        Condecoration:
                    </label>
                    <select
                        id="condecoration"
                        className="select select-accent w-full"
                        value={soldierData.condecoratiom} onChange={handleChange}
                    >
                        <option value="">Select condecoration</option>
                        <option value="corpo de tropa">corpo de tropa</option>
                        {/* Opções do select */}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="text-gray-700">
                        Country:
                    </label>
                    <select id="country" className="input input-bordered input-success w-full"
                        value={soldierData.country} onChange={handleChange}
                    >
                        <option value="">Select country</option>
                        <option value="br">brasil</option>
                        {/* Opções do select */}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="active" className="text-gray-700">
                        Active:
                    </label>
                    <select id="active" className="input input-bordered input-primary w-full"
                        value={soldierData.active} onChange={handleChange}
                    >
                        <option value="">Select Active</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                        {/* Opções do select */}
                    </select>
                </div>
                <div className="mt-8">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSquad}
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );

}

export default SoldierForm