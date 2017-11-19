import React, { Component } from 'react';
import { Platform, Keyboard, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import Loading from './Loading';
import { login } from '../actions/user';
import { colors, fakeAvatar } from '../utils/constants';

import SIGNUP_MUTATION from '../graphql/mutations/signup';

const Root = styled(Touchable).attrs({
  feedback: 'none',
  native: false,
})`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled(Touchable).attrs({
  feedback: 'opacity',
  hitSlop: { top: 20, bottom: 20, right: 20, left: 20 },
  native: false,
})`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5%;
  left: 5%;
`;

const SubmitButton = styled(Touchable).attrs({
  feedback: 'opacity',
  native: false,
})`
  position: absolute;
  bottom: 15%;
  width: 70%;
  height: 50;
  background-color: ${props => props.theme.PRIMARY};
  border-radius: 10;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-radius: 0.2;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.4;
  elevation: 2;
`;

const SubmitButtonText = styled.Text`
  color: ${props => props.theme.WHITE};
  font-weight: 600;
`;

const InputWrapper = styled.View`
  height: 40;
  width: 70%;
  border-bottom-width: 1;
  border-bottom-color: ${props => props.theme.LIGHT_GRAY};
  margin-vertical: 5;
  justify-content: flex-end;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.LIGHT_GRAY,
  selectionColor: Platform.OS === 'ios' ? colors.WHITE : undefined,
  autoCorrect: false,
})`
  margin-bottom: 0;
  padding-bottom: 0;
  color: ${props => props.theme.WHITE};
  height: 30;
`;

class SignupForm extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    username: '',
    loading: false,
  };

  _onChangeText = (text, type) => this.setState({ [type]: text });
  _onOutsidePress = () => Keyboard.dismiss();
  _checkIfDisable = () => {
    const { fullName, email, password, username } = this.state;

    if (!fullName || !email || !password || !username) {
      return true;
    }
    return false;
  };

  _onSignupPress = async () => {
    this.setState({ loading: true });
    const { fullName, email, password, username } = this.state;
    const avatar = fakeAvatar;

    try {
      const { data } = await this.props.mutate({
        variables: {
          fullName,
          email,
          password,
          username,
          avatar,
        },
      });
      await AsyncStorage.setItem('@twitteryoutubeclone', data.signup.token);
      this.setState({ loading: false });
      return this.props.login();
    } catch (error) {
      throw error;
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <Root onPress={this._onOutsidePress}>
        <BackButton onPress={this.props.onBackPress}>
          <MaterialIcons color={colors.WHITE} size={30} name="arrow-back" />
        </BackButton>
        <Wrapper>
          <InputWrapper>
            <Input
              placeholder="Full name"
              autoCapitalize="words"
              onChangeText={text => this._onChangeText(text, 'fullName')}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={text => this._onChangeText(text, 'email')}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Password"
              secureTextEntry
              onChangeText={text => this._onChangeText(text, 'password')}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={text => this._onChangeText(text, 'username')}
            />
          </InputWrapper>
        </Wrapper>
        <SubmitButton
          onPress={this._onSignupPress}
          disabled={this._checkIfDisable()}
        >
          <SubmitButtonText>Sign Up</SubmitButtonText>
        </SubmitButton>
      </Root>
    );
  }
}

export default compose(
  graphql(SIGNUP_MUTATION),
  connect(undefined, { login })
)(SignupForm);
