import { Die } from "@/widgets/Die";
import styled from "styled-components";

export const Game = () => {
    return (
        <GameWrapper>
            <Die />
        </GameWrapper>
    );
};

const GameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
