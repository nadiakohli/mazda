import styled from 'styled-components';

export const Wrap = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  margin-bottom: 25px;

  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    text-transform: uppercase;
    font-size: 48px;
    font-weight: 400;
    color: ${({ theme: { colors: { mirage } } }) => mirage};
    font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  }
`;

export const TitleWrap = styled.div`
  width: 100%;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${({ theme: { colors: { quillGray } } }) => quillGray};
`;
