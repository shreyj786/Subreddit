import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card, Tabs } from "../components";
import { useCallback, useEffect, useState } from "react";
import { Children, ResponseModel } from "../models/ResponseModel";
import axios from "axios";
import { COLOR, SIZES } from "../constants";

const tabs = ["New", "Top", "Hot"];

const Home = () => {
  const [activeTabs, setActiveTabs] = useState(tabs[0]);
  const [listData, setListData] = useState<Children[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const fetchData = async (endpoint: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get<ResponseModel>(
        `https://api.reddit.com/r/pics/${endpoint.toLowerCase()}.json?limit=10`
      );
      setListData(response.data.data.children);
    } catch (e) {
      setError((e as Error).message);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(activeTabs);
  }, []);

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    setActiveTabs(activeTabs);

    setTimeout(() => {
      fetchData(activeTabs);
      setIsLoading(false);
    }, 1000);


  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemCenter}>
        <Tabs
          tabs={tabs}
          activeTab={activeTabs}
          setActiveTab={(item) => {
            setActiveTabs(item);
            fetchData(item);
          }}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color={COLOR.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : listData?.length === 0 ? (
        <Text>No data available</Text>
      ) : (
        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
            }
            style={{ marginBottom: 30 }}
            data={listData}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => item.data.created.toString()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  itemCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
});
