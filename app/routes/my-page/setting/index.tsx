import styled from 'styled-components';

export default function settingg() {
  return <Wrapper>아직 준비가 안됐어요</Wrapper>;
}
const Wrapper = styled.div`
  background-color: ${(prop) => prop.theme.color.grayScale.gray_100};
  display: flex;
  justify-content: center;
  min-height: 100vh;
  margin-top: -112px;
  padding-top: 144px;
`;
