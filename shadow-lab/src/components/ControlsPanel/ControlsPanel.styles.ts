import styled from "styled-components";

export const ControlsPanelWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.black};
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  border-radius: 8px;
  box-shadow: 5px 5px 0 black;
  background-color: ${({ theme }) => theme.colors.white};

  > div {
    padding: 1rem;
  }
`;

export const HeaderControls = styled.div`
  font-family: "Pixelify Sans", sans-serif;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.pink};
    display: flex;
    border-radius: 6px 6px 0 0;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`;

export const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  label {
      font-family: "Pixelify Sans", sans-serif;
      color: black;
  }

`;
