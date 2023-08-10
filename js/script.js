$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('nav').addClass('navColorFadeIn');
      $('nav').removeClass('navColorFadeout');
    } else {
        $('nav').addClass('navColorFadeout');
        $('nav').removeClass('navColorFadeIn');
    }
  });





var input = document.getElementById("heroSearch");
let resentSearch = [];

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("heroBtn").click();
  }
});

document.getElementById("heroBtn").addEventListener("click", function(e) {
  e.preventDefault();
  resentSearch.push(input.value);

  //create and add chip
  let div = document.createElement('div');
  let chip = document.createElement('span');
  div.classList.add("chip");
  chip.classList.add("closebtn");
  div.textContent = resentSearch[resentSearch.length -1].toString();
  chip.innerHTML = " &times;"
  chip.onclick = function() { this.parentElement.style.display='none' };
  div.appendChild(chip);
  let sib = document.getElementById("searches").nextElementSibling;
  document.getElementById("searches").insertBefore(div, sib);
  alert("This is jsut a design website and does not search. Strictly to show off design.");
  $("#recentSearch").show(1500);
});