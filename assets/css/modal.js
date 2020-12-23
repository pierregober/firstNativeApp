import { Dimensions, StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "#222",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: 15,
  },
  cancelBtn: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.color4,
    borderRadius: 2,
    flexShrink: 1,
    height: 40,
    justifyContent: "center",
    marginBottom: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  cancelBtnText: {
    color: "#fff",
    fontSize: 16,
  },
});
