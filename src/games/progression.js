import { runGameEngine } from "../engine/gameEngine.js";

const gameRules = "What number is missing in the progression?"

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomNumberWithPriority = (recommended) => {
    const minNum = 5
    const maxNum = 10
    const procentOfRecommended = 0.8
    if (Math.random() < procentOfRecommended) return recommended
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

const generateProgression = () => {
    let result = [];
    const start = getRandomNumber(0, 9)
    const step = getRandomNumber(1, 9)
    for (let i = 0; i < getRandomNumberWithPriority(10); i += 1) {
        result.push((start + i * step).toString())
    }
    return result
}

const generateRound = () => {
    let question = generateProgression()
    const index = getRandomNumber(0, question.length - 1)
    const correctAnswer = question[index]
    question.splice(index, 1, '..')

    return {
        question: question.join(" "),
        correctAnswer: correctAnswer
    }
}

export const startProgressionGame = () => {
    return runGameEngine(gameRules, generateRound)
}
