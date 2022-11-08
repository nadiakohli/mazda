import styled from 'styled-components';

export const Wrap = styled.div`
  width: 33.4%;
  height: 540px;

  & img {
    width: 100%;
    height: 400px;
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-right: ${({ borderRight }) => borderRight ? '3px solid #e3e3e3' : ''};
  margin: 20px 0;

  & h3, p {
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }

  & h3 {
    font-size: 21px;
    text-transform: uppercase;
    font-weight: 800;
  }

  & p {
    margin-top: 10px;
    text-align: center;
    width: 75%;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme: { colors: { granite } } }) => granite};
  }

  & img {
    height: 100%;
  }
`;
