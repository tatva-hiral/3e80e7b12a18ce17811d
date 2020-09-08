// import external libraries
import {combineReducers} from 'redux';
// import reducers
import countryReducer from './country';

const rootReducer = combineReducers({
  country: countryReducer,
});
export default rootReducer;
