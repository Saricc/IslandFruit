// screens/NutsScreen.js
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image
} from 'react-native';

const NutsScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
     <Text>AAAAAAAAAAAAAAAAAAAAAAA</Text>
     <Text>AAAAAAAAAAAAAAAAAAAAAAA</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'green',
    marginHorizontal: 20,
  }
  // image:{
  //   height: 15,
  //   width: 10,
  //   marginHorizontal: 20,
  // }
});
export default NutsScreen;
