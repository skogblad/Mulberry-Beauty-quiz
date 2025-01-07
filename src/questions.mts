// Defination for questions
export interface IQuestion {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

// Array for questions
const quizQuestions: IQuestion[] = [
  {
    id: 0,
    question: "Var ligger Eiffeltornet?",
    answers: ["London", "Paris", "Berlin"],
    correctAnswer: "Paris",
  },
  {
    id: 1,
    question: "Vilken är huvudstaden i Japan?",
    answers: ["Tokyo", "Kyoto", "Osaka"],
    correctAnswer: "Tokyo",
  },
  {
    id: 2,
    question: "Vilket land har flest invånare?",
    answers: ["Indien", "Kina", "USA"],
    correctAnswer: "Kina",
  },
  {
    id: 3,
    question: "I vilket land ligger Machu Picchu?",
    answers: ["Brasilien", "Mexiko", "Peru"],
    correctAnswer: "Peru",
  },
  {
    id: 4,
    question: "Vad är huvudstaden i Kanada?",
    answers: ["Ottawa", "Vancouver", "Toronto"],
    correctAnswer: "Ottawa",
  },
  {
    id: 5,
    question: "Vilken är huvudstaden i Tyskland?",
    answers: ["München", "Hamburg", "Berlin"],
    correctAnswer: "Berlin",
  },
  {
    id: 6,
    question: "Vad heter den största ön i Grekland?",
    answers: ["Kreta", "Rhodos", "Korfu"],
    correctAnswer: "Kreta",
  },
  {
    id: 7,
    question: "Vilken stad är känd som The Big Apple?",
    answers: ["Chicago", "Los Angeles", "New York"],
    correctAnswer: "New York",
  },
  {
    id: 8,
    question: "Vilket land är känt för sina tulpaner och väderkvarnar?",
    answers: ["Belgien", "Danmark", "Nederländerna"],
    correctAnswer: "Nederländerna",
  },
  {
    id: 9,
    question:
      "Vilket land är känt för att vara det största landet i världen till ytan?",
    answers: ["Ryssland", "USA", "Kina"],
    correctAnswer: "Ryssland",
  },
  {
    id: 10,
    question:
      "Vilken afrikansk nation var den första att få självständighet från Storbritannien?",
    answers: ["Sydafrika", "Ghana", "Nigeria"],
    correctAnswer: "Ghana",
  },
  {
    id: 11,
    question: "Vilken är huvudstaden i Australien?",
    answers: ["Sydney", "Canberra", "Melbourne"],
    correctAnswer: "Canberra",
  },
  {
    id: 12,
    question: "I vilket land hittar du Colosseum?",
    answers: ["Spanien", "Italien", "Grekland"],
    correctAnswer: "Italien",
  },
  {
    id: 13,
    question: "Vad heter den största staden i Brasilien?",
    answers: ["Rio de Janeiro", "São Paulo", "Brasília"],
    correctAnswer: "São Paulo",
  },
  {
    id: 14,
    question: "Vilket land är känt för att ha Mount Fuji?",
    answers: ["Korea", "Kina", "Japan"],
    correctAnswer: "Japan",
  },
  {
    id: 15,
    question: "Vilken är huvudstaden i Egypten?",
    answers: ["Kairo", "Alexandria", "Luxor"],
    correctAnswer: "Kairo",
  },
  {
    id: 16,
    question:
      "Vilken stad är känd för att vara byggd på kanaler och har gondoler?",
    answers: ["Amsterdam", "Venedig", "Barcelona"],
    correctAnswer: "Venedig",
  },
  {
    id: 17,
    question: "Vilket land är känt för sina pyramider?",
    answers: ["Mexiko", "Egypten", "Indien"],
    correctAnswer: "Egypten",
  },
  {
    id: 18,
    question: "Vilken stad är huvudstad i Förenade Arabemiraten?",
    answers: ["Dubai", "Doha", "Abu Dhabi"],
    correctAnswer: "Abu Dhabi",
  },
  {
    id: 19,
    question: "Vilket land är det största i Afrika?",
    answers: ["Nigeria", "Sudan", "Algeriet"],
    correctAnswer: "Algeriet",
  },
];

export default quizQuestions;
