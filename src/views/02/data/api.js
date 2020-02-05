const delay = Math.floor(Math.random() * 5000) + 500;

const user = {
  firstname: "Janne",
  lastname: "Huotari",
  stats: {
    rank: 720,
    points: 3980,
    level: 6
  }
};

const answers = {
  1: "Krypton"
};

const quiz = {
  id: 1,
  question: "On which planet was superman born?",
  options: [
    {
      text: "Krypton"
    },
    {
      text: "Asgard"
    },
    {
      text: "Azeroth"
    }
  ]
};

const views = [
  {
    tag: "new",
    name: "Quick Play",
    icon: ""
  },
  {
    tag: "January",
    name: "Events",
    icon: ""
  },
  {
    tag: "Season 3",
    name: "Tournament",
    icon: ""
  },
  {
    tag: "Play with friends",
    name: "Rivals",
    icon: ""
  }
];

class QuizApi {
  static getQuiz() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(quiz);
      }, delay);
    });
  }

  static getViews() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(views);
      }, delay);
    });
  }

  static getUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(user);
      }, delay);
    });
  }

  static checkAnswer(quiz, userAnswer) {
    return new Promise((resolve, reject) => {
      const correct = answers[quiz.id] === userAnswer;
      setTimeout(() => {
        resolve(correct);
      }, delay);
    });
  }
}

export default QuizApi;
