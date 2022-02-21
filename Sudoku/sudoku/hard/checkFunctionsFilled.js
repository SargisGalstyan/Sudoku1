export let answersFilled = [];
export const checkRowsArrFilled = [];
export const checkGridArrFilled = [];
export const checkColumnsArrFilled = [];
export function checkGridFilled(matrix) {
  answersFilled.length = 0;
  checkRowsArrFilled.length = 0;
  checkColumnsArrFilled.length = 0;
  let z, z1;
  for (let i = 0; i < matrix.length; i++) {
    checkRowsArrFilled.splice(0, z);
    checkColumnsArrFilled.splice(0, z1);

    for (let j = 0; j < matrix[i].length; j++) {
      checkRowsArrFilled.push(matrix[i][j]);
      checkColumnsArrFilled.push(matrix[j][i]);
      z = checkRowsArrFilled.length;
      z1 = checkColumnsArrFilled.length;
    }

    const x = new Set(checkRowsArrFilled);
    const y = new Set(checkColumnsArrFilled);

    if (x.size != z || y.size != z1) {
      answersFilled.push(false);
    }
  }
}
