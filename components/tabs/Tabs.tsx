import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "./tabs.styles";
import { COLOR, SIZES } from "../../constants";
import { TabInterface, TabsInterface } from "../../models/Interfaces";

function TabButton({ tabName, activeTab, onHandleSearchType }: TabInterface) {

  return (
    <Pressable
      style={() => [
        { backgroundColor: tabName === activeTab ? COLOR.primary : COLOR.white },
        styles.btn,
      ]}
      onPress={() => onHandleSearchType(tabName)}
    >
      {() => (
        <Text
          style={[
            { color: tabName === activeTab ?COLOR.white: COLOR.primary  },
            styles.btnText,
          ]}
        >
          {tabName}
        </Text>
      )}
    </Pressable>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsInterface) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            tabName={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
