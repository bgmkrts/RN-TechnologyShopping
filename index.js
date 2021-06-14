/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Route from './src/route/Route';
import Example from './src/Example';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Route);
