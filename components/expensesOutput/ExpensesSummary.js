import { Text, View } from "react-native";


function ExpensesSummary({expenses,periodName}){

    const ExpensesSum = expenses.reduce((sum,expense)=>{
        return sum + expense.amount
    },0)

    return(
        <View>
            <Text>{periodName}</Text>
            <Text>${ExpensesSum}</Text>
            
           
        </View>
    )
}
export default ExpensesSummary