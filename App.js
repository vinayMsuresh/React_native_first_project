import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <HomeStack/>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}

export default App;