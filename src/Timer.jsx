import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { pause, resume, restart } from "./actions";
import "./Timer.css";

const useStyles = makeStyles({
    youWon: {
        color: "green",
        fontWeight: "bold",
        marginBottom: "5px",
    },
    timer: {
        fontWeight: "500",
    }
});

const Timer = ({ gameFinished, isRunning }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
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
            {gameFinished && <Typography className={classes.youWon}>
                YOU WON!    
            </Typography>}
            <Typography className={classes.timer}>
                Time: {minute}:{second}
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
