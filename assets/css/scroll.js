import colorStyle from "./colors";

const scrollStyle = {
  scrollView: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    paddingRight: 4
  },
  scrollViewContainer: {
    backgroundColor: colorStyle.color11,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-around"
  }
};

export { scrollStyle };
