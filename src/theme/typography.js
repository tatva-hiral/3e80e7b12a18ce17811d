import {defaultColors} from './color';

const typography = {
  h1: {
    color: defaultColors.textPrimary,
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    marginBottom: 12,
  },
  h2: {
    color: defaultColors.textPrimary,
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    marginBottom: 8,
  },
  h3: {
    color: defaultColors.textPrimary,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 8,
  },
  headline: {
    color: defaultColors.textPrimary,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily: 'Montserrat-SemiBold',
  },
  headlineLight: {
    color: defaultColors.textLight,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily: 'Montserrat-SemiBold',
  },
  bodyLarge: {
    color: defaultColors.textPrimary,
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 24,
  },
  bodyLargeBig: {
    color: defaultColors.textPrimary,
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 24,
  },
  bodyLargeSecondary: {
    color: defaultColors.textSecondary,
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 24,
  },
  bodyLargeTertiary: {
    color: defaultColors.grey2,
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 24,
  },
  bodyLargeLight: {
    color: defaultColors.textLight,
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 24,
  },
  bodyMedium: {
    color: defaultColors.textPrimary,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  bodyMediumBig: {
    color: defaultColors.textPrimary,
    fontWeight: '600',
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
  bodyMediumSecondary: {
    color: defaultColors.textSecondary,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  bodyMediumLight: {
    color: defaultColors.textLight,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  bodySmall: {
    color: defaultColors.textPrimary,
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
  bodySmallBig: {
    color: defaultColors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Montserrat-Medium',
  },
  bodySmallLight: {
    color: defaultColors.textLight,
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
  infoMessage: {
    color: defaultColors.error,
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  errorMessageLarge: {
    color: defaultColors.error,
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
  },
  errorMessage: {
    color: defaultColors.error,
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
  errorMessageBig: {
    color: defaultColors.error,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Medium',
  },
  link: {
    color: defaultColors.textPrimary,
    fontWeight: 'bold',
  },
  textCentered: {
    textAlign: 'center',
  },
  placeholder: {
    color: defaultColors.grey1,
    fontFamily: 'Montserrat-Regular',
  },
};

export default typography;
