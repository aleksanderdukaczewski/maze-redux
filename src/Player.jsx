import React from 'react';
import "./Player.css";

const Player = (props) => {
    const { pos } = props;
    const { x, y } = pos;

    return (
        <div 
            className="player" 
            style={{
                gridColumn: x,
                gridRow: y,
            }}     
        />
    );
};

export default Player;
