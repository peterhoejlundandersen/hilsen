function setHeadingsList() {
	var headings = document.querySelectorAll('h2');
	var list = document.querySelector('.js-hilsen-list');
	var html_list = "<ol class='heading-list'>";
	Array.from(headings).forEach(function(heading) {
		html = "<li class='heading-list-item'>" + "<a class='blue-highlight' href='#" + heading.id + "'>" + heading.innerText + "</a></li>";
		html_list += html;
	});
	html_list += "</ol>";
	list.innerHTML = html_list;
}

window.addEventListener('load', function() {
	setHeadingsList();
});
