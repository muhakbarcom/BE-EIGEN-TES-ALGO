// Desc : Mencari pengurangan dari jumlah diagonal sebuah matrik NxN
// Input : [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
// Output : 3

function diagonalDifference(matrix) {
  return Math.abs(
    matrix.reduce((acc, row, i) => acc + row[i] - row[row.length - i - 1], 0)
  );
}
const Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const difference = diagonalDifference(Matrix);
console.log(difference); // Output: 3
