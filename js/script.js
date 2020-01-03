

// mostro le carte al click start
document.getElementById('play').addEventListener("click",
function(){
  var i;
for (i=1; i<=16; i++) {
  carta = document.getElementById('card'+i);
  console.log(carta);
  ordine = Math.floor(Math.random() * 16 + 1);
  console.log(ordine);
}
  document.getElementById("card1").classList.add("rotation");
  document.getElementById("card2").classList.add("rotation");
  document.getElementById("card3").classList.add("rotation");
  document.getElementById("card4").classList.add("rotation");
  document.getElementById("card5").classList.add("rotation");
  document.getElementById("card6").classList.add("rotation");
  document.getElementById("card7").classList.add("rotation");
  document.getElementById("card8").classList.add("rotation");
  document.getElementById("card9").classList.add("rotation");
  document.getElementById("card10").classList.add("rotation");
  document.getElementById("card11").classList.add("rotation");
  document.getElementById("card12").classList.add("rotation");
  document.getElementById("card13").classList.add("rotation");
  document.getElementById("card14").classList.add("rotation");
  document.getElementById("card15").classList.add("rotation",)
  document.getElementById("card16").classList.add("rotation");
  setTimeout(function () {
    document.getElementById('card1').classList.add("bootstramp");
    document.getElementById("card2").classList.add("bootstramp");
    document.getElementById("card3").classList.add("csharp");
    document.getElementById("card4").classList.add("csharp");
    document.getElementById("card5").classList.add("css3");
    document.getElementById("card6").classList.add("css3");
    document.getElementById("card7").classList.add("html5");
    document.getElementById("card8").classList.add("html5");
    document.getElementById("card9").classList.add("java");
    document.getElementById("card10").classList.add("java");
    document.getElementById("card11").classList.add("laravel");
    document.getElementById("card12").classList.add("laravel");
    document.getElementById("card13").classList.add("php");
    document.getElementById("card14").classList.add("php");
    document.getElementById("card15").classList.add("python");
    document.getElementById("card16").classList.add("python");
  }, 200);
  // giro le carte mostrate
  setTimeout(function () {
    document.getElementById('card1').classList.remove("bootstramp","rotation");
    document.getElementById("card2").classList.remove("bootstramp","rotation");
    document.getElementById("card3").classList.remove("csharp","rotation");
    document.getElementById("card4").classList.remove("csharp","rotation");
    document.getElementById("card5").classList.remove("css3","rotation");
    document.getElementById("card6").classList.remove("css3","rotation");
    document.getElementById("card7").classList.remove("html5","rotation");
    document.getElementById("card8").classList.remove("html5","rotation");
    document.getElementById("card9").classList.remove("java","rotation");
    document.getElementById("card10").classList.remove("java","rotation");
    document.getElementById("card11").classList.remove("laravel","rotation");
    document.getElementById("card12").classList.remove("laravel","rotation");
    document.getElementById("card13").classList.remove("php","rotation");
    document.getElementById("card14").classList.remove("php","rotation");
    document.getElementById("card15").classList.remove("python","rotation");
    document.getElementById("card16").classList.remove("python","rotation");
    document.getElementById('unclick').classList.add("hidden");
  }, 10000);

}
)
