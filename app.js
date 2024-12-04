const COMP_ONE = 'Компьютер 1';
const COMP_TWO = 'Компьютер 2'

const getRandomInteger = (min, max) => {
    const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
    const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
    const result = Math.random() * (upper - lower + 1) + lower;

    return Math.floor(result);
};

// Функция для угадывания числа бинарным поиском
const binarySearchGuess = (target) => {
    let min = 1;
    let max = 100;
    let guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);

        console.log(`${COMP_TWO}: Пробую число ${guess}.`);

        if (guess === target) {
            console.log(`${COMP_ONE}: Угадал!`);
            break;
        } else if (guess < target) {
            console.log(`${COMP_ONE}: Больше.`);
            min = guess + 1;
        } else {
            console.log(`${COMP_ONE}: Меньше.`);
            max = guess - 1;
        }
    }
}

const secretNumber = getRandomInteger(1, 100);
console.log(`${COMP_ONE} загадал число: ${secretNumber}`);

binarySearchGuess(secretNumber);