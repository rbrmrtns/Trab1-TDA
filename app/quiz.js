import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import OptionButton from '../components/OptionButton';

export default function QuizScreen({ navigation, route }) {
  const router = useRouter();
  const { name, email } = useLocalSearchParams();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Qual foi o primeiro Pokémon criado?",
      options: ["Arceus", "Bulbasauro", "Rhydon", "Mew"],
      answer: "Rhydon",
      image: require('../assets/q1.png')
    },
    {
      question: "Qual é o tipo do Pokémon 'Garchomp'",
      options: ["Dragão/Terrestre", "Dragão/Voador", "Terrestre/Pedra", "Dragão/Aço"],
      answer: "Dragão/Terrestre",
      image: require('../assets/q2.webp')
    },
    {
      question: "Em qual geração o tipo Fada foi introduzido?",
      options: ["4ª Geração", "5ª Geração", "6ª Geração", "7ª Geração"],
      answer: "6ª Geração",
      image: require('../assets/q3.webp')
    },
    {
      question: "Qual é o nome da região do jogo Pokémon Sun and Moon?",
      options: ["Sinnoh", "Hoenn", "Alola", "Unova"],
      answer: "Alola",
      image: require('../assets/q4.jpg')
    },
    {
      question: "Qual ataque causa mais dano a Pokémon do tipo Fantasma?",
      options: ["Psychic", "Shadow Ball", "Hyper Beam", "Crunch"],
      answer: "Crunch",
      image: require('../assets/q5.png')
    },
    {
      question: "Qual é o número máximo de Pokémon em uma party?",
      options: ["4", "5", "6", "7"],
      answer: "6",
      image: require('../assets/q6.png')
    },
    {
      question: "Qual Pokémon é conhecido como o 'Guardião do Mar'?",
      options: ["Kyogre", "Lugia", "Manaphy", "Suicune"],
      answer: "Lugia",
      image: require('../assets/q7.jpg')
    },
    {
      question: "Qual foi o primeiro Pokémon do Ash?",
      options: ["Charmander", "Pikachu", "Bulbasauro", "Squirtle"],
      answer: "Pikachu",
      image: require('../assets/q8.webp')
    },
    {
      question: "Qual é o nome do time de vilões em Pokémon Ruby e Sapphire?",
      options: ["Time Rocket", "Time Magma e Time Aqua", "Time Galactic", "Time Plasma"],
      answer: "Time Magma e Time Aqua",
      image: require('../assets/q9.png')
    },
    {
      question: "Qual é o primeiro Pokémon na Pokédex Nacional?",
      options: ["Bulbasauro", "Charmander", "Squirtle", "Pikachu"],
      answer: "Bulbasauro",
      image: require('../assets/q10.png')
    },
  ];

  const handleAnswer = (selectedOption) => {
    const currentQ = questions[currentQuestionIndex];
    let newScore = score;

    if (selectedOption === currentQ.answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.replace({
        pathname: '/result',
        params: { 
          name, 
          email, 
          score: newScore, 
          total: questions.length 
        }
      });
    }
  };

return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Treinador(a): {name}</Text>
      <Text style={styles.progress}>Questão {currentQuestionIndex + 1}/{questions.length}</Text>
      
      <Image 
        source={questions[currentQuestionIndex].image} 
        style={styles.questionImage}
        resizeMode="contain"
      />

      <View style={styles.card}>
        <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <OptionButton key={index} title={option} onPress={() => handleAnswer(option)} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  header: { fontSize: 14, color: '#888', alignSelf: 'flex-start', marginBottom: 5 },
  progress: { fontSize: 16, marginBottom: 15, fontWeight: 'bold', color: '#3B4CCA' },
  
  questionImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },

  card: { backgroundColor: '#f0f0f0', padding: 20, borderRadius: 10, marginBottom: 20, width: '100%', elevation: 2 },
  questionText: { fontSize: 18, textAlign: 'center', fontWeight: 'bold', color: '#333' },
  optionsContainer: { width: '100%' }
});