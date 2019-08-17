import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const searchboxconatiner = {
  marginLeft: 18,
  marginTop: 10,
  height: hp("7%"),
  width: wp("90%")
};

export const searchIcon = { color: "gray", fontSize: 14 };
export const searchInput = { fontSize: 14 };

export const listItem = {
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  marginBottom: 10,
  width: wp("90%"),
  height: hp("23%")
};

export const listItemThumbnailView = { flex: 2, marginTop: 8, marginBottom: 9 };
export const listItemTextView = { flex: 1, marginBottom: 9 };
export const contactName = { fontWeight: "bold" };
export const contactTitle = { fontSize: 12 };
export const listItemButtonsView = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
  marginBottom: 9
};
export const cancelButton = {
  flexDirection: "column",
  alignItems: "center",
  width: wp("35%"),
  height: hp("5"),
  backgroundColor: "white",
  borderColor: "#EF9C05",
  marginRight: 5
};
export const acceptButton = {
  flexDirection: "column",
  alignItems: "center",
  width: wp("35%"),
  height: hp("5"),
  backgroundColor: "#EF9C05",
  shadowColor: "#f99c05",
  marginLeft: 5
};
