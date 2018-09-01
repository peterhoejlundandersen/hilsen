function countFacecook() {
  var facebook = document.getElementById('facebookCount');
  if (facebook != null) {
    facebook.addEventListener('click', function() {
      var str = document.body.innerText;
      var count = str.match(/Facebook/ig) ;
      count_str = count.join(", ");
      document.getElementById('facebookCount').innerHTML = "'Facebook' blev brugt så mange gange i denne tekst: <br>" + count_str;
    });
  }
}


function showAnswer(target, answer) {
  var field = document.querySelector(target);
  if ( field != null ) {
    field.addEventListener('click', function() {
      field.innerHTML = answer;
      field.style.cursor = "default";
    });
  }
}

function setSources() {
  var sources = document.querySelectorAll('.small-source');
  var html_part = "<ul class='sources'>";
  Array.from(sources).forEach(function(source) {
    year = (source.dataset.year) ? "(" + source.dataset.year + ")" : ""; 
		html_part += " <li class='heading-list-item'>" + source.innerText + " - <a href='" + source.getAttribute('href') + "'>" + source.dataset.title + " <i>" + year + "</i></a></li>";
  });
  html_part += "</ul>";
  var sources = document.getElementById('sources');
  if ( sources != null ) {
    sources.innerHTML = html_part;
  }
}

answer = "Tid. De ønsker, at den forbruger din tid. <br> Dit News Feed er designet til at holde på dig så længe som muligt. <a href='https://newsroom.fb.com/news/2015/06/news-feed-fyi-taking-into-account-time-spent-on-stories/' target='blank' class='small-source'>8</a>";


window.addEventListener('load', function() {
  setSources();
  countFacecook();
  showAnswer(".green-table tbody tr td", answer);

  if (typeof otherFunctions !== 'undefined') {
    otherFunctions();
  }
});



