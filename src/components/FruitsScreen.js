// screens/FruitScreen.js
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Card from './Cards';
import { useSelector } from 'react-redux';


const FruitsScreen = () => {
  const state = useSelector(state=>state.fruit)
  
  return (
    <ScrollView style={styles.scrollView}>
    {state.fruits.map(fruit=>{
      return <Card title={fruit.name} image={fruit.image} id={fruit.id} price={fruit.price} key={"fruit"+fruit.id}></Card>
    })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20
  }
});

export default FruitsScreen;
