import { Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { DUMMY_EXPENSES } from "../../constant/dummy_data";

function ExpensesOutput({expenses,expensesPeriod}){
    return(
        <View>
         
            <ExpensesSummary  expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}
export default ExpensesOutput