import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
  ViroARPlaneSelector,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroMaterials,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

ViroMaterials.createMaterials({
  treeMaterial: {
    roughness: 0.5,
    metalness: 0.1,
    diffuseColor: "#8B4513",
  },
});

const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");
  const [planeSelected, setPlaneSelected] = useState(false);

  function onInitialized(state: any, reason: ViroTrackingReason) {
    console.log("onInitialized", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      setText("AR tracking unavailable");
    }
  }

  function onPlaneSelected() {
    console.log("Plane selected - placing tree");
    setPlaneSelected(true);
    setText("Tree placed! Move around to see it from different angles");
  }

  function onAnchorFound(anchor: any) {
    console.log("Surface found:", anchor);
  }

  function onAnchorUpdated(anchor: any) {
    console.log("Surface updated:", anchor);
  }

  function onAnchorRemoved() {
    console.log("Surface lost");
    setPlaneSelected(false);
    setText("Surface lost. Point at a flat surface again");
  }

  return (
    <ViroARScene 
      onTrackingUpdated={onInitialized}
      anchorDetectionTypes={["PlanesHorizontal"]}
    >
      <ViroAmbientLight color="#ffffff" intensity={0.3} />
      
      <ViroSpotLight
        innerAngle={5}
        outerAngle={90}
        direction={[0, -1, -0.2]}
        position={[0, 3, 0]}
        color="#ffffff"
        castsShadow={true}
        intensity={250}
      />

      <ViroARPlaneSelector
        minHeight={0.5}
        minWidth={0.5}
        alignment="Horizontal"
        onPlaneSelected={onPlaneSelected}
        onAnchorFound={onAnchorFound}
        onAnchorUpdated={onAnchorUpdated}
        onAnchorRemoved={onAnchorRemoved}
        maxPlanes={5}
      >
        {planeSelected && (
          <Viro3DObject
            source={require("../../assets/tree.glb")}
            position={[0, 0, 0]}  
            scale={[7, 7, 7]}
            type="GLB"
            materials={["treeMaterial"]}
            animation={{
              name: "01",
              run: true,
              loop: false,
            }}
          />
        )}
      </ViroARPlaneSelector>

      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 1, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};

const ARScene = ({ navigation }: { navigation: any }) => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

const styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default ARScene; 