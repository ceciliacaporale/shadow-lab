import styled from "styled-components";

export const MainContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6rem;

    @media screen and (max-width: 941px) {
        flex-direction: column;
        gap: 2rem;
    }

    @media screen and (max-width: 404px) {
        padding: 1rem;
    }
    `;