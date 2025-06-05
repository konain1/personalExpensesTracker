import { Text, View,FlatList } from "react-native";


function ExpensesList({expenses}){
    const renderExpensesItem=((itemData)=>{
        return <Text>{itemData.item.description}</Text>
    })
    return(
 
            <FlatList data={expenses}  renderItem={renderExpensesItem} keyExtractor={(item)=>item.id} />
    )
}
export default ExpensesList