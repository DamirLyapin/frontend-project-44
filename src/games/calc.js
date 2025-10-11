import { runGameEngine } from '../engine/gameEngine.js'

const getRandomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomSymbol = () => {
  const operations = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operations.length)
  const operation = operations[randomIndex]
  return operation
}

const calculate = (a, b, operator) => {
  switch (operator) {
  case '+': return a + b
  case '-': return a - b
  case '*': return a * b
  }
}

const gameRules = 'What is the result of the expression?'

const generateRound = () => {
  const a = getRandomNumber(1, 100)
  const b = getRandomNumber(1, 100)
  const operator = getRandomSymbol()
  const question = `${a} ${operator} ${b}`
  const correctAnswerInNum = calculate(a, b, operator)
  const correctAnswer = correctAnswerInNum.toString()
  return {
    question: question,
    correctAnswer: correctAnswer,
  }
}

export const startCalcGame = () => {
  return runGameEngine(gameRules, generateRound)
}
