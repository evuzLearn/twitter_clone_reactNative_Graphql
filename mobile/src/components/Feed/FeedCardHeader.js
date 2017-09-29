import React from 'react';
import styled from 'styled-components/native';
import { distanceInWordsToNow } from 'date-fns';

const AVATAR_SIZE = 40;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

// prettier-ignore
const Root = styled.View`
  height: 50;
  flexDirection: row;
  alignItems: center;
`;

// prettier-ignore
const AvatarContainer = styled.View`
  flex: 0.2;
  justifyContent: center;
  alignItems: center;
  alignSelf: stretch;
`;

// prettier-ignore
const Avatar = styled.Image`
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
  borderRadius: ${AVATAR_RADIUS};
`;

// prettier-ignore
const MetaContainer = styled.View`
  flex: 1;
  alignSelf: stretch;
`;

// prettier-ignore
const MetaTopContainer = styled.View`
  flex: 1;
  alignSelf: stretch;
  flexDirection: row;
  alignItems: center;
  justifyContent: flex-start;
`;

// prettier-ignore
const MetaBottomContainer = styled.View`
  flex: 0.8;
  alignSelf: stretch;
  alignItems: flex-start;
  justifyContent: center;
`;

// prettier-ignore
const MetaFullName = styled.Text`
  fontSize: 16;
  fontWeight: bold;
  color: ${props => props.theme.SECONDARY};
`;

// prettier-ignore
const MetaText = styled.Text`
  fontSize: 14;
  fontWeight: 600;
  color: ${props => props.theme.LIGHT_GRAY};
`;

const FeedCardHeader = ({
  username,
  firstName,
  lastName,
  avatar,
  createdAt,
}) => (
  <Root>
    <AvatarContainer>
      <Avatar source={{ uri: avatar }} />
    </AvatarContainer>
    <MetaContainer>
      <MetaTopContainer>
        <MetaFullName>
          {firstName} {lastName}
        </MetaFullName>
        <MetaText>@{username}</MetaText>
      </MetaTopContainer>
      <MetaBottomContainer>
        <MetaText>{distanceInWordsToNow(createdAt)}</MetaText>
      </MetaBottomContainer>
    </MetaContainer>
  </Root>
);

export default FeedCardHeader;
