import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps185393Navigator from '../features/Maps185393/navigator';
import Additem185392Navigator from '../features/Additem185392/navigator';
import Maps185388Navigator from '../features/Maps185388/navigator';
import UserProfile185384Navigator from '../features/UserProfile185384/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps185393: { screen: Maps185393Navigator },
Additem185392: { screen: Additem185392Navigator },
Maps185388: { screen: Maps185388Navigator },
UserProfile185384: { screen: UserProfile185384Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
