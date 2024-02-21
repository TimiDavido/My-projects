const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * 100);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a number from 1- 100 you FOOL");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too low try again");
    } else if (guess > answer) {
      window.alert("Too high, Try again");
    } else {
      window.alert(
        `Correct The answer is ${answer}. It took you ${attempts} attempts`
      );
      running = false;
    }
  }
}
