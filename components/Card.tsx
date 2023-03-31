import { Text, View, StyleSheet, Image, Pressable, Linking, Alert } from "react-native";
import { Children } from "../models/ResponseModel";
import { COLOR, SIZES, images } from "../constants";
import { useCallback } from "react";

const Card = ({ item }: { item: Children }) => {

  // using google URL as current data(post) is not providing any web link 
  const supportedURL = 'https://google.com';

  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(supportedURL);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(supportedURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${supportedURL}`);
    }
  }, [supportedURL]);

  return (

    <Pressable  onPress={handlePress}>
    <View style={styles.item}>
      <Text style={styles.title}>{item.data.title}</Text>
      <Image
        source={{ uri: item.data.thumbnail }}
        style={{ height: 200, marginTop: 15, borderRadius: 4 }}
      />

      <View style={styles.itemAlign}>
        <Text>{item.data.author} </Text>

        <View>
          <View style={styles.itemRow}>
            <Image source={images.Like} style={{ width: 15, height: 15 }} />
            <Text> {item.data.ups}</Text>
          </View>

          <View style={styles.itemRow}>
            <Image source={images.Comment} style={{ width: 15, height: 15 }} />
            <Text> {item.data.num_comments}</Text>
          </View>
        </View>
      </View>
    </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLOR.cardColor,
    padding: 15,
    marginVertical: 8,
    borderRadius: SIZES.medium,
  },
  title: {
    fontSize: 20,
  },

  itemRow: {
    flex: 1,
    flexDirection: "row",
  },

  itemAlign: {
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
