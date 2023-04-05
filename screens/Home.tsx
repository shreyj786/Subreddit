import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card, Tabs } from "../components";
import { useCallback, useEffect, useState } from "react";
import { COLOR, SIZES } from "../constants";
import { getReddit } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ChildrenState, RedditErrorState } from "../models/Interfaces";

const tabs = ["New", "Top", "Popular", "Hot"];

const Home = () => {
  const [activeTabs, setActiveTabs] = useState(tabs[0]);
  const [isLoading, setIsLoading] = useState(false);

  const reddits = useSelector(
    (state: ChildrenState) => state.redditReducer.reddit
  );

  const error = useSelector( (state: RedditErrorState) => state.redditReducer.error  )

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getReddit(activeTabs) as any);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.paddingTopStyle}>
      <View style={styles.itemCenter}>
        <Tabs
          tabs={tabs}
          activeTab={activeTabs}
          setActiveTab={(item) => {
            setIsLoading(true);
            setActiveTabs(item);
            dispatch(getReddit(item) as any);
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          }}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color={COLOR.white} />
      ) : error === ''  ? (
        <Text style={styles.textCenter}> Something went wrong</Text>
      ) : reddits?.length === 0 ? (
        <Text>No data available</Text>
      ) : (
        <View style={styles.listStyle}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
            }
            style={styles.marginBottomStyle}
            data={reddits}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => item.data.name.toString()}
          />
        </View>
      )}

    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  paddingTopStyle: {
    paddingTop: 50,
    backgroundColor: COLOR.bgColor,
  },
  listStyle: { padding: SIZES.medium, paddingBottom: 100 },

  marginBottomStyle: { marginBottom: 30 },

  itemCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },

  textCenter: {
    textAlign: 'center', 
    width: Dimensions.get("window").width,
    marginVertical: 15, 
    color: COLOR.white, 
    fontSize: 18,
    fontWeight: 'bold', 
  }
});
