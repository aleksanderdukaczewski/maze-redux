import React from 'react';
import "./Cell.css";

const Cell = (props) => {
    const { top, right, bottom, left, x, y } = props;
    const generateWall = (wall) => {return(wall ? "1px solid black" : "1px solid #bdbdbd")};

    return (
        <div 
            className="cell"
            style={{
                borderTop: generateWall(top),
                borderRight: generateWall(right),
                borderBottom: generateWall(bottom),
                borderLeft: generateWall(left),
            }} 
        />
    );
};

export default Cell;
