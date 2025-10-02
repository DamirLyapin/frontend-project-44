import readlineSync from 'readline-sync';

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
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const processOfTheGame = () => {
    let correctAnswer
    let userAnswer
    for (let i = 0; i < 3; i += 1) {
        const numberForUser = getRandomNumber(1, 100)
        if (isPrime(numberForUser)) correctAnswer = 'yes'
        else correctAnswer = 'no'
        console.log(`Question: ${numberForUser}`)
        userAnswer = readlineSync.question('Your answer: ')
        if (userAnswer === correctAnswer) {
            console.log('Correct!')
            if (i === 2) {
                console.log(`Congralutations, ${userName}`)
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
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
processOfTheGame()