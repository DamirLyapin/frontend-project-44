import { runGameEngine } from '../engine/gameEngine.js';

const isEven = (number) => {
    return number % 2 === 0
}

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
    const numberForUser = getRandomNumber(1, 100)
    const correctAnswer = isEven(numberForUser) ? 'yes': 'no';

    return {
        question: numberForUser.toString(),
        correctAnswer: correctAnswer
    }
}

export const startEvenGame = () => {
    return runGameEngine(gameRules, generateRound)
};
