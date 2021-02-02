import styled from "styled-components";

export const StyledInput = styled.input`
  height: 2.5rem;
  width: 15rem;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  padding-left: 1rem;
`;

export const StyledButton = styled.button`
  width: 10rem;
  background-color: rgb(186, 85, 211);
  height: 3rem;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
  padding: 0.5rem;

  &:hover {
    background-color: rgb(128, 0, 128);
    transition: 0.5s;
  }
`;
