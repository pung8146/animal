import styled from "styled-components";

const Title = styled.h1`
  color:${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor};
`;

function App() {
  return (
    <Title>Hi</Title>
  )
}

export default App;
