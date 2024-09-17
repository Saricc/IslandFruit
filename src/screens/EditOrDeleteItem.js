import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { editFruit } from '../reducers/islandReducer'

export default function EditOrDeleteItem({ route, navigation }) {
    
    const dispatch = useDispatch()
    
    const [name, setName] = useState(route.params.title)
    const [image, setImage] = useState(route.params.image)
    const [price, setPrice] = useState(route.params.price)
   

    const setPriceNumber = (value) => {
        setPrice(parseFloat(value))
    }

    const editItem = () => {
        const editedFruit= {
            id: route.params.id,
            name: name,
            image: image,
            price: price
        }
        dispatch(editFruit(editedFruit))
    }

    const isNotEdited = () => {
        if(name === route.params.name && image === route.params.image && price === route.params.price){
            return true
        }
        else return false;
    }
    return (
        <View>
            <View style={{ backgroundColor: 'gray' }}>
                <TextInput placeholder={"item name"}
                    onChangeText={setName}
                    value={name}
                />
                <TextInput placeholder={"item price"}
                    onChangeText={setPriceNumber}
                    value={price}
                />
                <TextInput placeholder={"image url"}
                    onChangeText={setImage}
                    value={image}
                />
            </View>
            <Pressable onPress={editItem} disabled={isNotEdited()}>
                <Text>Edit</Text>
            </Pressable>
        </View>
    )
}
