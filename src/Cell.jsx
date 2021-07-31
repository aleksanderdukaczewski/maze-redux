import React from 'react';

// const UP = 0, RIGHT = 1, DOWN = 2, LEFT = 3;
const Cell = (props) => {
    const { walls } = props;
    const [top, right, bottom, left] = walls;

    const renderBorder = wallExists => {return(wallExists ? "1px solid black" : "1px solid white")};

    return (
        <div 
            className="cell" 
            style={{
                width: "20px",
                height: "20px",
                borderTop: renderBorder(top),
                borderRight: renderBorder(right),
                borderBottom: renderBorder(bottom),
                borderLeft: renderBorder(left)
            }}
        />
    );
};

export default Cell;
