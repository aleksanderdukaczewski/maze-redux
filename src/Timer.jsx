import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let intervalId;

        intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
        }, 1000)

        return () => clearInterval(intervalId);
    }, [counter])

    return (
        <div className="timer">
            <span className="minute">{minute}</span>
            <span>:</span>
            <span className="second">{second}</span>
        </div>
    )
};

export default Timer;
