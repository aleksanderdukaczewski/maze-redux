import { Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { fontWeight } from '@material-ui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { pause, resume, restart } from "./actions";
import "./Timer.css";

const Timer = ({ gameFinished, isRunning }) => {
    const dispatch = useDispatch();
    const toggleRunning = () => {return(isRunning ? dispatch(pause()) : dispatch(resume()))};
    const restartGame = () => {
        dispatch(restart()); 
        setCounter(0);
        setMinute('00');
        setSecond('00');
    };
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [counter, setCounter] = useState(0);

    const YouWonTypography = withStyles({
        root: {
          color: "green",
          fontWeight: "bold",
          marginBottom: "5px",
        }
    })(Typography);

    useEffect(() => {
        let intervalId;
    
        if (!gameFinished && isRunning) {
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
      }, [gameFinished, isRunning, counter])

    return (
        <div className="timer">
            {gameFinished && <YouWonTypography>
                YOU WON!    
            </YouWonTypography>}
            <Typography>
                Timer: {minute}:{second}
            </Typography>
            {!gameFinished && <Button color={isRunning ? "secondary" : "primary"} onClick={toggleRunning}>
                {isRunning ? "stop" : "start"}
            </Button>}
            <Button onClick={restartGame}>
                Restart game
            </Button>
        </div>
    )
};

export default Timer;
