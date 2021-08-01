import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./Timer.css";

const Timer = ({ gameFinished }) => {
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let intervalId;
    
        if (!gameFinished) {
          intervalId = setInterval(() => {
            const secondCounter = counter % 60;
            const minuteCounter = Math.floor(counter / 60);
    
            const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
            const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
    
            setSecond(computedSecond);
            setMinute(computedMinute);
    
            setCounter(counter => counter + 1);
          }, 1000)
        }
    
        return () => clearInterval(intervalId);
      }, [gameFinished, counter])

    return (
        <div className="timer">
            <Typography>
                Timer: {minute}:{second}
            </Typography>
        </div>
    )
};

export default Timer;
