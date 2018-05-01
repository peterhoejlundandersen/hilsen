function setHeadingsList() {
	var headings = document.querySelectorAll('h2, h3');
	var list = document.querySelector('.js-hilsen-list');
  var html_list = "<h4 style='padding-top: 5px;'>Indholdsfortegnelse:</h4>";
	html_list += "<ul class='heading-list'>";
	Array.from(headings).forEach(function(heading) {
    if (heading.tagName == "H2") {
      html = "<li class='heading-list-item'>" + "<a class='blue-highlight' href='#" + heading.id + "'>" + heading.innerText + "</a></li>";
    } else {
      html = "<li class='heading-list-item smaller'>" + "<a class='blue-highlight' href='#" + heading.id + "'>" + heading.innerText + "</a></li>";
    }
		html_list += html;
	});
	html_list += "</ul>";
	if (list) { 
     list.innerHTML = html_list; 
   }
}

function otherFunctions() {
  setHeadingsList();
}
