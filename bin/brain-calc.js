import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const processOfTheGame = () => {
    const operations = ['+', '-', '*'];
    for (let i = 0; i < 3; i += 1) {
        const randomIndex = Math.floor(Math.random() * operations.length);
        const operation = operations[randomIndex];
        let userAnswer
        let correctAnswer
        switch(operation) {
            case '+':
                const number1Sum = getRandomNumber(1, 100)
                const number2Sum = getRandomNumber(1, 100)
                console.log(`Question: ${number1Sum} + ${number2Sum}`)
                userAnswer = Number(readlineSync.question('Your answer: '))
                correctAnswer = number1Sum + number2Sum
                break
            case '-':
                const number1Dif = getRandomNumber(1, 100)
                const number2Dif = getRandomNumber(1, 100)
                console.log(`Question: ${number1Dif} - ${number2Dif}`)
                userAnswer = Number(readlineSync.question('Your answer: '))
                correctAnswer = number1Dif - number2Dif
                break
            case '*':
                const number1Ulti = getRandomNumber(1, 10)
                const number2Ulti = getRandomNumber(1, 10)
                console.log(`Question: ${number1Ulti} * ${number2Ulti}`)
                userAnswer = Number(readlineSync.question('Your answer: '))
                correctAnswer = number1Ulti * number2Ulti
                break
        }
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
console.log('What is the result of the expression?')
processOfTheGame()