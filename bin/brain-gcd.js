import readlineSync from 'readline-sync';

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

const processOfTheGame = () => {
    let correctAnswer
    let userAnswer
    for (let i = 0; i < 3; i += 1) {
        const number1 = getRandomNumber(1, 100)
        const number2 = getRandomNumber(1, 100)  
        console.log(`Question: ${number1} ${number2}`)
        correctAnswer = gcd(number1, number2)
        userAnswer = Number(readlineSync.question('Your answer: '))
        if (userAnswer === correctAnswer) {
            console.log('Correct!')
            if (i === 2) {
                console.log(`Congratulations, ${userName}!`)
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
console.log("Find the greatest common divisor of given numbers.")
processOfTheGame()