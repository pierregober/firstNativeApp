import colorStyle from "./colors";
import formatStyle from "./format";

const contactStyle = {
  card: {
    alignItems: "center",
    backgroundColor: "#222",
    display: "flex",
    flexDirection: "row",
    height: 55,
    borderLeftColor: colorStyle.color4,
    borderLeftWidth: 2,
    borderBottomColor: "rgba(0,0,0,0.4)",
    borderBottomWidth: 1,
    padding: 10,
    position: "relative"
  },
  cardBorderLeft2: {
    borderLeftColor: colorStyle.color2
  },
  /* CSS left to right on card */
  cardImage: {
    alignItems: "center",
    borderRadius: 15,
    height: 30,
    justifyContent: "center",
    top: 0,
    width: 30
  },
  /* Several Images of Members, Create Cut Off Point */
  cardImages: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 30,
    marginRight: 10,
    marginLeft: 0,
    minWidth: 30,
    maxWidth: 100,
    position: "relative"
  },
  /* Conversations and Rooms List */
  cardIconTextOnly: {
    alignItems: "center",
    backgroundColor: colorStyle.color4,
    display: "flex",
    flex: 1,
    justifyContent: "center"
  },
  cardLabel: {
    fontSize: 14,
    margin: 0,
    color: "#aaa"
  },
  cardLatest: {
    color: "#fff",
    flex: 1,
    fontWeight: "300",
    fontSize: 10
  },
  cardName: {
    alignSelf: "center",
    color: "#fff",
    flex: 1,
    fontWeight: "600"
  },
  cardOptions: {
    alignItems: "center",
    display: "flex",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  cardText: {
    color: "#fff",
    flex: 1,
    fontSize: 14
  },
  cardNameLatestGroup: {
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "center",
    flex: 3,
    flexDirection: "column"
  },
  cardSubtitle: {
    color: "#fff",
    fontSize: 14
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
    textAlign: "center"
  },
  cardTimestamp: {
    color: "#fff",
    flex: 1,
    flexGrow: 1,
    paddingLeft: 5,
    fontWeight: "300",
    fontSize: 10,
    margin: 0,
    textAlign: "right"
  },
  cardTimestampUnreadGroup: {
    display: "flex",
    flex: 2,
    height: 20,
    marginTop: 0,
    marginRight: 0
  },
  hr: {
    borderBottomColor: colorStyle.color3,
    marginBottom: 10
  },
  onlineMarker: {
    backgroundColor: colorStyle.color2,
    borderRadius: 3,
    height: 6,
    position: "absolute",
    right: 1,
    top: 1,
    width: 6
  },
  unread: {
    fontWeight: 600
  }
};

const largeCard = {
  //Mix with list card css
  card: {
    height: 70,
    marginTop: 5,
    marginBottom: 5
  },
  cardImage: {
    height: 50,
    width: 50
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 20,
    textAlign: "center"
  }
};

const listCard = {
  card: {
    alignItems: "center",
    backgroundColor: colorStyle.color10,
    borderColor: colorStyle.color10,
    borderRadius: 2,
    display: "flex",
    flexDirection: "row",
    height: 55,
    borderBottomColor: "rgba(0,0,0,0.4)",
    borderBottomWidth: 1,
    justifyContent: "flex-start",
    padding: 10,
    position: "relative",
    /* iOS Box Shadow */
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    /* Android Box Shadow */
    elevation: 2
  },
  cardActive: {
    borderLeftColor: colorStyle.color4,
    borderLeftWidth: 2
  },
  cardIcon: {},
  cardImage: {
    height: 25,
    top: 0,
    width: 25
  },
  cardImageContainer: {
    height: 30,
    top: 0,
    width: 30
  },
  cardTitle: {
    alignItems: "center",
    color: "#fff",
    display: "flex",
    flex: 1,
    fontWeight: "600",
    justifyContent: "flex-start"
  }
};

const raisedCard = {
  closeButton: {
    ...formatStyle.center,
    height: 40,
    width: 40
  },
  container: {
    backgroundColor: colorStyle.color11,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    bottom: 0,
    left: 10,
    position: "absolute",
    right: 10
  }
};

export { contactStyle, largeCard, listCard, raisedCard };
