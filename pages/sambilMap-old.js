import Animated from "react-native-reanimated";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const SambilMap = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
        }}
      >
        <MapView
          style={{ width: width, height: height }}
          initialRegion={{
            latitude: 10.403126, //10.403126, -71.450167
            longitude: -71.450167,
            latitudeDelta: 0.0992,
            longitudeDelta: 0.0491,
          }}
        ></MapView>
      </View>
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
