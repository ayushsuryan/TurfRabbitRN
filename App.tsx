import React, { useState } from "react";
import {View, Text} from "react-native";
import Landing from "./src/Pages/Landing";
import Login from "./src/Pages/Login";
import Signup from "./src/Pages/Signup";
import ARScene from "./src/Pages/ARScene";

export default () => {
  const [currentScreen, setCurrentScreen] = useState('Landing');

  const navigation = {
    navigate: (screenName: string) => {
      setCurrentScreen(screenName);
    }
  };

  const renderScreen = () => {
    switch(currentScreen) {
      case 'Login':
        return <Login navigation={navigation} />;
      case 'Signup':
        return <Signup navigation={navigation} />;
      case 'ARScene':
        return <ARScene navigation={navigation} />;
      case 'Landing':
      default:
        return <Landing navigation={navigation} />;
    }
  };

  return (
    <View className="flex-1">
      {renderScreen()}
    </View>
  );
};


// import {
//   ViroARScene,
//   ViroARSceneNavigator,
//   ViroText,
//   ViroTrackingReason,
//   ViroTrackingStateConstants,
// } from "@reactvision/react-viro";
// import React, { useState } from "react";
// import { StyleSheet } from "react-native";

// const HelloWorldSceneAR = () => {
//   const [text, setText] = useState("Initializing AR...");

//   function onInitialized(state: any, reason: ViroTrackingReason) {
//     console.log("onInitialized", state, reason);
//     if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
//       setText("Hello World!");
//     } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
//       // Handle loss of tracking
//     }
//   }

//   return (
//     <ViroARScene onTrackingUpdated={onInitialized}>
//       <ViroText
//         text={text}
//         scale={[0.5, 0.5, 0.5]}
//         position={[0, 0, -1]}
//         style={styles.helloWorldTextStyle}
//       />
//     </ViroARScene>
//   );
// };

// export default () => {
//   return (
//     <ViroARSceneNavigator
//       autofocus={true}
//       initialScene={{
//         scene: HelloWorldSceneAR,
//       }}
//       style={styles.f1}
//     />
//   );
// };

// var styles = StyleSheet.create({
//   f1: { flex: 1 },
//   helloWorldTextStyle: {
//     fontFamily: "Arial",
//     fontSize: 30,
//     color: "#ffffff",
//     textAlignVertical: "center",
//     textAlign: "center",
//   },
// });