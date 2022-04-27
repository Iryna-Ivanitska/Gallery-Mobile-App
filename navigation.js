import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Favorite from './pages/Favorite';
import Pictures from './pages/Pictures';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          cardStyle: {height: "100%"}
        }}
        >
        <Tab.Screen 
          name="Photos" 
          component={Pictures} 
          options={{
            tabBarIcon:() => <SimpleLineIcons name="picture" size={24} color="black" />
          }}
          />
        <Tab.Screen name="Favorites" component={Favorite} 
          options={{
            tabBarIcon:() => <SimpleLineIcons name="heart" size={24} color="black" />
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}