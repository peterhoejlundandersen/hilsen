window.addEventListener('load', function() {
  document.getElementById('shower').addEventListener('click', function() {
    Showering(getData());
  });
});


function Showering(data) {
  sec_year = 31557600;
  pics_pr_sec = (18356500 / sec_year);
  cows_pr_sec = (495800 / sec_year);
  chicks_pr_sec = (101777100 / sec_year);
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
