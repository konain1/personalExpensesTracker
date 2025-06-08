import { Text, View , StyleSheet} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { DUMMY_EXPENSES } from "../../constant/dummy_data";
import { GlobalStyles } from "../../constant/styles";

function ExpensesOutput({expenses,expensesPeriod}){
    return(
        <View style={styles.container} >
         
            <ExpensesSummary  expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}
export default ExpensesOutput

const styles = StyleSheet.create({
    container:{
        padding:24,
        flex:1,
        backgroundColor:GlobalStyles.colors.primary700
    }
})