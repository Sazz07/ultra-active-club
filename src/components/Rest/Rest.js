import React from 'react';

const Rest = ({time, handleRestBtnClick}) => {
    return (
        <div>
            <button onClick={() => handleRestBtnClick(time)} className="p-2 rounded-full text-white bg-purple-500">{time}</button>
        </div>
    );
};

export default Rest;