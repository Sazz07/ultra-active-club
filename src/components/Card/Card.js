import React from 'react';

const Card = ({exercise, handleBtnClick}) => {

    const {img, name, required_time} = exercise;

    return (
        <div className="shadow-2xl p-2 rounded">
            <div>
                <div className="p-2">
                    <img className='rounded' src={img} alt="" />
                </div>
                <div className="space-y-1">
                    <h4 className="text-xl font-semibold">{name}</h4>
                    <p>
                    <small>Time required: {required_time} seconds</small>
                    </p>
                    <button className="rounded-xl w-full bg-violet-600 py-2 px-5 text-white"
                    >Start Exercise
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;