// Desc : Mencari kata terpanjang dari sebuah kalimat
// Input : "Saya sangat senang mengerjakan soal algoritma"
// Output : "mengerjakan : 11 Character"

function longestWord(sentence) {
  const longest = sentence
    .split(' ')
    .reduce((a, b) => (a.length >= b.length ? a : b));
  return `${longest} : ${longest.length} Character`;
}

const sentence = 'Saya sangat senang mengerjakan soal algoritma';
const longestWordResult = longestWord(sentence);
console.log(longestWordResult); // Output: "mengerjakan"
