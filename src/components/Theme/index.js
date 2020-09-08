// import custom utilities
import {defaultColors} from '../../theme/color';
import {smallShadow} from '../../theme/shadows';
import typography from '../../theme/typography';
import spacing from '../../theme/spacing';

const theme = {
  Button: {
    buttonStyle: {
      borderRadius: 15,
      ...spacing.ph4,
      ...spacing.pv2,
    },
    containerStyle: {margin: 0},
    titleStyle: {
      fontSize: 20,
      fontFamily: 'Montserrat-Bold',
      textTransform: 'capitalize',
    },
  },
  Card: {
    containerStyle: [
      {
        borderRadius: 12,
        ...smallShadow,
      },
    ],
    featuredSubtitleStyle: {
      fontWeight: 'bold',
    },
    titleStyle: {
      color: defaultColors.fullBlack,
      fontSize: 18,
      fontWeight: 'bold',
    },
    wrapperStyle: {
      borderRadius: 12,
      overflow: 'hidden',
    },
  },
  colors: {
    ...defaultColors,
  },
  Divider: {
    style: {
      height: 4,
      borderRadius: 9999,
      backgroundColor: defaultColors.warning,
      marginRight: 50,
    },
  },
  Header: {
    containerStyle: {
      backgroundColor: defaultColors.light,
      paddingHorizontal: 30,
      borderBottomWidth: 0,
    },
  },
  Input: {
    containerStyle: {
      paddingHorizontal: 0,
    },
    errorStyle: {
      color: defaultColors.error,
      fontSize: 12,
    },
    inputContainerStyle: {
      borderWidth: 1.5,
      borderRadius: 12,
      ...spacing.ph3,
      ...spacing.pv1,
      width: '100%',
      margin: 0,
      backgroundColor: defaultColors.light,
    },
    iconInputContainerStyle: {
      borderWidth: 1.5,
      borderRadius: 12,
      ...spacing.ph3,
      paddingVertical: 5,
      width: '100%',
      margin: 0,
      backgroundColor: defaultColors.light,
    },
    alternateContainerStyle: {
      borderBottomWidth: 0,
      borderWidth: 0,
      borderRadius: 12,
      ...spacing.ph3,
      ...spacing.pv1,
      width: '100%',
      margin: 0,
      backgroundColor: defaultColors.grey3,
    },
    textAreaContainerStyle: {
      borderBottomWidth: 0,
      borderWidth: 0,
      borderColor: 'transparent',
      borderRadius: 12,
      width: '100%',
      margin: 0,
      paddingHorizontal: 0,
      paddingVertical: 0,
      backgroundColor: defaultColors.light,
    },
    labelStyle: {
      marginBottom: 4,
      fontWeight: '600',
    },
    inputStyle: {
      color: defaultColors.textPrimary,
      fontFamily: 'Montserrat-Regular',
    },
  },
  Text: {
    h1Style: {
      ...typography.h1,
    },
    h2Style: {
      ...typography.h2,
    },
    h3Style: {
      ...typography.h3,
    },
    h4Style: {},
    style: {
      color: defaultColors.textPrimary,
    },
  },
  Tile: {
    captionStyle: {
      textAlign: 'left',
    },
  },
};

export default theme;
