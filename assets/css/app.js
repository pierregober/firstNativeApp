import { Platform } from "react-native";
import colorStyle from "./colors";

const app = {
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 35 : 0
  },
  center: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    padding: 10
  },
  imsAppContainer: {
    alignItems: "stretch",
    backgroundColor: colorStyle.color11,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    opacity: 1
  },
  imsAppBody: {
    backgroundColor: colorStyle.color11,
    flex: 1
  },
  imsPlaceholderBody: {
    alignItems: "center",
    backgroundColor: colorStyle.color11,
    display: "flex",
    flex: 1,
    flexGrow: 1,
    justifyContent: "center"
  },
  imsPlaceholderText: {
    color: "#fff",
    fontSize: 20,
    marginTop: 20
  }
};

export default app;
