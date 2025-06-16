import styled from 'styled-components';

export const CopyButton = styled.button`
  color: black;
  position: absolute;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  padding: 8px 10px;
  font-family: 'Pixelify Sans', sans-serif;
  cursor: pointer;
  display: flex;
  width: 120px;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
`;

export const Tooltip = styled.span<{ $visible: boolean }>`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid black;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px 5px 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.black} transparent transparent;
  }
`;