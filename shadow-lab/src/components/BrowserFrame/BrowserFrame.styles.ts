import styled from "styled-components";

export const ContainerMain = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.black};
  width: 100%;
  border-radius: 8px;
  max-width: 400px;
  min-height: 300px;
  background-color: #fefefe;
  background-image: radial-gradient(#ddd0d0 1px, transparent 1px);
  background-size: 20px 20px;
  height: 500px;
  box-shadow: 5px 5px 0 black;
 `;

export const HeaderControls = styled.div`
    height: 35px;
    font-family: "Pixelify Sans", sans-serif;
    border-radius: 6px 6px 0 0;
    background-color: ${({ theme }) => theme.colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    position: relative;
    
    
 .star {
    position: absolute;
    right: -14px;
    top: 80px;
    transition: transform 0.2s ease-in-out;
    z-index: 9999;

    &:hover {
      transform: scale(1.2);
    }
  }

  .star-pink {
    position: absolute;
    left: -15px;
    top: 290px;
    transition: transform 0.1s ease-in-out;
    z-index: 9999;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-right: auto;
  padding-left: 8px;

    p {
        margin-left: 70px;
    }
`;

export const WindowButton = styled.button`
  background-color: ${({ color }) => color || "#ccc"};
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: auto;

  svg {
    width: 12px;
    height: 12px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ControlButton = styled.button`
 position: relative;
top: 200px;
left: 145px;
`;