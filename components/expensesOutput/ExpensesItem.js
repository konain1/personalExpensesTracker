import { Pressable, View,StyleSheet,Text } from "react-native";
import { GlobalStyles } from "../../constant/styles";
import GetformatedDate from "../../util/getformatedDate";
import { useNavigation } from "@react-navigation/native";

function ExpensesItem({date,description,amount}){

    const navigation = useNavigation()
    function ExpensePressHandler(){
        navigation.navigate('ManageExpense')
    }
    return(
        <Pressable onPress={ExpensePressHandler} style={({pressed})=>pressed && styles.pressed} >
            <View style={styles.expnesesItem}>
                <View >
                    <Text style={[styles.textbase,styles.description]}>{description}</Text>
                    <Text style={styles.textbase}>{GetformatedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                <Text style={styles.amount}>${amount}</Text>

                </View>
            </View>
        </Pressable>
    )
}

export default ExpensesItem

const styles = StyleSheet.create({
    pressed:{
        opacity:0.75
    },
    expnesesItem:{
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:6,
        elevation:3,
        shadowColor:GlobalStyles.colors.gray500,
        shadowRadius:4,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4
        
    },
    textbase:{
        color:GlobalStyles.colors.primary50
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold',
       color:"white",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        minWidth:80
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold'
    }

})