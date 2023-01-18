import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Home from "../../assets/icons/Home.png";
import Sound from "../../assets/icons/line-music.png";
import Night from "../../assets/icons/Night.png";
import statistics from "../../assets/icons/statistics.png";
import profile from "../../assets/icons/Profile.png";

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomLine}>
        <TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image source={Home} resizeMode="contain" style={styles.icon} />
          </View>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image source={Sound} resizeMode="contain" style={styles.icon} />
          </View>
          <Text style={styles.text}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.midIconContainer}>
          <Image source={Night} resizeMode="contain" style={styles.iconMid} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={statistics}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>
          <Text style={styles.text}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image source={profile} resizeMode="contain" style={styles.icon} />
          </View>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#F7F8FA",
  },
  bottomLine: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  icon: {
    height: 22.5,
    width: 22.5,
  },
  iconMid: {
    height: 120,
    width: 120,
    position: "absolute",
    alignSelf: "center",
    bottom: -13,
  },
  midIconContainer: {
    position: "relative",
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: "#774DCE",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
  },
});
