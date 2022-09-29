import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const Main = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);


    useEffect( () =>{
        
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data));

    }, [])

    const handleBtnClick = (selectedSport, flag) => {
        setExerciseTime(exerciseTime + selectedSport.required_time);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <section className="md:w-9/12">
                <div className="w-10/12 md:w-8/12 mx-auto mb-10">
                    <Header></Header>
                    <h3 className="text-left text-lg font-semibold">
                    Select Today's Exercises
                    </h3>
                </div>

                {/* card section */}
                <div className="w-10/12 md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        exercises.map(exercise => <Card
                        key={exercise.id}
                        exercise={exercise}
                        handleBtnClick={handleBtnClick}
                        ></Card>)
                    }
                </div>
            </section>

            <section className="w-10/12 mx-auto md:w-3/12 md:flex self-center"> 
                    <PersonalInfo exerciseTime={exerciseTime}></PersonalInfo>
            </section>

        </div>
    );
};

export default Main;