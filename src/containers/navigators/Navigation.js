import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../components/HomeScreen';
import {themeColors} from '../../theme/themeColors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => menuIcons(route, focused),
        tabBarShowLabel: false,
        tabBarStyle: {
          height: '10%',
          marginBottom: 20,
          borderRadius: 50,
          backgroundColor: themeColors.bgLight,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourite" component={HomeScreen} />
      <Tab.Screen name="Cart" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;
  if (route.name == 'Home') {
    icon = focused ? (
      <Icon name="home" size={25} color={themeColors.bgLight} />
    ) : (
      <Icon name="home" size={25} color={'white'} />
    );
  } else if (route.name == 'Favourite') {
    icon = focused ? (
      <Icon name="heart" size={25} color={themeColors.bgLight} />
    ) : (
      <Icon name="heart-o" size={25} color={'white'} />
    );
  } else if (route.name == 'Cart') {
    icon = focused ? (
      <Icon name="shopping-cart" size={25} color={themeColors.bgLight} />
    ) : (
      <Icon name="shopping-cart" size={25} color={'white'} />
    );
  }
  let buttonClass = focused ? 'bg-white' : '';
  return (
    <View
      className={
        'flex items-center rounded-full px-3.5 py-3 shadow ' + buttonClass
      }>
      {icon}
    </View>
  );
};
