const fs = require('fs');

const args = process.argv.slice(2);
const INPUT_FILE_PATH = args[0];

const inputData = fs.readFileSync(INPUT_FILE_PATH, 'utf8');
const lines = inputData.split('\n');

const elfInventories = [];
let calorieCount = 0;
lines.forEach((line) => {
  if (isNaN(parseInt(line))) {
    elfInventories.push(calorieCount);
    calorieCount = 0;
  } else {
    calorieCount += parseInt(line);
  }
});

elfInventories.sort((elfA, elfB) => {
  return elfB - elfA;
});

console.log(elfInventories);
console.log(`Largest calorie count: ${elfInventories[0]}`);

const topThreeSum = elfInventories[0] + elfInventories[1] + elfInventories[2];
console.log(`Top 3 calorie count sum: ${topThreeSum}`);
