import colorStyle from "./colors";

const topTabStyle = {
  activeTab: {
    alignItems: "center",
    borderBottomColor: colorStyle.color4,
    borderBottomWidth: 2,
    display: "flex",
    flex: 1,
    justifyContent: "center"
  },
  container: {
    backgroundColor: colorStyle.color10,
    borderBottomWidth: 0,
    borderBottomColor: colorStyle.color10,
    display: "flex",
    flexDirection: "row",
    height: 40
  },
  inactiveTab: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center"
  },
  tabText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400"
  }
};

export { topTabStyle };
