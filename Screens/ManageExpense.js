import { Text, View, StyleSheet } from "react-native";

function ManageExpense(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>ManageExpense</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#4d58d2',
        alignItems: 'center',
        justifyContent: 'center',
      
        
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: '#d6e2da'
    }
});

export default ManageExpense