import React, { useEffect } from 'react';
import Timer from "./Timer/Timer";
import { useSelector, useDispatch } from 'react-redux'
import { moveUp, moveRight, moveDown, moveLeft, finishGame } from "../../actions";
import "./Control.css";

const Control = () => {
    const dispatch = useDispatch();
    const x = useSelector((state) => state.game.x);
    const y = useSelector((state) => state.game.y);
    const gameFinished = useSelector((state) => state.game.gameFinished);
    const isRunning = useSelector((state) => state.game.isRunning);
    const pointPositions = useSelector((state) => state.game.pointPositions);
    console.log(pointPositions);


    useEffect(() => {
        if (x===20 && y===20) {
            dispatch(finishGame());
        }
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    });
    const handleKeyDown = (e) => {
        handleKeyInput(e.key);
        document.removeEventListener('keydown', handleKeyDown);
    };
    const handleKeyUp = (e) => {
        document.addEventListener('keydown', handleKeyDown, {once: true});
    };
    const handleKeyInput = (key) => {
        if (!gameFinished && isRunning) switch(key) {
            case "ArrowUp":
                dispatch(moveUp());
                break;
            case "ArrowRight":
                dispatch(moveRight());
                break;
            case "ArrowDown":
                dispatch(moveDown());
                break;
            case "ArrowLeft":
                dispatch(moveLeft());
                break;
        }
    };

    return (
        <div className="control">
            <Timer gameFinished={gameFinished} isRunning={isRunning} />
        </div>
    )
}

export default Control
