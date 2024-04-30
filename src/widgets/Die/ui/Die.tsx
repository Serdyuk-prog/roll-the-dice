import { useState, useEffect } from "react";
import "./Die.css";

export const Die = () => {
    const faces = 6;
    const maxRollTimes = 10;

    const [intrvl, setIntrvl] = useState();
    const [diceFace, setDiceFace] = useState(1);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [rollTimes, setRollTimes] = useState<number>();
    useEffect(() => {
        if (rollTimes === 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            clearInterval(intrvl);
            setBtnDisabled(false);
        }
    });

    function rollDice() {
        setBtnDisabled(true);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        clearInterval(intrvl);
        let counter = Math.floor(Math.random() * maxRollTimes + 1);
        setRollTimes(counter);
        const interval = setInterval(() => {
            setDiceFace(Math.floor(Math.random() * faces) + 1);
            counter--;
            setRollTimes(counter);
        }, 200);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setIntrvl(interval);
    }

    const dice = (
        <div className="dice-container">
            <div className={`dice face-${diceFace}`}>
                <div className="face-1">
                    <div className="dot-container">
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="face-3">
                    <div className="dot-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="face-4">
                    <div className="dot-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="face-2">
                    <div className="dot-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="face-5">
                    <div className="dot-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="face-6">
                    <div className="dot-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    const rollButton = (
        <button
            className="dan-btn dan-btn--default"
            disabled={btnDisabled}
            onClick={rollDice}
        >
            {btnDisabled}
            Roll Dice
        </button>
    );

    return (
        <div className="main-container">
            <h1>Roll the dice with React Hooks</h1>
            <div className="main-dice-container">{dice}</div>
            <div className="button-container">{rollButton}</div>
        </div>
    );
};
