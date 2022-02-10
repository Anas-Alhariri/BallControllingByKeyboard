import Ball from './Ball.js'


const numberOfBallsToBeGenerated = 0;
const ballsArray = [];

const colorsArray = ["lightgreen", "red", "green", "yellow", "purple", "orange", "white", "pink"];
const values = [100, 50, 20, 70, 90, 500, 300, 48, 65, 85, 105]

for (let i = 0; i < numberOfBallsToBeGenerated; i++) {
    // Create new ball.
    const newBall = new Ball(randomItemPicker(values), randomItemPicker(values), randomItemPicker(colorsArray));

    // Add the ball to the list of balls array.
    ballsArray.push(newBall);
    // ballsArray.push(new Ball());
}


function randomItemPicker(itemsArray) {
    const randomIndex = Math.floor(Math.random() * itemsArray.length);
    return itemsArray[randomIndex]
}









// x?: number, y?: number, color?: string, size?: number, stepSpeed?: number
// const ball1 = new Ball(180, 800, "red", 50, 5);
// const ball3 = new Ball(100, 500, "red", 50, 5);
// const ball4 = new Ball(450, 200, "red", 50, 5);
// const ball5 = new Ball(1050, 10000, "yellow", 50, 5);
// const ball6 = new Ball(50, 100, "red", 50, 1);
// const ball2 = new Ball();

// let ballsList = [];
// ballsList = [...ballsList, ball2, ball3, ball4, ball5, ball6]
// ballsList.push(new Ball(180, 800, "purple", 50, 5))
// ballsList.push(new Ball(180, 800, "purple", 50, 5))
// ballsList.push(new Ball(180, 800, "purple", 50, 5))


// console.log(ballsList)

// for (const ball of ballsList) {
//     console.log(ball.color)
// }




const ball = new Ball();





