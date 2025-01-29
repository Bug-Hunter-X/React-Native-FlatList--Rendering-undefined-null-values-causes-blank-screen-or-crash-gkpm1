// bugSolution.js
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: 1, value: 'Item 1' },
  null,
  { id: 3, value: 'Item 3' },
  undefined,
  { id: 5, value: 'Item 5' },
];

const App = () => {
  const filteredData = data.filter(item => item !== null && item !== undefined);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;