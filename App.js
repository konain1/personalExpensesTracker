import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GlobalStyles } from './constant/styles'
import AntDesign from '@expo/vector-icons/AntDesign'; 

import AllExpenses from './Screens/AllExpenses'
import ManageExpense from './Screens/ManageExpense'
import RecentExpenses from './Screens/RecentExpenses'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App () {

  function ExpensesOverview () {
    return (
      <Tab.Navigator screenOptions={{
        headerStyle:{backgroundColor:GlobalStyles.colors.primary500 },
        headerTintColor:'white',
        tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
        tabBarActiveTintColor:GlobalStyles.colors.accent500
      }}>
        <Tab.Screen name='RecentExpenses' component={RecentExpenses} options={{headerShown:false , tabBarLabel:'Recent' , title:'RecentExpesesss' , tabBarIcon:({size,color})=>(<AntDesign name="hourglass" size={size} color={color} />) }}  />
        <Tab.Screen name='AllExpenses' component={AllExpenses}  options={{
          tabBarIcon:({color,size})=>(<AntDesign name="calendar" size={size} color={color} />)
        }} />
      </Tab.Navigator>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="ExpesesOverview" component={ExpensesOverview} />
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  }
})
