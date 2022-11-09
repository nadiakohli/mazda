import styled from 'styled-components';

export const Wrap = styled.div`
  width: 33.3%;
  height: 540px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  & img {
    width: 100%;
    height: 400px;
    
    @media screen and (max-width: 768px) {
      height: 77%;
    }
  }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  border-right: ${({ borderRight }) => borderRight ? '3px solid #e3e3e3' : ''};
  margin: 20px 0;

  @media screen and (max-width: 768px) {
    border-right: none;
    height: 70px;
  }

  & h3, p {
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }

  & h3 {
    font-size: 21px;
    text-transform: uppercase;
    font-weight: 800;

    @media screen and (max-width: 950px) {
      font-size: 18px;
    }

    @media screen and (max-width: 768px) {
      font-size: 21px;
    }

    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }

  & p {
    margin-top: 10px;
    text-align: center;
    width: 75%;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme: { colors: { granite } } }) => granite};

    @media screen and (max-width: 950px) {
      font-size: 12px;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
      width: 80%;
    }

    @media screen and (max-width: 480px) {
      font-size: 12px;
      width: 85%;
    }
  }

  & img {
    max-height: 100%;
    width: 100%;
  }
  `;
