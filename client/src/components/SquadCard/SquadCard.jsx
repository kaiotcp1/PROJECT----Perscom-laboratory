import React, { useEffect, useState } from 'react'
import army from '../../assets/army.jpg'
import { getSquads } from '../../api/squad'
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../redux/loadingSlice';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const SquadCard = () => {
    const [squads, setSquads] = useState([]);
    const currentUser = useSelector(state => state.auth.currentUser);
    const [user, setUser] = useState(currentUser);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        const handleSquads = async () => {
            try {
                dispatch(setLoading(true));
                const response = await getSquads();
                const filteredSquads = response.squads.filter(squad => squad.creator === user._id);
                dispatch(setLoading(false));

                setSquads(filteredSquads);
            } catch (error) {
                console.log(error);
            }
        };

        if (user && user._id) {
            handleSquads();
        }
    }, [user]);

    const deleteSquad = async (id) => {
        try {
            const response = await axios.delete(`/api/v1/squad/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-5 md:justify-center'>
            {squads.map(squad => (
                <div className="card bg-base-100 shadow-xl md:w-96" key={squad.id}>
                    <figure><img src={army} alt="Army" /></figure>
                    <div className="card-body">
                        <div>
                            <h2 className="card-title">{squad.name}</h2>
                            <p>Descrição do squad</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary bg-green-800 hover:bg-green-500" onClick={() => navigate(`/squad-list/${squad.id}`)}>Access</button>
                                <button className="btn btn-primary bg-red-800  hover:bg-red-500" onClick={() => deleteSquad(squad.id)}>Delete</button>
                                {/* <button className="btn btn-primary bg-yellow-800 hover:bg-yellow-500">Eddit</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SquadCard