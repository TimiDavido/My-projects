const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");

let count = 0;
increasebtn.onclick = function () {
  count++;
  countlabel.textContent = count;
};

decreasebtn.onclick = function () {
  count--;
  countlabel.textContent = count;
};

resetbtn.onclick = function () {
  count = 0;
  countlabel.textContent = count;
};

// const handleIncrease = () => {
//   count++;
//   countlabel.textContent = count;
//   console.log(count);
// };

// const handleDecrease = () => {
//   if (!count <= 0) {
//     count--;
//   } else {
//     return count;
//   }
//   countlabel.textContent = count;
//   console.log(count);
// };

// const handleReset = () => {
//   count = 0;
//   countlabel.textContent = count;
//   console.log(count);
// };

// increasebtn.addEventListener("click", handleIncrease);
// decreasebtn.addEventListener("click", handleDecrease);
// resetbtn.addEventListener("click", handleReset);
