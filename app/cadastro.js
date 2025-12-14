import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleStart = () => {
    if (name.trim() === '' || email.trim() === '') {
      Alert.alert('Atenção', 'Treinador, precisamos do seu nome e email!');
      return;
    }

    router.push({
      pathname: '/quiz',
      params: { name, email }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mestre Pokémon Quiz</Text>
      <Text style={styles.subtitle}>Você é um mestre Pokémon?</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome do Treinador</Text>
        <TextInput 
          style={styles.input} 
          value={name} 
          onChangeText={setName} 
          placeholder="Digite seu nome..."
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail do Treinador</Text>
        <TextInput 
          style={styles.input} 
          value={email} 
          onChangeText={setEmail} 
          placeholder="Digite seu email..."
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleStart} activeOpacity={0.8}>
        <Text style={styles.buttonText}>INICIAR QUIZ</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 30, 
    justifyContent: 'center', 
    backgroundColor: '#fff'
  },
  title: { 
    fontSize: 28, 
    fontWeight: '900', 
    textAlign: 'center', 
    color: '#3B4CCA',
    marginBottom: 5 
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: { 
    marginLeft: 10,
    marginBottom: 8, 
    fontWeight: 'bold', 
    color: '#444',
    fontSize: 14
  },
  input: { 
    height: 55,
    borderWidth: 1, 
    borderColor: '#ddd', 
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: '#333'
  },
  button: {
    backgroundColor: '#FFCC00',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: '#3B4CCA',
    borderWidth: 2
  },
  buttonText: {
    color: '#3B4CCA',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase'
  }
});