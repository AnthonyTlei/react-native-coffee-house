import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const tabBarBackground = () => {
  return (
    <BlurView overlayColor="" blurAmount={15} style={styles.blurViewStyles} />
  );
};

const generateTabBarIcon = (
  name: string,
  focusedColor: string,
  unfocusedColor: string,
) => {
  return ({focused}: {focused: boolean}) => (
    <CustomIcon
      name={name}
      size={25}
      color={focused ? focusedColor : unfocusedColor}
    />
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: tabBarBackground,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: generateTabBarIcon(
            'home',
            COLORS.primaryOrangeHex,
            COLORS.primaryLightGreyHex,
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: generateTabBarIcon(
            'cart',
            COLORS.primaryOrangeHex,
            COLORS.primaryLightGreyHex,
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: generateTabBarIcon(
            'like',
            COLORS.primaryOrangeHex,
            COLORS.primaryLightGreyHex,
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: generateTabBarIcon(
            'bell',
            COLORS.primaryOrangeHex,
            COLORS.primaryLightGreyHex,
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  blurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
