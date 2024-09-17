import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../reducers/islandReducer";
import Cart from "../components/Cart";

const ProfileScreen = () => {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutUser())
    }

    return (
        <View>
            <Pressable onPress={logout}>
                <Text>Logout</Text>
            </Pressable>
            <Cart></Cart>
        </View>
    )
}
export default ProfileScreen;