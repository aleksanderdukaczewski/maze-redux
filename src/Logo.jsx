import React from 'react';
import logo from "./logo.png";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./Logo.css";

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} id="logo" alt="logo" />
            <div className="logo__text">
                <Typography fontFamily="Monospace">
                    <Box fontFamily="Monospace" fontSize="h3.fontSize" m={1}>
                        The Maze
                    </Box>
                </Typography>
            </div>
        </div>
    )
}

export default Logo;
