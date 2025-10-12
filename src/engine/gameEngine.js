import readlineSync from 'readline-sync'

export const runGameEngine = (gameRules, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name?: ')
  console.log(`Hello, ${userName}!`)
  console.log(gameRules)
  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`)
      }
    } 
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
}
