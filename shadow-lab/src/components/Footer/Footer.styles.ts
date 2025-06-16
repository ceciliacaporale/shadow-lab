import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.muted};
    margin: 3rem 0;
    gap: 0.5rem;
    font-family: "Pixelify Sans", sans-serif;
    
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.muted};
        cursor: pointer;
    }

        @media screen and (max-width: 941px) {
        padding-bottom: 3rem;
    }
`;