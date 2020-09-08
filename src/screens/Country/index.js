import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as CountryAction from '../../redux/actions/country';
import CountryScreen from './Country';

const mapStateToProps = state => ({
  loader: state.country.loader,
});

const mapDispatchToProps = dispatch => {
  const reducerActions = {
    ...CountryAction,
  };
  return {
    actions: bindActionCreators(reducerActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryScreen);
