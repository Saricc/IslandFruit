import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { purchaseAllFromCart } from '../reducers/islandReducer'
import moment from 'moment'

export default function Cart() {

    const state = useSelector(state => state.fruit)
    const dispatch = useDispatch()

    const buy = () => {
        dispatch(purchaseAllFromCart())
    }

    const getFruit = (id) => {
        let selectedFruit = {}
        state.fruits.forEach(fruit => {
            if (fruit.id === id)
                selectedFruit = fruit
            return false
        });
        return selectedFruit
    }

    const getTotalCartValue = () => {
        let totalValue = 0
        state.cart.forEach(item => {
            const fruit = getFruit(item.id)
            totalValue += fruit.price * item.amount
        })
        return totalValue.toString()
    }
    const getDataByMonth = () => {
        const data = []
        state.purchased.forEach(item => {
            const date = moment(item.date)
            const formattedDate = date.format('YYYYMM')
            if(data[formattedDate]) {
                data[formattedDate] += parseFloat(item.totalValue)
            }else {
                data[formattedDate] = parseFloat(item.totalValue)
            }
        })

        return data.map((val,key) => {
            const year = key.toString().substring(0,4)
            const month = key.toString().substring(4,6)
           return <View>
            <Text>{year} {month}</Text>
            <Text>{val}</Text>
           </View>
        })
    }
    return (
        <ScrollView>
            <Text>My cart</Text>
            <Text>{state.cart.length} items  </Text>
            <View>
                {state.cart.map(item => {
                    const fruit = getFruit(item.id)
                    return <View>
                        <Text>{fruit.name}</Text>
                        <Text>{fruit.price}</Text>
                        <Text>{item.amount}</Text>
                        <Text>{fruit.price * item.amount}</Text>
                    </View>
                })}
            </View>
            <Text>TOTAL VALUE</Text>
            <Text>{getTotalCartValue()}$</Text>

            <Pressable onPress={buy}><Text>BUY</Text></Pressable>


            <View>
                <Text>PURCHASED</Text>
                {state.purchased.map(item => {
                    const fruit = getFruit(item.id)
                    return <View>
                        <Text>{item.date}</Text>
                        <Text>${item.totalValue}</Text>
                        <Text>{item.amount}</Text>
                        <Text>{fruit.name}</Text>
                    </View>
                })}
            </View>

            <View>
                <Text>DATA BY MONTH</Text>
                {getDataByMonth()}
            </View>
            <View style={{ height: 100 }}></View>

        </ScrollView>
    )
}
