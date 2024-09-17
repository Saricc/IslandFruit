import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin, logoutUser } from "../reducers/islandReducer";
import EditOrDeleteItem from "./EditOrDeleteItem";
import Card from "../components/Cards";
import { useNavigation } from "@react-navigation/native";

const AdminScreen = () => {
    const state = useSelector(state => state.fruit)
    const navigation = useNavigation()

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutAdmin())
    }

    return (

        <View style={{marginBottom:80}}>
            <Text>ADMINISTRACIJA</Text>

            <Pressable onPress={()=>navigation.navigate("AddFruit")}>
                <Text>ADD NEW ITEM</Text>
            </Pressable>
            <ScrollView style={styles.scrollView}>
                {state.fruits.map(fruit => {
                    return <Card title={fruit.name} image={fruit.image} id={fruit.id} price={fruit.price} key={"fruit" + fruit.id}></Card>
                })}
            </ScrollView>



            <Pressable onPress={logout}>
                <Text>Logout</Text>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20
    }
});
export default AdminScreen;