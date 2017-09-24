import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  minHeight: 180;
  backgroundColor: red;
  width: 100%;
  shadowColor: ${props => props.theme.SECONDARY};
  shadowOffset: 0px 2px;
  shadowRadius: 2;
  shadowOpacity: 0.1;
`;

const FeedCard = () => (
  <Root />
);

export default FeedCard;
