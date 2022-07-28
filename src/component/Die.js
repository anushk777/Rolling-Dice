import React from "react";
import "./die.css";
const Die = ({ face, rolling }) => {
    return <i className = { `fas fa-dice-${face} ${rolling && "shaking"} ` }
    />;
};
export default Die;