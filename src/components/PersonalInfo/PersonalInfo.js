import React, { useEffect, useState } from 'react';
import image from '../../images/me.jpg'
import Rest from '../Rest/Rest';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb, getStoredObj } from '../Utilities/fakedb';

const PersonalInfo = ({exerciseTime}) => {
    const [restTime, setRestTime] = useState(0);
    const restTimeArray = [10, 20, 30, 40, 50];

    const notify = () => toast.success('Well done! you have complete your workout');

    const handleRestBtnClick = selectedRestTime => {
        setRestTime(selectedRestTime);
        addToDb(selectedRestTime);
    };

    useEffect( () =>{
        const restTimeObj = getStoredObj();
        setRestTime(restTimeObj);
    }, [restTime]);

    return (
        <div className="px-10 pb-10 rounded-xl shadow-2xl">
            <div>
                <div className="flex space-x-5 mt-10 pt-10">
                <img className="w-14 h-14 rounded-full" src={image} alt="" />
                <div className="text-left">
                    <h3 className="text-lg font-semibold">Md. Sazzad Hossain</h3>
                    <p>
                    <small>Dhaka, Bangladesh</small>
                    </p>
                </div>
                </div>

                {/* info */}
                <div className="flex space-x-10 mt-8 p-2 bg-slate-100 rounded-2xl">
                <p><span className="font-bold">75 KG</span><br /> Weight</p>
                <p><span className="font-bold"> 5'7"</span><br /> Height</p>
                <p><span className="font-bold">25 years</span><br /> Age</p>
                </div>

                {/* rest */}
                <div className="mt-8">
                <h4 className="text-left text-lg font-medium mb-2 text-zinc-600">
                    Take a Rest:
                </h4>
                <div className="flex space-x-6 bg-slate-100 rounded-2xl p-2">
                    {
                        restTimeArray.map(time => <Rest
                        key={time}
                        time={time}
                        handleRestBtnClick={handleRestBtnClick}
                        ></Rest>)
                    }
                </div>
                </div>

                {/* exercise details */}
                <div className="mt-8 text-left">
                    <h4 className="text-lg font-medium mb-2 text-zinc-600">Exercise Details:</h4>
                    <div className="flex justify-between p-2 rounded-xl bg-slate-100 ">
                        <h4>Exercise time:</h4>
                        <p>{exerciseTime} seconds</p>
                    </div>
                    <div className="flex justify-between bg-slate-100 p-2 rounded-xl mt-5">
                        <h4>Rest time:</h4>
                        <p>{restTime} seconds</p>
                    </div>
                </div>

                <button
                onClick={notify}
                className="bg-purple-500 py-2 w-full mt-5 rounded-xl text-white font-bold"
                >
                Activity Completed
                </button>
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                ></ToastContainer>
            </div>
        </div>
    );
};

export default PersonalInfo;