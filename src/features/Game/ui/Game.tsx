import { Die } from "@/widgets/Die";
import { useRef } from "react";
import styled from "styled-components";

export const Game = () => {
    // const [isDisabled, setIsDisabled] = useState(false);
    const DieRef = useRef();
    return (
        <GameWrapper>
            <Die dieRef={DieRef} />
        </GameWrapper>
    );
};

const GameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
