import { Game } from "@/features/Game";
import styled from "styled-components";

export const GamePage = () => {
    return (
        <GamePageWrapper>
            <HeadingStyled>Сделайте ставку</HeadingStyled>
            <Game />
        </GamePageWrapper>
    );
};

const GamePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeadingStyled = styled.h2`
    font-size: 20px;
`;
