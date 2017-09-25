import React from 'react';
import styled from 'styled-components/native';

import FeedCardHeader from './FeedCardHeader';
import FeedCardBottom from './FeedCardBottom';

// prettier-ignore
const Root = styled.View`
  minHeight: 180;
  backgroundColor: ${props => props.theme.WHITE};;
  width: 100%;
  padding: 7px;
  shadowColor: ${props => props.theme.SECONDARY};
  shadowOffset: 0px 2px;
  shadowRadius: 2;
  shadowOpacity: 0.1;
  marginVertical: 5;
`;

// prettier-ignore
const CardContentContainer = styled.View`
  flex: 1;
  padding: 10px 20px 10px 5px;
`;

// prettier-ignore
const CardContentText = styled.Text`
  fontSize: 14;
  textAlign: left;
  fontWeight: 500;
  color: ${props => props.theme.SECONDARY}
`;

const text =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita accusamus aliquam quaerat esse blanditiis optio quam eveniet quasi recusandae cumque.';

const FeedCard = () => (
  <Root>
    <FeedCardHeader />
    <CardContentContainer>
      <CardContentText>{text}</CardContentText>
    </CardContentContainer>
    <FeedCardBottom />
  </Root>
);

export default FeedCard;
