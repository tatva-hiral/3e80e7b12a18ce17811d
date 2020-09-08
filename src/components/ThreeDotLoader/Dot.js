import React from 'react';
import {Animated} from 'react-native';
import {defaultColors} from '../../theme/color';

const SIZE = 7;
const MARGIN = 5;
const BG = defaultColors.grey3;
const ACTIVE_BG = defaultColors.light;
const ANIMATION_DURATION = 400;
const ANIMATION_SCALE = 1.4;

export default class Dot extends React.Component {
  static defaultProps = {
    size: SIZE,
    background: BG,
    activeBackground: ACTIVE_BG,
    dotMargin: MARGIN,
    animationDuration: ANIMATION_DURATION,
    animationScale: ANIMATION_SCALE,
  };

  constructor(props) {
    super(props);
    this.scale = new Animated.Value(1);
  }

  componentDidMount() {
    if (this.props.active) {
      this.scaleUp();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active && !this.props.active) {
      this.scaleDown();
    }
    if (!prevProps.active && this.props.active) {
      this.scaleUp();
    }
  }

  scaleDown = () => {
    Animated.timing(this.scale, {
      toValue: 1,
      duration: this.props.animationDuration,
      useNativeDriver: true,
    }).start();
  };

  scaleUp = () => {
    Animated.timing(this.scale, {
      toValue: this.props.animationScale,
      duration: this.props.animationDuration,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {active, size, background, activeBackground, dotMargin} = this.props;
    const style = {
      height: size,
      width: size,
      borderRadius: size / 2,
      marginHorizontal: dotMargin,
      backgroundColor: active ? activeBackground : background,
    };
    return (
      <Animated.View style={[style, {transform: [{scale: this.scale}]}]} />
    );
  }
}
