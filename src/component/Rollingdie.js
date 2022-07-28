import React, { useState } from "react";
import "./rollingdie.css";
import Die from "./Die";

const Rollingdie = ({ sides }) => {
    const [state, setState] = useState({
        die1: "one",
        die2: "three",
        rolling: false,
        totalScore: 4,
    });

    const { die1, die2, rolling, totalScore } = state;

    const roll = () => {
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];
        const score1 = Object.values(newDie1);
        const score2 = Object.values(newDie2);
        setState({
            die1: Object.keys(newDie1),
            die2: Object.keys(newDie2),
            rolling: true,
            totalScore: score1[0] + score2[0],
        });

        setTimeout(() => {
            setState((prevState) => ({...prevState, rolling: false }));
        }, 1000);
    };

    return (

        <div className="boxy">
          <h1>Let's Roll...</h1>
        <div className = "roll-dice" >

        <div className = "rolldice-container" >

        <Die face = { String(die1) }
        rolling = { rolling }
        />
        <Die face = { String(die2) }
        rolling = { rolling }
        />
        </div>
        <button onClick = { roll }
        disabled = { rolling } >  { rolling ? "Rolling..." : "Roll Now" }
        </button>
        <h2 > Total Score: { totalScore } < /h2>
        </div>
        </div>
    );
};

Rollingdie.defaultProps = {
    sides: [
        { one: 1 },
        { two: 2 },
        { three: 3 },
        { four: 4 },
        { five: 5 },
        { six: 6 },
    ],
};

export default Rollingdie;
