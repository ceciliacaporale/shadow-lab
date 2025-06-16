import styled from 'styled-components';

interface ContainerProps {
  $boxShadow: string;
}

export const Container = styled.div<ContainerProps>`
  width: 190px;
  height: 190px;
  top: 7.5rem;
  background-color: pink;
  border: 2px solid black; 
  border-radius: 8px;
  box-shadow: ${props => props.$boxShadow};
  margin: 20px auto;
  transition: box-shadow 0.3s ease;
  
  display: block;
  position: relative;
`;