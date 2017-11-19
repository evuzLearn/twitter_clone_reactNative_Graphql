import React, { Component } from 'react';
import { UIManager, AsyncStorage } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { store, client } from './store';
import { colors } from './utils/constants';
import { login } from './actions/user';

import AppNavigation from './navigations';
import Loading from './components/Loading';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

class App extends Component {
  state = {
    appIsReady: false,
  };

  componentDidMount() {
    this._checkIfToken();
  }

  _checkIfToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@twitteryoutubeclone');
      if (token != null) {
        store.dispatch(login());
      }
    } catch (error) {
      throw error;
    }
    this.setState({ appIsReady: true });
  };

  render() {
    if (!this.state.appIsReady) {
      return <Loading />;
    }
    return (
      <ApolloProvider store={store} client={client}>
        <ThemeProvider theme={colors}>
          <AppNavigation />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
