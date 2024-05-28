// Desc : Membalikkan urutan alphabet pada sebuah string
// Input : "NEGIE1"
// Output : "EIGEN1"

function reverseAlphabet(str) {
  const letters = str
    .match(/[A-Za-z]/g)
    .reverse()
    .join('');
  const numbers = str.match(/[0-9]/g).join('');
  return letters + numbers;
}

const inputStr = 'NEGIE1';
const output = reverseAlphabet(inputStr);
console.log(output); // Output: "EIGEN1"
