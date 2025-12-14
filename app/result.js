import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultScreen({ navigation, route }) {
  const router = useRouter();
  const params = useLocalSearchParams();

  const score = Number(params.score);
  const total = Number(params.total);
  const percentage = (score / total) * 100;

const getPerformanceResult = () => {
    if (percentage === 100) {
      return {
        title: "MESTRE POKÉMON!",
        message: "Perfeito! Você acertou tudo!",
        color: '#4CAF50',
        image: require('../assets/pikachu-super-happy.jpg') 
      };
    } else if (percentage >= 60) {
      return {
        title: "ACE TRAINER!",
        message: "Você conhece muito bem Pokémon.",
        color: '#2196F3',
        image: require('../assets/pikachu-happy.jpg')
      };
    } else {
      return {
        title: "BUG CATCHER...",
        message: "Não desista, tente novamente!",
        color: '#F44336',
        image: require('../assets/pikachu-not-happy.jpeg')
      };
    }
  };

  const resultData = getPerformanceResult();

  const handleRetryQuiz = () => {
    router.replace({
      pathname: '/quiz',
      params: { name: params.name, email: params.email }
    });
  };

  const handleNewProfile = () => {
    router.dismissAll();
  };

  return (
    <View style={styles.container}>
      
      <Image 
        source={resultData.image} 
        style={styles.reactionImage}
        resizeMode="contain"
      />

      <Text style={[styles.mainTitle, { color: resultData.color }]}>
        {resultData.title}
      </Text>
      <Text style={styles.subTitle}>
        {resultData.message}
      </Text>
      
      <View style={styles.resultCard}>
        <View style={styles.row}>
            <Text style={styles.label}>Treinador(a): </Text>
            <Text style={styles.value}>{params.name}</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.label}>Acertos: </Text>
            <Text style={[styles.value, { color: resultData.color }]}>
                {score} / {total}
            </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: resultData.color }]} 
            onPress={handleRetryQuiz}
        >
            <Text style={styles.buttonText}>Refazer Quiz ↺</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]} 
            onPress={handleNewProfile}
        >
            <Text style={styles.secondaryButtonText}>Sair / Novo Perfil</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  
  reactionImage: {
    width: 250, 
    height: 250, 
    marginBottom: 20
  },
  
  mainTitle: { 
    fontSize: 36,
    fontWeight: '900', 
    textAlign: 'center',
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  
  subTitle: { 
    fontSize: 20, 
    color: '#555', 
    marginBottom: 40, 
    textAlign: 'center', 
    fontStyle: 'italic' 
  },
  
  resultCard: { 
    width: '100%', 
    padding: 15, 
    backgroundColor: '#f9f9f9', 
    borderRadius: 10, 
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#eee'
  },
  
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  label: { fontSize: 16, color: '#666' },
  value: { fontSize: 16, fontWeight: 'bold', color: '#333' },

  buttonContainer: { width: '100%', gap: 15 },
  
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    elevation: 3
  },
  
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ccc',
    elevation: 0
  },
  
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  secondaryButtonText: { color: '#666', fontSize: 16, fontWeight: 'bold' }
});