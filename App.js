import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack';

function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}

export default App;