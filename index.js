// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  let hQ = 42;
  return Math.abs(someValue - hQ);
}

function distanceFromHqInFeet(someValue) {
  return blocksToFeet(distanceFromHqInBlocks(someValue));
}

function blocksToFeet(num) {
    return num * 264;
}

function distanceTravelledInFeet(num1, num2) {
    return blocksToFeet(Math.abs(num1 - num2));
}

function calculatesFarePrice(start, destination) {

    let distance = distanceTravelledInFeet(start, destination);
    console.log(distance);
    let fare = (distance * 0.02).toFixed(2);
    let freebie = (400 * 0.02).toFixed(2);
    
    switch (distance > 0) {
      case distance <= 400:
        return 0;
      case distance > 400 && distance < 2000:
        return +(fare - freebie).toFixed(2);
      case distance >= 2000 && distance <= 2500:
        return 25;
      case distance > 2500:
        return "cannot travel that far";
    }
    
}

console.log(calculatesFarePrice(34, 32));

