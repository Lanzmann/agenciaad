

function makeVisible(a){

    if(a == true)
    {
    textoGrade.style.visibility = "visible";
    console.log("Ok");
    }
    else
    {
        textoGrade.style.visibility = "hidden";
        console.log("Oka");
    }
};

const itemGrade = document.querySelector(".item-grade");

$(document).ready(function(){
    $(".item-grade").hover(function(){
        
        $(this).children(".foto-grade").css("opacity", 0.2);
        $(this).children(".imagem-titulo").css("visibility", "visible");

      },
      function(){
        $(this).children(".foto-grade").css("opacity", 1);
        $(this).children(".imagem-titulo").css("visibility", "hidden");

      });


      
  });

const textoGrade = document.querySelector(".imagem-titulo");

// if(itemGrade)
// {
// itemGrade.addEventListener("mouseover", function(){makeVisible(true)});
// itemGrade.addEventListener("mouseout", function(){makeVisible(false)});
// // };
