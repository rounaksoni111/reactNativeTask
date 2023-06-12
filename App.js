import React from 'react';
// Routing
import { NavigationContainer } from '@react-navigation/native';     
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import Home from './src/Home';
import SingleItemScreen from './src/SingleItemScreen';
import SingleCategoryItemScreen from './src/SingleCategoryItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView
        forceInset={{ top: "always", bottom: "always" }}
        style={{ flex: 1, backgroundColor: '#d3d9d2' }}
      >
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="sub" component={SingleItemScreen} options={{ headerShown: false }} />
          <Stack.Screen name="category" component={SingleCategoryItemScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

