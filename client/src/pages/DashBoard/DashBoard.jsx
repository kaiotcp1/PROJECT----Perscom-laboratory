import React from 'react'
import SquadForm from '../../components/SquadForm/SquadForm'
import { useState } from 'react';
import SoldierForm from '../../components/SoldierForm/SoldierForm';
import Management from '../../components/Management/Management';

const DashBoard = () => {
    const [formType, setFormType] = useState('');

    const handleForm = (type) => {
        setFormType(type);
    };

    const renderForm = () => {
        if (formType === 'form1') return <SquadForm />;
        if (formType === 'form2') return <SoldierForm />;
        if (formType === 'form3') return <Management />;
    }

    return (
        <div>
            <div className='flex flex-row flex-wrap justify-center gap-5'>
                <button className="btn btn-info" onClick={() => handleForm('form1')}>Create Squad</button>
                <button className="btn btn-info" onClick={() => handleForm('form2')}>Create Soldier</button>
                <button className="btn btn-info" onClick={() => handleForm('form3')}>Menagement Soldier</button>
            </div>
            {renderForm()}
        </div>
    )
}

export default DashBoard