import readlineSync from 'readline-sync';

const isEven = (number) => {
    return number % 2 === 0
}

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const processOfTheGame = () => {
    for (let i = 0; i < 3; i++) {
        const numberforUser = getRandomNumber(1, 100)
        console.log(`Question: ${numberforUser}`)
        const userAnswer = readlineSync.question('Your answer: ')
        if ((isEven(numberforUser) === true) && (userAnswer === 'yes') && (i !== 2)){
            console.log('Correct')
        } else if ((isEven(numberforUser) === false) && (userAnswer === 'no') && (i !== 2)){
            console.log('Correct')
        } else if ((isEven(numberforUser) === true) && (userAnswer !== 'yes')) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`)
            console.log(`Let's try again, ${userName}!`)
            i = 2
        } else if ((isEven(numberforUser) === false) && (userAnswer !== 'no')) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`)
            console.log(`Let's try again, ${userName}!`)
            i = 2
        } else if ((isEven(numberforUser) === false) && (userAnswer === 'no') && (i === 2)){
            console.log('Correct')
            console.log(`Congratulations, ${userName}!`)
        } else if ((isEven(numberforUser) === true) && (userAnswer === 'yes') && (i === 2)){
            console.log('Correct')
            console.log(`Congratulations, ${userName}!`)
        }
    } 
}
console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name?: ')
console.log(`Hello, ${userName}!`);
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.")
processOfTheGame()