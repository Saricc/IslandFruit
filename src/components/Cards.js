// Card.js
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFruitToCart, deleteFruit, removeFruitFromCart } from '../reducers/islandReducer';
import { useNavigation } from '@react-navigation/native';

const Card = ({ id, title, image, price }) => {
  
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const state = useSelector(state => state.fruit)

  const getCartAmount = () => {
    let amount = "0"
    state.cart.forEach((item) => {
      if (item.id === id) {
        amount = item.amount
        return false
      }
    })
    return amount
  }

  const addToCart = () => {
    dispatch(addFruitToCart(id))
  }

  const deleteFromCart = () => {
    dispatch(removeFruitFromCart(id))
  }

  const deleteItem = () => {
    dispatch(deleteFruit(id))
  }

  return (
    <View style={styles.card}>

      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage} />
      )}

      <Text style={styles.title}>{title}</Text>
      <Text>${price}</Text>

      {state.isLoggedIn &&  
        <>
          <Pressable onPress={addToCart}><Text>+</Text></Pressable>
          <Text>{getCartAmount()}</Text>
          <Pressable onPress={deleteFromCart}><Text>-</Text></Pressable>
        </>
      }
      {state.adminLoggedIn && <>
        <Pressable onPress={() => navigation.navigate("EditFruit", { id: id, price: price.toString(), title: title, image: image })}><Text>EDIT</Text></Pressable>
        <Pressable onPress={deleteItem}><Text>DELETE</Text></Pressable>
      </>
      }

    </View>
  );
};
 
const styles = StyleSheet.create({
  card: {
    width: 'auto',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // For shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    margin: 10, // Margin between cards
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
