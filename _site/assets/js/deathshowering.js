$(document).ready(function() {
  only_once = true;
  $(document).keydown(function(ev) {
    if (ev.keyCode === 13 && only_once) { 
      timerForAnimals();
      only_once = false;
    }
  });
  $("#submit").on("click", function(e) {
    if (only_once) {
      e.preventDefault();
      timerForAnimals();
      only_once = false;
    }
  });
});

function timerForAnimals() {
  $(".info-box").hide();
  new_src = "/assets/blogs/animals/angry-man.png";
  $("#man").attr("src", new_src);
  $(".bubble-text").html("Årh nej! Hvad har du dog gjort? Dem gider jeg sgu da ikke at se. <br><br><br>");
  setInterval(function() {
    startBounceAnimation("pigs");
    // CreatingAnimal("pigs");
    console.log("PIG " + getInterval(+ 18356500));
  }, getInterval(18356500));
  setInterval(function() {
    startBounceAnimation("cows");
    console.log("COW " + getInterval(+ 495800));
  }, getInterval(495800));
  setInterval(function() {
    startBounceAnimation("chickens");
    // CreatingAnimal("chickens");
    console.log("CHICKEN" + getInterval(+ 101777100));
  }, getInterval(101777100));
  setInterval(function() {
    startBounceAnimation("coffin");
  }, getInterval(52824));
}

function getInterval(nr_of_ani_year) {
  SECONS_PER_YEAR = 31557600;
  seconds_for_each_ani = SECONS_PER_YEAR / nr_of_ani_year;
  seconds_thou = seconds_for_each_ani * 1000;
  return seconds_thou;
}

function CreatingAnimal(type) {
  var $container = $("#container");
  var $div = createBall("100px", "black", type); // Animal type in the end here
  $div.appendTo($container);
}

// Create a <div> 
function createBall(left, top, size, color, animal_type) {
  animal_image_url = getAnimalImage(animal_type);
  animal = $('<div><img src="' + animal_image_url + '"/></div>');
  animal_size = getAnimalSize(animal_type);
  return animal.css("background-color", "transparent")
    .css("position", "relative")
    .css("color", "white")
    .css("width", animal_size)
    .css("border-radius", size / 2);
}

function leftOrRight() {
  if (getRandomBool) {
    return "left";
  } else {
    return "right";
  }
}

function getAnimalSize(type) {
  switch (type) {
    case "pigs": 
      size = getRandomInt(150, 200);
      break;
    case "cows":
      size = getRandomInt(220, 270);
      break;
    case "coffin":
      size = getRandomInt(200, 220);
      break;
    default:
      size = getRandomInt(20, 50);
  }
  return size;
}

function getAnimalImage(type) {
  if (type == "pigs") {
    return '/assets/blogs/animals/pig.png';
  } else if (type == "cows") {
    return '/assets/blogs/animals/cow.png';
  } else if (type == "coffin") {
    return '/assets/blogs/animals/coffin.png';
  } else {
    return '/assets/blogs/animals/chicken.png';
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
  var size = getRandomInt(40, 50);
  
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
    duration: getRandomInt(4555, 6000)
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
  // $div.animate({
  //   "left": path.left2
  // }, {
  //   duration: path.duration,
  //   easing: 'swing'
  // });
  // $div.animate({
  //   "bottom": $container.height() - $div.height()
  // }, {
  //   duration: path.duration,
  //   easing: 'easeOutBounce',
  //   queue: false
  // });
  return $div;
}

// Maybe for something else
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
