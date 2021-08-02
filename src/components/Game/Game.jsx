import React from 'react';
import Player from "./Player/Player";
import Maze from "./Maze/Maze";
import "./Game.css";
import { useSelector } from 'react-redux';

const Game = () => {
    let x = useSelector((state) => state.game.x);
    let y = useSelector((state) => state.game.y);
    let maze = useSelector((state) => state.game.maze);

    return (
        <div className="game">
            <Maze maze={maze} />
            <Player x={x} y={y} />
        </div>
    );
};

export default Game;
