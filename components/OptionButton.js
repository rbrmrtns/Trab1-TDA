import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function OptionButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFCC00',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
    borderColor: '#3B4CCA',
    borderWidth: 2,
  },
  text: {
    color: '#3B4CCA',
    fontSize: 16,
    fontWeight: 'bold',
  },
});