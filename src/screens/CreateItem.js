import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { addFruit } from "../reducers/islandReducer";



export default function CreateItem({navigation}) {
 
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  
  const setPriceNumber = (value) => {
    setPrice(parseFloat(value))
  }
 
  const createItem = () => {
    dispatch(addFruit({name:name, price:price, image:image}));
    navigation.goBack()
  }

  return (
    <>
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
            <Pressable onPress={createItem} >
                <Text>ADD ITEM</Text>
            </Pressable>
            </>
  )
}
