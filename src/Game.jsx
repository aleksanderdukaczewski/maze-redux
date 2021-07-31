import React from 'react';
import Cell from "./Cell";
import "./Game.css";

const testCellInfo = [true,true,true,true];

const Game = () => {
    return (
        <div className="game">
            <Cell walls={testCellInfo} />
        </div>
    );
};

export default Game;
