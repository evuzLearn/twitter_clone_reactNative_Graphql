import React, { Component } from 'react';
import styled from 'styled-components/native';

import FeedCard from '../components/Feed/FeedCard';

const Root = styled.View`
  flex: 1;
  justifyContent: center;
`;

class HomeScreen extends Component {
  state = {  }
  render() {
    return (
      <Root>
        <FeedCard />
      </Root>
    );
  }
}

export default HomeScreen;
