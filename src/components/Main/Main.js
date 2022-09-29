import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';

const Main = () => {
    const [exercises, setExercises] = useState([]);

    useEffect( () =>{
        
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercises(data));

    }, [])

    return (
        <div className="flex flex-col md:flex-row">
            <section className="md:w-9/12">
                <div className="w-10/12 md:w-8/12 mx-auto mb-10">
                    <Header></Header>
                    <h3 className="text-left text-lg text-violet-700 font-semibold">
                    Select Today's Exercises
                    </h3>
                </div>

                {/* card section */}
                <div className="w-10/12 md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        exercises.map(exercise => <Card
                        key={exercise.id}
                        exercise={exercise}
                        ></Card>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Main;