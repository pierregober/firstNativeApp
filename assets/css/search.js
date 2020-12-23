import colorStyle from "./colors";
import Constants from "expo-constants";

const searchStyle = {
  container: {
    alignItems: "center",
    backgroundColor: colorStyle.color11,
    display: "flex",
    flexDirection: "row",
    height: 60
  },
  button: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  buttonGroup: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexShrink: 1,
    height: 60,
    padding: 15
  },
  buttonText: {
    color: "#eee",
    flex: 1,
    fontSize: 12
  },
  emptyList: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexGrow: 1,
    justifyContent: "center"
  },
  emptyListText: {
    color: "#fff",
    fontSize: 20,
    marginTop: 20
  },
  input: {
    backgroundColor: colorStyle.color10,
    borderWidth: 0,
    color: "#aaa",
    flexGrow: 1,
    fontSize: 18,
    height: 60,
    paddingLeft: 15
  },
  inputContainerStyle: {
    backgroundColor: colorStyle.color10,
    borderColor: colorStyle.color11,
    borderLeftColor: "#444",
    borderLeftWidth: 2,
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    height: 60
  },
  list: {
    alignItems: "stretch",
    backgroundColor: colorStyle.color11,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: Constants.statusBarHeight
  },
  result: {
    alignItems: "stretch",
    backgroundColor: "#222",
    borderBottomColor: "rgba(0,0,0,0.4)",
    borderBottomWidth: 1,
    borderLeftColor: colorStyle.color4,
    borderLeftWidth: 2,
    borderRadius: 2,
    display: "flex",
    flexDirection: "row",
    height: 55,
    marginTop: 0.5,
    padding: 10,
    position: "relative"
  },
  resultText: {
    alignItems: "center",
    color: "#fff",
    display: "flex",
    flex: 1,
    fontSize: 18
  },
  resultSelected: {
    height: 50,
    width: 50
  }
};
export default searchStyle;
