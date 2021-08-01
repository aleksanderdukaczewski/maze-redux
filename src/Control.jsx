import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { moveUp, moveRight, moveDown, moveLeft } from './actions';

const Control = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    });
    const handleKeyDown = (e) => {
        console.log("Key event", e);
        handleKeyInput(e.key);
        document.removeEventListener('keydown', handleKeyDown);
    };
    const handleKeyUp = (e) => {
        document.addEventListener('keydown', handleKeyDown, {once: true});
    };
    const handleKeyInput = (key) => {
        switch (key) {
            case "ArrowUp":
                console.log("dispatching moveup");
                dispatch(moveUp());
                break;
            case "ArrowRight":
                console.log("dispatching moveright");
                dispatch(moveRight());
                break;
            case "ArrowDown":
                console.log("dispatching movedown");
                dispatch(moveDown());
                break;
            case "ArrowLeft":
                console.log("dispatching moveleft");
                dispatch(moveLeft());
                break;
        }
    };

    return (
        <></>
    )
}

export default Control
