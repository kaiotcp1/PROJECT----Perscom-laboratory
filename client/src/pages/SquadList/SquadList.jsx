import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import army from '../../assets/army.jpg';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../redux/loadingSlice';
import { useSelector, useDispatch } from 'react-redux'

const SquadList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const [squad, setSquad] = useState([]);

  const handleSquad = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/v1/squad/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSquad(response.data.squad);
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSquad();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Service</th>
            <th>Specialization</th>
            <th>Patent</th>
            <th>Active</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {squad.soldiers &&
            squad.soldiers.map((squadSoldier) => (
              <tr key={squadSoldier._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={army} alt="Avatar image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{squadSoldier.name}</div>
                      <img className='badge badge-ghost badge-sm' src={`/country/${squadSoldier.country}.png`} alt="Flag user" />
                    </div>
                  </div>
                </td>
                <td className=''>
                  {squadSoldier.service}
                </td>
                <td>
                <span className="badge badge-ghost badge-sm">{squadSoldier.specialization}</span>
                </td>
                <td>{squadSoldier.patent}</td>
                <td>
                  {squadSoldier.active ? (
                    <span className="badge badge-success gap-2">Active</span>
                  ) : (
                    <span className="badge badge-warning gap-2">Inactive</span>
                  )}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs" onClick={() => navigate(`/soldier/${squadSoldier.id}`)}>details</button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SquadList;
