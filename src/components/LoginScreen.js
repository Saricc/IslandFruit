import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, loginUser } from "../reducers/islandReducer";


const LoginScreen = () => {

    const state = useSelector(state => state.fruit);
    const dispatch = useDispatch()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = () => {
        if(state.username === username && state.password === password ){
            dispatch(loginUser())
        }
        else if (state.adminUsername === username & state.adminPassword === password){
            dispatch(loginAdmin());
        }
        else (console.log("username or pass is wrong"))
        
    }
    

    return (
        <View>
            <View>
                <TextInput placeholder="username" onChangeText={setUsername}></TextInput>
            </View>
            <View>
                <TextInput placeholder="password" onChangeText={setPassword}></TextInput>
            </View>
            <View>
                <Pressable onPress={login}>
                    <Text>LOGIN</Text>
                </Pressable>
            </View>
        </View>
    )
};

export default LoginScreen;