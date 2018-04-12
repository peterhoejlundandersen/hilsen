// CreatingAnimal("cows", 495800);
// CreatingAnimal("chickens", 101777100);
// CreatingAnimal("humans", 53261);
$(document).ready(function() {
  openTarget();
  setInterval(function() {
    CreatingAnimal("gris");
    console.log("Gris " + getInterval(+ 18356500));
  }, getInterval(18356500));
  // setInterval(function() {
  //   CreatingAnimal("Ko");
  //   console.log("Ko " + getInterval(+ 495800));
  // }, getInterval(495800));
  setInterval(function() {
    CreatingAnimal("Kylling");
    console.log("Kylling" + getInterval(+ 101777100));
  }, getInterval(101777100));
});

function getInterval(nr_of_ani_year) {
  SECONS_PER_YEAR = 31557600;
  seconds_for_each_ani = SECONS_PER_YEAR / nr_of_ani_year;
  seconds_thou = seconds_for_each_ani * 1000;
  return seconds_thou;
}

function openTarget() {
  btns = document.querySelectorAll('.js-open-target');
  Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      div = document.getElementById(btn.dataset.target);
      if (div.classList.contains('d-none')) {
        div.classList.remove('d-none');
      } else {
        div.classList.add('d-none');
      }
    });
  });
}

function CreatingAnimal(type) {
  var $container = $("#container");
  var $div = createBall("100px", "black", type); // Animal type in the end here
  $div.appendTo($container);
}

// Create a <div> 
function createBall(size, color, animal_type) {
  return $('<div>' + animal_type + '</div>')
    .css("background-color", color)
    .css("color", "white")
    .css("width", size)
    .css("height", size)
    .css("border-radius", size / 2);
}

function getAnimal(type) {
  if (type == "pig") {
    "assets/blogs/animals/pig.jpg";
  } else if (type == "cow") {
    "assets/blogs/animals/cow.jpg";
  } else {
    "assets/blogs/animals/chicken.jpg";
  }
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
    color: "black",
    animal_type: 'pig',
    size: size,
    left1: ltr ? -size : $container.width(),
    left2: getRandomInt(0, $container.width() - size),
    top: getRandomInt(-$container.height() * 2,
      $container.height() / 2 - size),
    duration: getRandomInt(500, 2000)
  };
}

// Bouncing a ball consists of horizontal and
// vertical animations that run simultaneously.
// (The second animation uses "queue: false".)
function startBounceAnimation(type) {
  var $container = $("#container");
  var path = getRandomPath($container);
  var $div = createBall(path.left1, path.top, path.size, path.color, type); // Animal type in the end here
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

