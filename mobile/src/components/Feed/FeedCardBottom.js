import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Touchable from '@appandflow/touchable';
import styled from 'styled-components/native';

import { colors } from '../../utils/constants';

const ICON_SIZE = 20;

// prettier-ignore
const Root = styled.View`
  height: 40;
  flexDirection: row;
`;

// prettier-ignore
const Button = styled(Touchable).attrs({
  feedback: 'opacity',
  native: false,
})`
  flex: 1;
  flexDirection: row;
  alignItems: center;
  justifyContent: space-around;
  paddingHorizontal: 32px;
`;

// prettier-ignore
const ButtonText = styled.Text`
  fontSize: 14;
  fontWeight: 500;
  color: ${props => props.theme.LIGHT_GRAY};
`;

const isFavorite = false;

const FeedCardBottom = ({ favoriteCount }) => (
  <Root>
    <Button>
      <SimpleLineIcons
        name="bubbles"
        size={ICON_SIZE}
        color={colors.LIGHT_GRAY}
      />
      <ButtonText>{favoriteCount}</ButtonText>
    </Button>
    <Button>
      <Entypo name="retweet" size={ICON_SIZE} color={colors.LIGHT_GRAY} />
      <ButtonText>{favoriteCount}</ButtonText>
    </Button>
    <Button>
      <Entypo
        name="heart"
        size={ICON_SIZE}
        color={isFavorite ? 'red' : colors.LIGHT_GRAY}
      />
      <ButtonText>{favoriteCount}</ButtonText>
    </Button>
  </Root>
);

export default FeedCardBottom;
