import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import armyBg from '../../assets/army.jpg'

const Management = () => {
    const [soldiers, setSoldiers] = useState([]);
    const [squads, setSquads] = useState([]);
    const [selectedSquad, setSelectedSquad] = useState(null);
    const [selectedSoldiers, setSelectedSoldiers] = useState([]);
    const token = localStorage.getItem('token');
    const currentUser = useSelector((state) => state.auth.currentUser);

    const handleSoldiers = async () => {
        try {
            const response = await axios.get('/api/v1/soldier', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const filteredSoldiers = response.data.soldiers.filter((soldier) => soldier.creator === currentUser._id);
            setSoldiers(filteredSoldiers);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSquads = async () => {
        try {
            const response = await axios.get('/api/v1/squad', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const filteredSquads = response.data.squads.filter((squad) => squad.creator === currentUser._id);
            setSquads(filteredSquads);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateSquad = async () => {
        if (selectedSquad && selectedSoldiers.length > 0) {
            try {
                const selectedSquadObj = squads.find((squad) => squad.id === selectedSquad);

                if (selectedSquadObj) {
                    const existingSoldiers = selectedSquadObj.soldiers.map((soldier) => soldier._id);

                    const updatedSoldiers = [...existingSoldiers];

                    selectedSoldiers.forEach((soldierId) => {
                        if (!existingSoldiers.includes(soldierId)) {
                            updatedSoldiers.push(soldierId);
                        }
                    });

                    await axios.patch(
                        `/api/v1/squad/${selectedSquad}`,
                        {
                            soldiers: updatedSoldiers,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        handleSoldiers();
        handleSquads();
    }, []);

    const handleSquadSelection = (squadId) => {
        setSelectedSquad(squadId);
    };

    const handleSoldierSelection = (soldierId) => {
        const isSelected = selectedSoldiers.includes(soldierId);

        if (isSelected) {
            setSelectedSoldiers(selectedSoldiers.filter((id) => id !== soldierId));
        } else {
            setSelectedSoldiers([...selectedSoldiers, soldierId]);
        }
    };

    return (
        <div>
            <div className="flex justify-center gap-5 mt-10">
                <select
                    className="select select-primary max-w-xs"
                    onChange={(e) => handleSquadSelection(e.target.value)}
                    value={selectedSquad || ''}
                >
                    <option disabled value="">Select a Squad</option>
                    {squads.map((squad) => (
                        <option key={squad.id} value={squad.id}>
                            {squad.name}
                        </option>
                    ))}
                </select>
                <button
                    className="btn btn-primary"
                    onClick={handleUpdateSquad}
                    disabled={!selectedSquad || selectedSoldiers.length === 0}
                >
                    Update Soldiers
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {soldiers.map((soldier) => (
                    <div key={soldier.id} className="card card-side bg-base-100 shadow-xl">
                        <figure className='ml-4 shadow-md rounded'>
                            <img src={armyBg} alt="background" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{soldier.name}</h2>
                            <p>{soldier.description}</p>
                            <div className="card-actions justify-end shadow-xl">
                                <button
                                    className={`btn btn-primary ${selectedSoldiers.includes(soldier._id) ? 'btn-selected' : ''
                                        }`}
                                    onClick={() => handleSoldierSelection(soldier._id)}
                                >
                                    {selectedSoldiers.includes(soldier._id) ? 'Deselect' : 'Select'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Management;
