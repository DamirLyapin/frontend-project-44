import readlineSync from 'readline-sync';

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

const processOfTheGame = () => {
    let correctAnswer
    let userAnswer
    for (let j = 0; j < 3; j += 1) {
        let result = [];
        const start = getRandomNumber(0, 9)
        const step = getRandomNumber(0, 9)
        const index = getRandomNumber(0, 10)
        for (let i = 0; i < getRandomNumberWithPriority(10); i += 1) {
            result.push((start + i * step).toString())
            if (i === index) {
                result.pop(((start + i * step)).toString())
                result.push('...')
            }
        }
        console.log('Question: ' + result)
        userAnswer = Number(readlineSync.question('Your answer: '))
        correctAnswer = start + index * step
        if (userAnswer === correctAnswer) {
            console.log('Correct!')
            if (j === 2) {
                console.log(`Congratutations, ${userName}`)
            }
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }
    }
}

console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ')
console.log(`Hello, ${userName}!`);
console.log("What number is missing in the progression?")
processOfTheGame()
