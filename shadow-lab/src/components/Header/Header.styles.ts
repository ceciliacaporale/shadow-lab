import styled from "styled-components";

export const Title = styled.h1`
    padding: 3rem 0 0 0;
    font-family: "Squada One", sans-serif;
    color: ${({ theme }) => theme.colors.yellow};
    text-shadow: .05em .05em 0 black;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 56px;
    -webkit-text-stroke: .025em black;
    justify-content: center;
    display: flex;
`;

export const SubTitle = styled.h1`
    font-family: "Pixelify Sans", sans-serif;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 300;
    font-size: 20px;
    justify-content: center;
    display: flex;
    margin-bottom: 3rem;

       @media screen and (max-width: 404px) {
            margin-bottom: 1rem;
    }
    `;