import { createSlice } from '@reduxjs/toolkit'
import { fruits } from '../constants/Fruits';
import moment from 'moment';
import { act } from 'react';
import { makeid } from '../utils/idgenerator';

const initialState = {
  fruits: fruits,
  cart: [],
  purchased: [],
  username: "sara",
  password: "123",
  isLoggedIn: false,
  adminUsername: "tom",
  adminPassword: "456",
  adminLoggedIn: false
}

export const fruitSlice = createSlice({
  name: 'fruit',
  initialState,
  reducers: {
    addFruitToCart: (state, action) => {
      let foundIndex = null
      let found = false
      state.cart.forEach((item, index) => {
        if (item.id === parseInt(action.payload)) {
          foundIndex = index
          found = true
          return false
        }
      })
      if (found) {
        state.cart[foundIndex].amount++
      } else {
        state.cart.push({
          id: parseInt(action.payload),
          amount: 1
        })
      }

    },
    removeFruitFromCart: (state, action) => {
      state.cart.forEach((item, index) => {
        if (item.id === action.payload) {
          if (item.amount === 1) {
            state.cart.splice(index, 1)
          } else state.cart[index].amount--
          return false
        }
      })
    },
    purchaseAllFromCart: (state) => {
      state.cart.forEach(item => {
        let selectedFruit = {}
        state.fruits.forEach(fruit => {
          if (fruit.id === item.id)
            selectedFruit = fruit
          return false
        });


        const totalValue = selectedFruit.price * item.amount
        state.purchased.push({ id: item.id, totalValue: totalValue, amount: item.amount, date: moment().format() })
      })
      state.cart = []
    },
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    }, loginAdmin: (state) => {
      state.adminLoggedIn = true;
    },
    logoutAdmin: (state) => {
      state.adminLoggedIn = false;
    },
    addFruit: (state, action) => {
    state.fruits.push({id:makeid(12),...action.payload})
    },
    deleteFruit: (state, action) => {
    let fruitIndex = ""
    state.fruits.forEach((fruit, index) => {
      if(action.payload.toString() === fruit.id.toString()){
        fruitIndex = index
        return false
        
      }
    })
    if(fruitIndex !== ""){
      state.fruits.splice(fruitIndex, 1)
    }
    },
    editFruit: (state, action) => {
      let index = null
      state.fruits.forEach((fruit, i) => {
        if (action.payload.id === fruit.id) {
          index = i
          return false
        }
      })
      state.fruits[index] = action.payload
    }
  }
}
)

// Action creators are generated for each case reducer function
export const {
  addFruitToCart,
  removeFruitFromCart,
  purchaseAllFromCart,
  addFruit,
  deleteFruit,
  editFruit,
  loginUser,
  logoutUser,
  loginAdmin,
  logoutAdmin
} = fruitSlice.actions

export default fruitSlice.reducer