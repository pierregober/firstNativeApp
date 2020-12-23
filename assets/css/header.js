import colorStyle from "./colors";

const headerStyle = {
  navbar: {
    headerStyle: {
      backgroundColor: colorStyle.color10,
      borderBottomColor: colorStyle.color10
    },
    headerTintColor: "#fff",
    headerTitleStyle: { color: "white" }
  },
  header: {
    height: 60,
    headerTintColor: "#fff",
    headerTitleAlign: "center",
    headerTitleStyle: { color: "white" }
  },
  headerOptions: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10
  },
  optionGroup: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 50,
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10
  }
};

export default headerStyle;
