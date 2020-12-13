import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn21184805Navigator from '../features/SignIn21184805/navigator';
import SignUp22184804Navigator from '../features/SignUp22184804/navigator';
import Feed5184801Navigator from '../features/Feed5184801/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn21184805: { screen: SignIn21184805Navigator },
SignUp22184804: { screen: SignUp22184804Navigator },
Feed5184801: { screen: Feed5184801Navigator },

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
