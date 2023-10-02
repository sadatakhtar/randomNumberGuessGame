import { StyleSheet, Text, View, Pressable } from 'react-native'
import Colors from '../../utils/Colors'

const Btn = ({children, onPress, style}) => {
   
  return (
    <Pressable style={styles.btnContainer} onPress={onPress}>
      <Text style={[styles.textContainer, style]}>{children}</Text>
    </Pressable>
  )
}

export default Btn

const styles = StyleSheet.create({
    btnContainer: {
        borderWidth: 1,
        borderColor: Colors.primaryYellow,
        backgroundColor: Colors.primary300,
        height: 35,
        borderRadius: 6,
    },
    textContainer: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: 16,
        padding: 4  
    }
})