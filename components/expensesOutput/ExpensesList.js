import { Text, View,FlatList } from "react-native";
import ExpensesItem from "./ExpensesItem";


function ExpensesList({expenses}){
    const renderExpensesItem=((itemData)=>{
        return <ExpensesItem {...itemData.item} />
    })
    return(
 
            <FlatList data={expenses}  renderItem={renderExpensesItem} keyExtractor={(item)=>item.id} />
    )
}
export default ExpensesList