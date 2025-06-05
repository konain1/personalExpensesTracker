import { Text, View } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";


function AllExpenses(){
    return<ExpensesOutput expensesPeriod="total" />
}

export default AllExpenses