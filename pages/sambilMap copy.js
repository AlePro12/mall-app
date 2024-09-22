import Animated from "react-native-reanimated";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { Zoomable } from "@likashefqet/react-native-image-zoom";
import nivellago from "../assets/nivellago.png";
import nivelferia from "../assets/nivelferia.png";
const SambilMap = () => {
  const [nivel, setNivel] = useState("nivellago");
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "#414145",
          zIndex: 1,
          width: 50,
          height: 100,
          padding: 2,
          flex: 1,
          textAlign: "center",
          textAlignVertical: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          style={[
            {
              height: "50%",
              textAlign: "center",
              textAlign: "center",
              alignItems: "center",
            },
            nivel === "nivelferia"
              ? {
                  backgroundColor: "#111112",
                  color: "white",
                }
              : { color: "blue" },
          ]}
          color="white"
          onPress={() => setNivel("nivelferia")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            NF
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setNivel("nivellago")}
          style={[
            {
              height: "50%",
              textAlign: "center",
              textAlign: "center",
              alignItems: "center",
            },
            nivel === "nivellago"
              ? {
                  backgroundColor: "#111112",
                  color: "white",
                }
              : { color: "white" },
          ]}
          color="white"
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            NL
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 10,
          position: "absolute",
          top: 10,
          zIndex: 1,
        }}
      >
        {nivel === "nivellago" ? "Nivel Lago" : "Nivel Feria"}
      </Text>
      <Zoomable style={{}} isDoubleTapEnabled>
        <Animated.Image
          source={nivel === "nivellago" ? nivellago : nivelferia}
          style={{
            resizeMode: "contain",
            width: width * 0.9,
            height: height * 0.9,

            //rotate 90 degrees
          }}
        />
      </Zoomable>
      {/* <Shops />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SambilMap;
