
let hard = document.querySelector('.hard');
let checkHard = document.querySelector('.addRandom');
function checkNum(event) {
  const onlyNumbers = /^[1-9]$/;

  if (!event.target.innerHTML.match(onlyNumbers) && event.target.innerHTML) {
    event.target.style.backgroundColor = '#e65022';
    checkHard.setAttribute('disabled', 'disabled');
  } else {
    checkHard.removeAttribute('disabled', 'disabled');
    // check.removeAttribute('disabled', 'disabled');
  }
}

hard.addEventListener('input', checkNum);

