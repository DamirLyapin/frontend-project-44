import { runGameEngine } from '../engine/gameEngine.js'

const isPrime = (number) => {
  if (number <= 2) return true
  else if (number % 2 === 0) return false
  else {
    for (let j = 3; j < number / 2; j += 2) {
      if (number % j === 0) return false
    }
    return true
  }
}

const getRandomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const generateRound = () => {
  const numberForUser = getRandomNumber(1, 100)
  const correctAnswer = isPrime(numberForUser) ? 'yes' : 'no'

  return {
    question: numberForUser,
    correctAnswer: correctAnswer,
  }
}

export const startPrimeGame = () => {
  return runGameEngine(gameRules, generateRound)
}
