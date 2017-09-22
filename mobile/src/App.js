import React from 'react';
import { UIManager } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { store, client } from './store';
import { colors } from './utils/constants';

import Welcome from './components/Welcome';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => (
  <ApolloProvider store={store} client={client}>
    <ThemeProvider theme={colors}>
      <Welcome />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
