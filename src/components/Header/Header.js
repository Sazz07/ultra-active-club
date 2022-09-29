import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="mt-10 mb-6 flex justify-center items-center">
            <h1 className="inline text-4xl font-black text-violet-500  text-center"> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> StayFit-Daily-Workout</h1>
            
        </div>
    );
};

export default Header;