import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack';
import { Provider as PaperProvider } from 'react-native-paper';


function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <HomeStack/>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;