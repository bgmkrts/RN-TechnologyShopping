import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10, 

  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  title: {
    fontWeight: "bold",
    fontSize: 19
  },
  price: {
    fontSize: 13,
    marginTop: 4
  },
  inner_container: {
    padding: 7
  },
  description: {
    fontStyle: "italic",
    textAlign: "right"
  }

})
















