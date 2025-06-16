import styled from "styled-components";

export const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  .pixel {
    color: ${({ theme }) => theme.colors.black};
    font-family: "Pixelify Sans", sans-serif;
  }
`;

export const RangeLabel = styled.label`
  font-size: 1rem;
  font-family: "Pixelify Sans", sans-serif;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRange = styled.input`
  width: 100%;
  height: 12px;
  -webkit-appearance: none;
  background: ${({ theme }) => theme.colors.muted};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  outline: none;
  cursor: pointer;
  box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.black};

  /* thumb p/ webkit (Chrome, Safari) */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.black};
    cursor: pointer;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.yellow};
      transform: scale(1.1);
    }
  }

  /* thumb firefox */
  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.black};
    cursor: pointer;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.yellow};
      transform: scale(1.1);
    }
  }

  /* firefox */
  &::-moz-range-track {
    background: ${({ theme }) => theme.colors.muted};
    border-radius: 10px;
    height: 12px;
    border: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &::-webkit-slider-thumb {
      background: ${({ theme }) => theme.colors.muted};
    }
    
    &::-moz-range-thumb {
      background: ${({ theme }) => theme.colors.muted};
    }
  }
`;

export const RangeValue = styled.span`
  font-size: 0.85rem;
  font-family: "Pixelify Sans", sans-serif;
  font-weight: 700;
  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.black};
  display: inline-block;
  min-width: 40px;
  text-align: center;
`;