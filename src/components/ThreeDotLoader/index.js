import React from 'react';
import {View, StyleSheet} from 'react-native';
import Dot from './Dot';

const dots = [1, 2, 3];
const INTERVAL = 300;
export default class ThreeDotsLoader extends React.Component {
  state = {
    active: 1,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const active = this.state.active;
      this.setState({active: active > 2 ? 1 : active + 1});
    }, INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const active = this.state.active;
    return (
      <View style={styles.main}>
        {dots.map((i, index) => (
          <Dot key={index} {...this.props} active={i === active} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
