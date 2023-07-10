import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ebroupa2 from '../../assets/ebroupa2.png';
import { setLoading } from '../../redux/loadingSlice';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

const Soldier = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const [soldier, setSoldier] = useState({});
    const [showUpdateSoldier, setShowUpdateSoldier] = useState(false);

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


    const handleSoldier = async () => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get(`/api/v1/soldier/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setSoldier(response.data.soldier);
            setSoldierData(response.data.soldier);
            dispatch(setLoading(false));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleSoldier();
    }, []);

    const deleteSoldier = async (id) => {
        try {
          const response = await axios.delete(`/api/v1/soldier/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (error) {
          console.log(error);
        }
      };

    const handleChange = (e) => {
        setSoldierData({
            ...soldierData,
            [e.target.id]: e.target.value,
        });
    };

    const updateSoldier = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`/api/v1/soldier/${id}`, soldierData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  bg-neutral-900">
            <div className="lg:col-span-1 relative">
                <img
                    src={ebroupa2}
                    alt="Imagem do Soldado"
                    className="mx-auto mt-5"
                />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:col-span-3 mt-3">
                <div className="bg-white p-4">
                    <img
                        src="/caminho/para/imagem-badges.jpg"
                        alt="Imagem de Badges"
                        className="mx-auto"
                    />
                </div>
                <div className="bg-white p-4">
                    <img
                        src="/caminho/para/imagem-specialization.jpg"
                        alt="Imagem de Specialization"
                        className="mx-auto"
                    />
                </div>
                <div className="bg-white p-4">
                    <img
                        src="/caminho/para/imagem-condecoration.jpg"
                        alt="Imagem de Condecoration"
                        className="mx-auto"
                    />
                </div>
            </div>
            <div className="lg:col-span-4">
                <div className="bg-gray-100 p-4">
                    <div className="grid grid-cols-2 gap-2">
                        <span className="font-bold">Name:</span>
                        <span>{soldier.name}</span>
                        <span className="font-bold">Patent:</span>
                        <span>{soldier.patent}</span>
                        <span className="font-bold">Active:</span>
                        {soldier.active ? (
                            <span className="badge badge-success">Active</span>
                        ) : (
                            <span className="badge badge-warning">Inactive</span>
                        )}
                        <span className="font-bold">Service:</span>
                        <span>{soldier.service}</span>
                        <span className="font-bold">Specialization:</span>
                        <span>{soldier.specialization}</span>
                        <span className="font-bold">Badges:</span>
                        <span>{soldier.badges}</span>
                        <span className="font-bold">Condecoration:</span>
                        <span>{soldier.condecoration}</span>
                        <span className="font-bold">Steam:</span>
                        <span>{soldier.steam}</span>
                        <span className="font-bold">Country:</span>
                        <img className='w-7' src={`/country/${soldier.country}.png`} alt="Flag user" />

                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5 lg:justify-end mb-3'>
                <button className="btn btn-error" onClick={() => deleteSoldier(soldier.id)}>Delete</button>
                <button className="btn btn-warning" onClick={() => setShowUpdateSoldier(true)}>Update</button>
                <button className="btn btn-success" onClick={() => navigate('/squad')}>Squad</button>
                {showUpdateSoldier && (
                    <dialog open className="modal">
                        <form method="dialog" className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
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
                                        value={soldierData.condecoration} onChange={handleChange}
                                    >
                                        <option value="">Select condecoratiom</option>
                                        <option value="corpo de tropa">Corpo de Tropa</option>
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
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={updateSoldier}
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
                            <div className="modal-action">
                                <button className="btn" onClick={() => setShowUpdateSoldier(false)}>Close</button>
                            </div>
                        </form>
                    </dialog>
                )}

            </div>
        </div >


    );
};

export default Soldier;
