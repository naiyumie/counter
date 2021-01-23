const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

increase.onclick = () => {
  console.log("increase 가 클릭됨");
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  console.log("decrease 가 클릭됨");
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};

reset.onclick = () => {
  console.log("reset 가 클릭됨");
  number.innerText = 0;
};
