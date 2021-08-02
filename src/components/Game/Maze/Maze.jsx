import React from 'react';
import Cell from "./Cell/Cell";
import Target from "./Target/Target";

const Maze = (props) => {
    const { maze } = props;
    return (
        <>
            {(maze.map((row) => {
                return(row.map((cellInfo) => {
                    return(<Cell {...cellInfo} />);
                }));
            }))}
            <Target />
        </>
    );
};

export default Maze;
