// Once jQuery is ready, we bounce a ball and
// set a random timeout period to start the
// next bouncing ball.
$(document).ready(function() {
  function bounceNextBall() {
    var $div = startBounceAnimation();
    setTimeout(bounceNextBall, getRandomInt(1, 1000));
  }

  openTarget();

  bounceNextBall();
});

function openTarget() {
  btns = document.querySelectorAll('.js-open-target');
  Array.from(btns).forEach(function(btn) {
    div = document.getElementById(btn.dataset.target);
  debugger;
    div.classList.remove('d-none');
  });
}

function Showering(data) {
  sec_year = 31557600;
  pics_pr_sec = (18356500 / sec_year);
  cows_pr_sec = (495800 / sec_year);
  chicks_pr_sec = (101777100 / sec_year);
  humans_pr_sec = (53261 / sec_year);
  if (data.pigs) {
    console.log("Grise: " + pics_pr_sec);
  }
  if (data.cows) {
    console.log("Kvæg: " + cows_pr_sec);
  }
  if (data.chickens) {
    console.log("Kyllinger: " + chicks_pr_sec);
  }
}

function getData() {
  let kon = document.getElementById('kon');
  let oeko = document.getElementById('oeko');
  let pigs = document.getElementById('pigs');
  let cows = document.getElementById('cows');
  let chickens = document.getElementById('chickens');
  let sound = document.getElementById('sound');
  return {kon: kon.checked, oeko: oeko.checked, pigs: pigs.checked, cows: cows.checked, chickens: chickens.checked, sound: sound.checked };
}

// Create a <div> that will be the bouncing
// ball.
function createBall(left, top, size, color) {
  return $('<div></div>')
    .css("background-color", color)
    .css("left", left)
    .css("top", top)
    .css("width", size)
    .css("height", size)
    .css("border-radius", size / 2);
}

function getRandomColor() {
  return "black";
}

function getRandomBool() {
  return Math.random() >= 0.5;
}

function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function getRandomPath($container) {
  // First, we'll decide if the ball should
  // bounce from left to right or right to
  // left.
  var ltr = getRandomBool();
  
  // The diameter will range from 10 to 50 pixels.
  var size = getRandomInt(10, 50);
  
  // We'll return an object with parameters that
  // describe the ball and its bounce.
  return {
    color: getRandomColor(),
    size: size,
    left1: ltr ? -size : $container.width(),
    left2: getRandomInt(0, $container.width() - size),
    top: getRandomInt(-$container.height() * 2,
      $container.height() / 2 - size),
    duration: getRandomInt(500, 2000)
  }
}

// Bouncing a ball consists of horizontal and
// vertical animations that run simultaneously.
// (The second animation uses "queue: false".)
function startBounceAnimation() {
  var $container = $("#container");
  var path = getRandomPath($container);
  var $div = createBall(path.left1, path.top, path.size, path.color);
  $div.appendTo($container);
  $div.animate({
    "left": path.left2
  }, {
    duration: path.duration,
    easing: 'swing'
  });
  $div.animate({
    "top": $container.height() - $div.height()
  }, {
    duration: path.duration,
    easing: 'easeOutBounce',
    queue: false
  });
  return $div;
}

