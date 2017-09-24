import React from 'react';
import styled from 'styled-components/native';

// prettier-ignore
const Root = styled.View`
  alignItems: center;
  justifyContent: center;
  flex: 1;
  backgroundColor: ${props => props.theme.WHITE};
  width: 90%;
  alignSelf: center;
`;

// prettier-ignore
const Text = styled.Text`
  color: ${props => props.theme.PRIMARY};
  fontSize: 18;
  textAlign: center;
`;

const Welcome = () => (
  <Root>
    <Text>Welcome, if you see this that mean everything work!!!</Text>
  </Root>
);

export default Welcome;
