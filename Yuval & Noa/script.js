var left = document.querySelector('.left');
var right = document.querySelector('.right');
var leftText = document.getElementById("text_left");
var rightText = document.getElementById("text_right");
var btnCloseLeft = document.querySelector('.x-left-close');
var btnCloseRight = document.querySelector('.x-right-close');
var leftExpanded = false;
var rightExpanded = false;

left.addEventListener('click', (event) => {
  left.classList.add('expand');
  right.classList.add('shrink');
  btnCloseLeft.classList.add('show');
  btnCloseRight.classList.remove('show');
  leftExpanded = true;

  if (rightExpanded) {
    left.classList.remove('shrink');
    right.classList.remove('expand');
    rightExpanded = false;
  }

  if (left.classList.contains('expand')) {
    rightText.style.display = 'none';
    leftText.style.display = 'block';
  }
  else {
    rightText.style.display = 'none';
    leftText.style.display = 'none';
  }
})

btnCloseLeft.addEventListener('click', (event) => {
  if(leftExpanded) {
    left.classList.remove('expand');
    right.classList.remove('shrink');
    btnCloseLeft.classList.remove('show');
    leftExpanded = false;
  } else {
    leftExpanded = true;
  }

  if (left.classList.contains('expand')) {
    rightText.style.display = 'none';
    leftText.style.display = 'block';
  }
  else {
    rightText.style.display = 'none';
    leftText.style.display = 'none';
  }
})

right.addEventListener('click', (event) => {
  right.classList.add('expand');
  left.classList.add('shrink');
  btnCloseRight.classList.add('show');
  btnCloseLeft.classList.remove('show');
  rightExpanded = true;

  if (leftExpanded) {
    left.classList.remove('expand');
    right.classList.remove('shrink');
    leftExpanded = false;
  }

  if (right.classList.contains('expand')) {
    leftText.style.display = 'none';
    rightText.style.display = 'block';
  }
  else {
    rightText.style.display = 'none';
    leftText.style.display = 'none';
  }
})

btnCloseRight.addEventListener('click', (event) => {
  if (rightExpanded) {
    right.classList.remove('expand');
    left.classList.remove('shrink');
    btnCloseRight.classList.remove('show');
    rightExpanded = false;
  } else {
    rightExpanded = true;
  }

  if (right.classList.contains('expand')) {
    leftText.style.display = 'none';
    rightText.style.display = 'block';
  }
  else {
    rightText.style.display = 'none';
    leftText.style.display = 'none';
  }
})
