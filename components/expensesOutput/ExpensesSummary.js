import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constant/styles";


function ExpensesSummary({expenses,periodName}){

    const ExpensesSum = expenses.reduce((sum,expense)=>{
        return sum + expense.amount
    },0)

    return(
        <View style={styles.container} >
            <Text style={styles.period} >{periodName}</Text>
            <Text style={styles.sum}>${ExpensesSum}</Text>
            
           
        </View>
    )
}
export default ExpensesSummary

const styles = StyleSheet.create({
    container:{
        padding:8,
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    period:{
        fontSize:12,
        color:GlobalStyles.colors.primary400
    },
    sum:{
        fontSize:18,
        fontWeight:'bold',
        color:GlobalStyles.colors.primary500
    }
})