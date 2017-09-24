import React from 'react';
import { UIManager } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { store, client } from './store';
import { colors } from './utils/constants';

import HomeScreen from './screens/HomeScreen';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => (
  <ApolloProvider store={store} client={client}>
    <ThemeProvider theme={colors}>
      <HomeScreen />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
