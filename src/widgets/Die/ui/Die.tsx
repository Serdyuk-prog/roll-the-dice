import { useState, useEffect } from "react";
import "./Die.css";

interface DieProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dieRef: any;
}

export const Die = ({ dieRef }: DieProps) => {
    const faces = 6;
    const maxRollTimes = 10;
    const minRollTimes = 3;

    const [intervalId, setIntervalId] = useState<number | undefined>();
    const [diceFace, setDiceFace] = useState<number>();
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [rollTimes, setRollTimes] = useState<number | undefined>();
    useEffect(() => {
        if (rollTimes === 0) {
            clearInterval(intervalId!);
            setBtnDisabled(false);
            console.log(diceFace);
        }
    }, [rollTimes, intervalId, diceFace]);

    useEffect(() => {
        console.log(dieRef);
    }, [dieRef]);

    function rollDice() {
        setBtnDisabled(true);
        clearInterval(intervalId!);

        let counter =
            Math.floor(Math.random() * (maxRollTimes - minRollTimes + 1)) +
            minRollTimes;
        setRollTimes(counter);
        const interval = setInterval(() => {
            setDiceFace(Math.floor(Math.random() * faces) + 1);
            counter--;
            setRollTimes(counter);
        }, 200);
        setIntervalId(interval as unknown as number);
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
            Roll Dice
        </button>
    );

    return (
        <div className="main-container">
            <h1>Roll the dice with React Hooks</h1>
            <div className="main-dice-container" ref={dieRef}>
                {dice}
            </div>
            <div className="button-container">{rollButton}</div>
        </div>
    );
};
