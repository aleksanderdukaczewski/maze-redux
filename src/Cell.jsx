import { BorderBottom } from '@material-ui/icons';
import React from 'react';
import "./Cell.css";

const Cell = (props) => {
    const walls = { topWall: false, rightWall: true, bottomWall: false, leftWall: true };
    
    return (
        <div 
            className="cell"
            style={{
                borderTop: (walls.topWall ? "1px solid black" : "2px solid #bdbdbd"),
                borderRight: (walls.rightWall ? "1px solid black" : "2px solid #bdbdbd"),
                borderBottom: (walls.bottomWall ? "1px solid black" : "2px solid #bdbdbd"),
                borderLeft: (walls.leftWall ? "1px solid black" : "2px solid #bdbdbd"),
            }} 
        />
    )
}

export default Cell
