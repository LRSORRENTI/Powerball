// OLD VERSION

// // Array of possible numbers
// const pickFive = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//     41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//     61, 62, 63, 64, 65, 66, 67, 68, 69
// ];

// // Array of possible Powerball numbers
// const powerBall = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22, 23, 24, 25, 26
// ];

// // Generate 5 unique random numbers from pickFive array
// const randomPickFive = [];
// while (randomPickFive.length < 5) {
//     let randomNum = pickFive[Math.floor(Math.random() * pickFive.length)];
//     if (!randomPickFive.includes(randomNum)) {
//         randomPickFive.push(randomNum);
//     }
// }
// console.log("Random Pick Five:", randomPickFive);

// // Generate 1 random number from powerBall array
// let randomPowerBall = powerBall[Math.floor(Math.random() * powerBall.length)];
// console.log("Random PowerBall:", randomPowerBall);

// // Function to generate an array of unique random numbers
// const genRandNumsArray = (count, max) => {
//     const rands = [];
//     while (rands.length < count) {
//         const r = Math.floor(Math.random() * max);
//         if (rands.indexOf(r) === -1) {
//             rands.push(r);
//         }
//     }
//     return rands;
// }
// Function to initialize an array with consecutive numbers
const initArray = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => i + start);

// Arrays of possible numbers
const pickFive = initArray(1, 69);
const powerBall = initArray(1, 26);

// Function to generate unique random numbers from an array
const getUniqueRandomNumbers = (array, count) => {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < count) {
        const randomNum = array[Math.floor(Math.random() * array.length)];
        uniqueNumbers.add(randomNum);
    }
    return Array.from(uniqueNumbers);
};

// Function to generate and display Powerball numbers with staggered fade animation
const generateNumbers = () => {
    const randomPickFive = getUniqueRandomNumbers(pickFive, 5);
    const randomPowerBall = powerBall[Math.floor(Math.random() * powerBall.length)];

    // Display Pick Five numbers with staggered fade animation
    const pickFiveContainer = document.getElementById('pick-five-numbers');
    pickFiveContainer.innerHTML = '';
    randomPickFive.forEach((num, index) => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number', 'fade');
        numberElement.textContent = num;
        pickFiveContainer.appendChild(numberElement);
        setTimeout(() => {
            numberElement.classList.remove('fade');
            numberElement.classList.add('show');
        }, index * 300); // Staggered delay
    });

    // Display Powerball number with fade animation
    const powerBallContainer = document.getElementById('powerball-number');
    powerBallContainer.innerHTML = '';
    const powerBallElement = document.createElement('div');
    powerBallElement.classList.add('number', 'fade');
    powerBallElement.textContent = randomPowerBall;
    powerBallContainer.appendChild(powerBallElement);
    setTimeout(() => {
        powerBallElement.classList.remove('fade');
        powerBallElement.classList.add('show');
    }, randomPickFive.length * 300); // Delay after last Pick Five number
};

// Event listener for generate button
document.getElementById('generate-button').addEventListener('click', generateNumbers);
