import { createNativeStackNavigator } from "@react-navigation/native-stack"
import FruitsScreen from "./src/components/FruitsScreen"
import NutsScreen from "./src/components/NutsScreen"
import ProfileScreen from "./src/screens/ProfileScreen"
import { useSelector } from "react-redux"
import AdminScreen from "./src/screens/AdminScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CreateItem from "./src/screens/CreateItem"
import EditOrDeleteItem from "./src/screens/EditOrDeleteItem"


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = () => {
    const state = useSelector(state => state.fruit)
    return (
        <Tab.Navigator adaptive={false}>
            {state.isLoggedIn &&
                <>
                    <Tab.Screen name="Fruits" component={FruitsScreen} />
                    <Tab.Screen name="Nuts" component={NutsScreen} />
                    <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
                </>
            }
            {state.adminLoggedIn && <Tab.Screen name="AdminScreen" component={AdminScreen}></Tab.Screen>}

        </Tab.Navigator>
    )
}
export default function Router() {

    return (
        <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="AddFruit" component={CreateItem}/>
            <Stack.Screen name="EditFruit" component={EditOrDeleteItem}/>
        </Stack.Navigator>
    )
}
