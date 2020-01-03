

// mostro le carte al click start
document.getElementById('play').addEventListener("click",
function(){
  var i;
for (i=1; i<=16; i++) {
  carta = document.getElementById('card'+i);
  ordine = Math.floor(Math.random() * 16 + 1);
  carta.classList.add("order"+ ordine);
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
}, 5000);
}
);
// creo le if ed elif per le opzioni di ogni carta
primaScelta = "";
secondaScelta=" ";
coppieTrovate = 0
// carta 1
document.getElementById('card1').addEventListener("click",
function(){
  document.getElementById("card1").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card1").classList.add("bootstramp");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card1";
  }
  else {
    if (primaScelta == "card2") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card1").classList.add("hidden");
        document.getElementById("card2").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
      document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta 2
document.getElementById('card2').addEventListener("click",
function(){
  document.getElementById("card2").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card2").classList.add("bootstramp");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card2";
  }
  else {
    if (primaScelta == "card1") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card1").classList.add("hidden");
        document.getElementById("card2").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta3
document.getElementById('card3').addEventListener("click",
function(){
  document.getElementById("card3").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card3").classList.add("csharp");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card3";
  }
  else {
    if (primaScelta == "card4") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card4").classList.add("hidden");
        document.getElementById("card3").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta4
document.getElementById('card4').addEventListener("click",
function(){
  document.getElementById("card4").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card4").classList.add("csharp");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card4";
  }
  else {
    if (primaScelta == "card3") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card3").classList.add("hidden");
        document.getElementById("card4").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta5
document.getElementById('card5').addEventListener("click",
function(){
  document.getElementById("card5").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card5").classList.add("css3");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card5";
  }
  else {
    if (primaScelta == "card6") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card5").classList.add("hidden");
        document.getElementById("card6").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta 6
document.getElementById('card6').addEventListener("click",
function(){
  document.getElementById("card6").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card6").classList.add("css3");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card6";
  }
  else {
    if (primaScelta == "card5") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card6").classList.add("hidden");
        document.getElementById("card5").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta7
document.getElementById('card7').addEventListener("click",
function(){
  document.getElementById("card7").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card7").classList.add("html5");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card7";
  }
  else {
    if (primaScelta == "card8") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card8").classList.add("hidden");
        document.getElementById("card7").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta8
document.getElementById('card8').addEventListener("click",
function(){
  document.getElementById("card8").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card8").classList.add("html5");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card8";
  }
  else {
    if (primaScelta == "card7") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card7").classList.add("hidden");
        document.getElementById("card8").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta9
document.getElementById('card9').addEventListener("click",
function(){
  document.getElementById("card9").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card9").classList.add("java");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card9";
  }
  else {
    if (primaScelta == "card10") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card10").classList.add("hidden");
        document.getElementById("card9").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta 10
document.getElementById('card10').addEventListener("click",
function(){
  document.getElementById("card10").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card10").classList.add("java");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card10";
  }
  else {
    if (primaScelta == "card9") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card9").classList.add("hidden");
        document.getElementById("card10").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta11
document.getElementById('card11').addEventListener("click",
function(){
  document.getElementById("card11").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card11").classList.add("laravel");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card11";
  }
  else {
    if (primaScelta == "card12") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card12").classList.add("hidden");
        document.getElementById("card11").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta12
document.getElementById('card12').addEventListener("click",
function(){
  document.getElementById("card12").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card12").classList.add("laravel");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card12";
  }
  else {
    if (primaScelta == "card11") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card12").classList.add("hidden");
        document.getElementById("card11").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta13
document.getElementById('card13').addEventListener("click",
function(){
  document.getElementById("card13").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card13").classList.add("php");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card13";
  }
  else {
    if (primaScelta == "card14") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card13").classList.add("hidden");
        document.getElementById("card14").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
// carta14
document.getElementById('card14').addEventListener("click",
function(){
  document.getElementById("card14").classList.add("rotation","z-index");
  setTimeout(function () {
    document.getElementById("card14").classList.add("php");
  }, 250);
  if (primaScelta =="") {
    primaScelta = "card14";
  }
  else {
    if (primaScelta == "card13") {
      primaScelta = ""
      setTimeout(function () {
        document.getElementById("card13").classList.add("hidden");
        document.getElementById("card14").classList.add("hidden");
      }, 1000);
      coppieTrovate ++;
      console.log(coppieTrovate);
    }
    else {
    document.getElementById('rigioca').classList.remove("hidden");
    }
  }
}
);
