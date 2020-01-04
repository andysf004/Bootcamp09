/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '~/pages/SignIn';
import Checkins from '~/pages/Checkins';
import OrderHelp from '~/pages/OrderHelp';
import NewOrder from '~/pages/Order/NewOrder';
import ViewOrder from '~/pages/Order/ViewOrder';

export default (signedIn = true) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn: createSwitchNavigator({
          SignIn,
        }),

        App: createBottomTabNavigator(
          {
            Checkins,
            New: {
              screen: createStackNavigator({
                NewOrder,
                ViewOrder,
              }),
              navigationOptions: {
                tabBarLabel: () => null,
              },
            },
            OrderHelp,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              style: {
                height: 70,
                padding: 15,
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      }
    )
  );
