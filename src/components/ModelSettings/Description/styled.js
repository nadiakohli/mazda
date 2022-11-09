import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  border-right: ${({ borderRight }) => borderRight ? '3px solid #e3e3e3' : ''};
  margin: 20px 0;
  padding: 25px;

  & h2, span, p {
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }

  & h2 {
    font-size: 28px;
    text-transform: uppercase;
    font-weight: 400;

    @media screen and (max-width: 480px) {
      font-size: 21px;
    }
  }

  & p {
    font-size: 14px;
    
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }

  & span {
    margin-top: 10px;
    width: 40%;
    font-size: 14px;
    font-weight: 700;

    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export const ParagraphWrap = styled.div`
  margin-top: 25px;
`;
