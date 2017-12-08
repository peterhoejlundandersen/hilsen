window.onload = function() {
  var techloves = document.querySelectorAll('[data-collect="project"]');

  techloves.forEach(function(techlove, i) {
    i += 1;
    // Set the connection and number
    var connection = 'expl' + i;
    var btn = techlove.getElementsByClassName('button')[0];
    btn.dataset.id = connection;
    var div = techlove.getElementsByClassName('hidden')[0];
    div.setAttribute('id', connection);
    var number = techlove.getElementsByClassName('number')[0];
    number.innerHTML = i + '.';

    btn.addEventListener('click', function(this_btn){
      if (btn.classList.contains('button-active')) {
        btn.classList.remove('button-active');
        div.classList.add('hidden');
        div.classList.remove('show-techlove');
      } else {
        btn.classList.add('button-active');
        div.classList.add('show-techlove');
        div.classList.remove('hidden');
      }
    }); // techloves.forEach


  });
};
