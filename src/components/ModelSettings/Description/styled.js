import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  border-right: ${({ borderRight }) => borderRight ? '3px solid #e3e3e3' : ''};
  margin: 20px 0;
  padding: 25px;

  & h2, span {
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }

  & h2 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 400;
  }

  & span {
    margin-top: 10px;
    width: 40%;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const ParagraphWrap = styled.div`
  margin-top: 25px;
`;
