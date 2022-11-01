import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: 150px;
  height: 40px;
  margin: 25px 0;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 3px;
  text-transform: uppercase;
  color: ${({ theme: { colors: { black } } }) => black};
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  border: 2px solid ${({ theme: { colors: { white } } }) => white};
  background-color: ${({ theme: { colors: { white } } }) => white};

  &:hover {
    background-color: transparent;
    color: ${({ theme: { colors: { white } } }) => white};
  }
`;
