import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CountryDetail from './CountryDetail';

import * as CountryAction from '../../redux/actions/country';

const mapStateToProps = state => ({
  countryDetail: state.country.countryDetail,
  weatherLoader: state.country.weatherLoader,
});

const mapDispatchToProps = dispatch => {
  const reducerActions = {
    ...CountryAction,
  };
  return {
    actions: bindActionCreators(reducerActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
