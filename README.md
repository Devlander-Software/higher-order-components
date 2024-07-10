
![Devlander Higher Order Components Collection Header](https://github.com/Devlander-Software/higher-order-components/raw/main/media/images/react-higher-order-components-github-cover.png)

<a href="https://twitter.com/intent/tweet?button_hashtag=DevlanderHigherOrderComponents" target="_parent">
  <img alt="#DevlanderHigherOrderComponents" src="https://img.shields.io/twitter/url?color=%2308a0e9&label=DevlanderHigherOrderComponents&style=social&url=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Fbutton_hashtag%DevlanderHigherOrderComponents">
</a>
<a href="https://bit.ly/devlander-discord-invite" target="_parent">
  <img alt="Join Devlander on Discord" src="https://img.shields.io/badge/Discord-Devlander-%235865F2" />
</a>

<a href="https://www.npmjs.com/package/@devlander/higher-order-components" target="_parent">
  <img alt="npm downloads" src="https://img.shields.io/npm/dm/@devlander/higher-order-components.svg" />
</a>

<a href="https://github.com/orgs/Devlander-Software/discussions">
  <img alt="Join the discussion on Github" src="https://img.shields.io/badge/Github%20Discussions%20%26%20Support-Chat%20now!-blue" />
</a>

<a href="https://bit.ly/devlander-twitch">
  <img alt="Join Devlander on Twitch" src="https://img.shields.io/twitch/status/devlander" />
</a>

<a href="https://bit.ly/landonwjohnson-on-twitter" target="_parent">
  <img alt="Follow Landon Johnson On Twitter" src="https://img.shields.io/twitter/follow/landonwjohnson.svg?style=social&label=Follow" />
</a> 

<a href="https://bit.ly/landonwjohnson-on-twitter" target="_parent">
  <img alt="Wakatime Devlander higher-order-components" src="https://wakatime.com/badge/user/bd50b6c5-e0ca-4937-83b3-ab2d13adbc73/project/018b1ae9-e146-4ac3-88fb-6e3097c4064c.svg" />
</a> 

# Devlander React Native Higher Order Components Collection

## Introduction

The Devlander React Native Higher Order Components Collection is a comprehensive library of React Native higher-order-components, designed for seamless integration and addressing common development challenges. This collection streamlines your development process, offering versatile, cross-platform solutions for a variety of use cases.

## Featured higher-order-components

- **withBorders**: Wraps a container with borders for the sake of troubleshooting where views/divs end.
- **withLogProps**: Logs props in a component.
- **withVisibilitySensor**: Detects if a component is visible or not and passes an `isVisible` property down to the next component, which can be used to pass to another function.
- **withMediaQueryInfo**: Keeps track of the size of the device and viewport, and returns a list of booleans. These are used to do conditional logic when rendering components on different devices, making things responsive.
- **withViewSize**: Keeps track of the height and width of the component it is wrapping.
- **withSpinner**: Displays a spinner while the wrapped component is in a loading state.

## Installation

You can install the Devlander React Native Higher Order Components Collection using npm or yarn:

### npm
```bash
npm install @devlander/higher-order-components
```

### yarn
```bash
yarn add @devlander/higher-order-components
```

## Usage

### withBorders

```tsx
import React from "react";
import { View, Text } from "react-native";
import { withBorders } from "@devlander/higher-order-components";

interface MyComponentProps {
  message: string;
  withBorders?: boolean;
  borderColor?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ message, withBorders, borderColor }) => (
  <View>
    <Text>{message}</Text>
  </View>
);

const EnhancedComponent = withBorders(MyComponent);

// Usage example
<EnhancedComponent message="Hello, world!" withBorders={true} borderColor="blue" />
```

### withLogProps

```tsx
import React from "react";
import { View, Text } from "react-native";
import { withLogProps } from "@devlander/higher-order-components";

interface MyComponentProps {
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ message }) => (
  <View>
    <Text>{message}</Text>
  </View>
);

const EnhancedComponent = withLogProps(MyComponent);

// Usage example
<EnhancedComponent message="Hello, world!" />
// This would console.log("Actual Props: ", { message: "Hello, world!" })
```

### withVisibilitySensor

```tsx
import React from "react";
import { View, Text } from "react-native";
import { withVisibilitySensor } from "@devlander/higher-order-components";

interface MyComponentProps {
  isVisible: boolean;
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ isVisible, message }) => (
  <View>
    <Text>{isVisible ? "Visible" : "Not Visible"}: {message}</Text>
  </View>
);

const EnhancedComponent = withVisibilitySensor(MyComponent);

// Usage example
<EnhancedComponent message="Hello, world!" />
```

### withMediaQueryInfo

```tsx
import React from "react";
import { View, Text } from "react-native";
import { withMediaQueryInfo, WithMediaQueryProps } from "@devlander/higher-order-components";

interface MyComponentProps extends WithMediaQueryProps {
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ mediaQueryInfo, message }) => (
  <View>
    <Text>{mediaQueryInfo.large ? "Large Screen" : "Small Screen"}: {message}</Text>
    <Text>Media Query Info:</Text>
    <Text>xSmall: {mediaQueryInfo.xSmall.toString()}</Text>
    <Text>Small: {mediaQueryInfo.small.toString()}</Text>
    <Text>Medium: {mediaQueryInfo.medium.toString()}</Text>
    <Text>Large: {mediaQueryInfo.large.toString()}</Text>
    <Text>xLarge: {mediaQueryInfo.xLarge.toString()}</Text>
    <Text>xxLarge: {mediaQueryInfo.xxLarge.toString()}</Text>
    <Text>Platform: {mediaQueryInfo.platform}</Text>
  </View>
);

const EnhancedComponent = withMediaQueryInfo(MyComponent);

// Usage example
<EnhancedComponent message="Hello, world!" />
```

### withSpinner

```tsx
import React from "react";
import { View, Text } from "react-native";
import { withSpinner } from "@devlander/higher-order-components";

interface MyComponentProps extends WithSpinnerProps {
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ message, shouldSpin, spinnerComponent }) => (
  // If `shouldSpin` is true, a spinner would show instead of this component.
  <View>
    <Text>{message}</Text>
  </View>
);

const EnhancedComponent = withSpinner(MyComponent);

// Usage example
<EnhancedComponent shouldSpin={true} message="Loading..." />

// Usage with custom spinner component
const CustomSpinner: React.FC = () => (
  <View>
    <Text>Loading...</Text>
  </View>
);

// Enhanced component with custom spinner
const EnhancedComponentWithCustomSpinner = withSpinner(MyComponent);

// In the application
<EnhancedComponentWithCustomSpinner shouldSpin={true} spinnerComponent={CustomSpinner} message="Hello, world!" />
```

## Contributing

Contributions are welcome! Please read our [contributing guidelines](https://github.com/Devlander-Software/higher-order-components/blob/main/CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Devlander-Software/higher-order-components/blob/main/LICENSE) file for details.

## Connect with Us

- Follow us on [Twitter](https://bit.ly/landonwjohnson-on-twitter)
- Join our [Discord](https://bit.ly/devlander-discord-invite)
- Watch us on [Twitch](https://bit.ly/devlander-twitch)
