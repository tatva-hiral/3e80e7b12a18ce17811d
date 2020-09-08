import {CommonActions, StackActions} from '@react-navigation/native';

const config = {};

export function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}

export function navigate(routeName, params) {
  if (config.navigator && routeName) {
    let action = CommonActions.navigate({name: routeName, params});
    config.navigator.dispatch(action);
  }
}

export function goBack() {
  if (config.navigator) {
    let action = CommonActions.goBack();
    config.navigator.dispatch(action);
  }
}

export function reset(navObject) {
  if (config.navigator && navObject) {
    config.navigator.dispatch(CommonActions.reset(navObject));
  }
}

export function replace(routeName, params = {}) {
  if (config.navigator && routeName) {
    config.navigator.dispatch(StackActions.replace(routeName, params));
  }
}

export function getActiveRouteName(state) {
  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
}
