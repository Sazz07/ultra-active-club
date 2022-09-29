import React from 'react';

const Question3 = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-2">What is the use of useEffect besides loading data?</h1>
            <p>
            The useEffect Hook allows you to perform side effects in your components.
            Some examples of side effects are: fetching data, directly updating the DOM, and timers. <br />
            useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect. <br />
            If there are multiple dependencies, they should be included in the useEffect dependency array.
            </p>
        </div>
    );
};

export default Question3;