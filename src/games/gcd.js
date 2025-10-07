import { runGameEngine } from '../engine/gameEngine.js';

const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}


const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gameRules = "Find the greatest common divisor of given numbers."

const generateRound = () => {
    const number1ForUser = getRandomNumber(1, 100)
    const number2ForUser = getRandomNumber(1, 100)
    const correctAnswerInNum = gcd(number1ForUser, number2ForUser)
    const correctAnswer = correctAnswerInNum.toString()
    return {
        question: `${number1ForUser} ${number2ForUser}`,
        correctAnswer: correctAnswer
    }
}

export const startGcdGame = () => {
    return runGameEngine(gameRules, generateRound)
}