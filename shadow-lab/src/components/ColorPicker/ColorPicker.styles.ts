import styled from "styled-components";

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  box-shadow: 2px 2px 0 black;
  background-color: ${({ theme }) => theme.colors.white};
  width: 30px;

  > div {
      padding: 1rem;
}
`;
