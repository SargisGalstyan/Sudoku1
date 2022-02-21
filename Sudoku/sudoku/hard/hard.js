import { addRandom } from '../general/addRandom.js';
import { start, pause, reset } from '../general/stopwatch.js';
import { answers, checkColumnsArr, checkGrid, checkRowsArr } from './checkDublicatesBefore.js';
import { answersFilled, checkGridFilled } from './checkFunctionsFilled.js';

let checkBtn = document.querySelector('.checkHard');
export let randomBtn = document.querySelector('.addRandom');

let grid = document.querySelectorAll('.grid');
function random() {
  checkColumnsArr.length = 0;
  checkRowsArr.length = 0;
  zero();
  for (let i = 0; i < grid.length; i++) {
    addRandom(grid[i].children);
  }
}
function zero() {
  arr.length = 0;
  matrix.length = 0;
  answers.length = 0;
  newmatrix.length = 0;
  newarr.length = 0;
}
checkBtn.addEventListener('click', () => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      grid[i].children[j].innerHTML = '';
    }
  }
});
checkBtn.addEventListener('click', random);

export let matrix = [];
let arr = [];
const nestedArrLength = 8;
function fillArray(arr) {
  for (let i = 0; i <= nestedArrLength; i++) {
    for (let j = 0; j <= nestedArrLength; j++) {
      arr.push(parseInt(grid[i].children[j].innerHTML));
    }
  }
  return arr;
}

checkBtn.addEventListener('click', () => {
  fillArray(arr);
});


export function split(arr, len) {
  let i = 0;
  let n = arr.length;

  while (i < n) {
    matrix.push(arr.slice(i, (i += len)));
  }
  return matrix;
}

checkBtn.addEventListener('click', () => {
  split(arr, 3);
});

let newmatrix = [];
let newarr = [];
function createMatrix() {
  for (let i = 0; i < matrix.length; i++) {
    newarr = matrix[i].concat(matrix[i + 3], matrix[i + 6]);
    newmatrix.push(newarr);
  }
  let newmatrix2 = [];
  newmatrix2.push(
    newmatrix[0],
    newmatrix[1],
    newmatrix[2],
    newmatrix[9],
    newmatrix[10],
    newmatrix[11],
    newmatrix[18],
    newmatrix[19],
    newmatrix[20]
  );
  return newmatrix2;
}

checkBtn.addEventListener('click', () => {
  checkGrid(createMatrix());
  
});

setInterval(()=>{
  while (answers[0] == false) {
    checkBtn.click();
  }
},10)

randomBtn.addEventListener('click', () => {
  zero();
});

randomBtn.addEventListener('click', () => {
  fillArray(arr);
});
randomBtn.addEventListener('click', () => {
  split(arr, 3);
});

randomBtn.addEventListener('click', () => {
  createMatrix();
});
randomBtn.addEventListener('click', () => {
  checkGridFilled(createMatrix());
});
checkBtn.addEventListener('click', reset);
checkBtn.addEventListener('click', start);
randomBtn.addEventListener('click', pause);

