// Desc : Menghitung jumlah kemunculan kata-kata dalam sebuah array
// Input : ['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz']
// Output : [1, 0, 2]

function countWords(input, query) {
  return query.map((q) => input.filter((word) => word === q).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const counts = countWords(INPUT, QUERY);
console.log(counts); // Output: [1, 0, 2]
