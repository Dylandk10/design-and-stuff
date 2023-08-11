$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
      $('nav').addClass('navColorFadeIn');
      $('nav').removeClass('navColorFadeout');
    } else {
        $('nav').addClass('navColorFadeout');
        $('nav').removeClass('navColorFadeIn');
    }
  });




//key press for search box
var input = document.getElementById("heroSearch");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("heroBtn").click();
  }
});


//global chip compentents
const chipContent1 = document.getElementById("chipContent")
const chipContent2 = document.getElementById("chipContent2")
const chip1 = document.getElementById("chip1");
const chip2 = document.getElementById("chip2");


//search function to add chips
document.getElementById("heroBtn").addEventListener("click", function(e) {
  e.preventDefault();

  if(input.value == "") {
    return;
  }

  //display the chips
  if (chipContent1.textContent == "" && chipContent2.textContent == "") {
    console.log("case 1");
    chipContent1.textContent = input.value;
    $("#chip2").hide();
    $("#chip1").show(1200);

  } else if(chipContent1.textContent != "" && chipContent2.textContent == ""){
    console.log("case 2");
    chipContent2.textContent = chipContent1.textContent;
    chipContent1.textContent = input.value;
    $("#chip1").show(1200);
    $("#chip2").show(1200);

  } else if(chipContent1.textContent == "" && chipContent2.textContent != "") {
    console.log("case 3");
    chipContent1.textContent = input.value;
    $("#chip1").show(1200);
    //createChip("chip1", "chipContent1", 1);

  } else if(chipContent1.textContent != "" && chipContent2.textContent != "") {
    console.log("case 4");
    chipContent2.textContent = chipContent1.textContent;
    chipContent1.textContent = input.value;
    $("#chip1").show(1200);
    $("#chip2").show(1200)
    //createChip("chip1", "chipContent1", 1);
    //createChip("chip2", "chipContent2", 2);
  }



  //alert show and reset
  alert("This website is for design purposes only. No backend. Just beautiful design by Dylan.");
  $("#recentSearch").show(1200);
  input.value = "";
});



function hideChip(number, element) {
  if(number == 1) {
    chipContent1.textContent = "";
  } else if(number == 2) {
    chipContent2.textContent = "";
  }

  element.parentElement.style.display='none';

}

