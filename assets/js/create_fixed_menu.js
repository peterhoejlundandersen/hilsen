console.log("I*MASKLDJ");
function createFooter() {
  var list = document.querySelector('.js-hilsen-list'); 
  var btn = document.createElement('button');
  btn.innerHTML = "|||";
  var fixed_menu = document.createElement('div');
  fixed_menu.innerHTML = list;
  document.getElementsByTagName('body')[0].appendChild(fixed_menu);
}

createFooter();
