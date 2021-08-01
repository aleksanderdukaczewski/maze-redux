import React from 'react';
import "./Player.css";

const Player = (props) => {
    const { x, y } = props;

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
