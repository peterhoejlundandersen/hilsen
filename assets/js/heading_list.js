function setHeadingsList() {
	var headings = document.querySelectorAll('h2');
	var list = document.querySelector('.js-hilsen-list');
	var html_list = "<ol class='heading-list'>";
	Array.from(headings).forEach(function(heading) {
		html = "<li class='heading-list-item'>" + "<a class='blue-highlight' href='#" + heading.id + "'>" + heading.innerText + "</a></li>";
		html_list += html;
	});
	html_list += "</ol>";
	if (list) { list.innerHTML = html_list; }
}

function countFacecook() {
  document.getElementById('facebookCount').addEventListener('click', function() {
    var str = document.body.innerText;
    var count = str.match(/Facebook/ig) ;
    count_str = count.join(", ");
    document.getElementById('facebookCount').innerHTML = "'Facebook' blev brugt så mange gange i denne tekst: <br>" + count_str;

  });
  
}


function showAnswer(target, answer) {
  var field = document.querySelector(target);
  field.addEventListener('click', function() {
    field.innerHTML = answer;
    field.style.cursor = "default";
  });
}

function setSources() {
  var sources = document.querySelectorAll('.small-source');
  var html_part = "<ul class='sources'>";
  Array.from(sources).forEach(function(source) {
		html_part += "<li class='heading-list-item'>" + source.innerText + " - <a href='" + source.getAttribute('href') + "'>" + source.dataset.title + "</a></li>";
  });
  html_part += "</ul>";
  document.getElementById('sources').innerHTML = html_part;
}

answer = "Tid. De ønsker, at den forbruger din tid. <br> Dit News Feed er designet til at holde på dig så længe som muligt. <a href='https://newsroom.fb.com/news/2015/06/news-feed-fyi-taking-into-account-time-spent-on-stories/' target='blank' class='small-source'>8</a>";

window.addEventListener('load', function() {
  setSources();
  countFacecook();
	setHeadingsList();
  showAnswer(".green-table tbody tr td", answer);
});



