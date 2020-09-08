# React-native Test App

Currently includes:

- React Native
- React Navigation
- Redux
- Redux-Saga
- And more!

## Quick Start

The project's structure will look similar to this:

```
react-native-ai-app
├── src
│   ├── assets
│   ├── components
│   ├── config
│   ├── constants
│   ├── navigation
│   ├── redux
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   ├── App.js
├── test
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── index.js
├── ios
│   ├── testrn
│   ├── testrn-tvOS
│   ├── testrn-tvOSTests
│   ├── testrn.xcodeproj
│   └── testrnTests
└── package.json

```


### ./src directory

Project source code is in the `src` directory.

The inside of the src directory looks similar to the following:

```
src
│── assets
│── components
│── config
├── constants
├── navigation
├── redux
├── screens
├── services
├── theme
├── utils
└── App.js
```

**components**
This is where your React components will live. Each component will have a directory containing the `.js` file. The app will come with some commonly used components like NavHeader.

**config**
This is where your have translations will live if you are using `i18n-js and react-native-localize`.

**redux**
This is where your app's redux component will live such as actions, reducers & store.

**redux/sagas**
This is where your app's api call side effects will be handled.

**navigation**
This is where your `@react-navigation/native` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.js` file, along with styles files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**constants**
Here lives your application API_URL and other constants.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**index.js** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.
