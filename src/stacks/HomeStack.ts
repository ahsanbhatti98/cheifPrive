import {RouteNames} from '../config';
import {HomeScreen, VideoScreen} from '../screens';

export const HomeStack = [
  {
    name: RouteNames.HomeRoutes.HomeScreen,
    component: HomeScreen,
    key: RouteNames.HomeRoutes.HomeScreen,
  },
  {
    name: RouteNames.HomeRoutes.VideoScreen,
    component: VideoScreen,
    key: RouteNames.HomeRoutes.VideoScreen,
  },
];
