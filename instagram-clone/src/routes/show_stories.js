import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import {ShowStorie} from '../pages/feed/components/show_storie';
import Feed from "../pages/feed";

const Stack = createStackNavigator();

export default function ShowStories() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
       name="Feed"
       component={Feed}
       options={{headerShown:false}}
       />

      <Stack.Screen
       name="ShowStorie"
        component={ShowStorie}
        options={{headerShown:false}}
        />
    </Stack.Navigator>
  );
}