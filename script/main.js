window.onload = function() {
  var techloves = document.querySelectorAll('.buttons');
  techloves.forEach(function(techlove){
    techlove.addEventListener('click', function() {
      div = document.querySelector('#' + techlove.dataset.id);
      if (techlove.classList.contains('button-active')) {
        div.classList.add('hidden');
        div.classList.remove('show-techlove');
        techlove.classList.remove('button-active');
      } else {
        div.classList.add('show-techlove');
        div.classList.remove('hidden');
        techlove.classList.add('button-active');
      }
    });
  });

};
