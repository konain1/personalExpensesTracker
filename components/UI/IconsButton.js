import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';

function IconsButton({ name, size, color, onPress }) {
    return (
        <Pressable 
            onPress={onPress} 
            style={({pressed}) => pressed ? styles.pressed : null}
        >
            <View style={styles.buttonContainer}>
                <AntDesign name={name} size={size} color={color} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginVertical:2,
        marginHorizontal:8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})

export default IconsButton