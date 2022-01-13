// Selection / Ciblages
var button = document.querySelectorAll("button");
console.log(buttons)

// Ecouteur d'évenement
.addToCart.addEventListener("click", function() {
var items= parseInt (nbItems.textContent) + 1;
});

for (var i=0; i<2; i++){
   button[i].addEventListener("click", function() {
       nbItems.textContent = parseInt(nbItem.textContent) +  1;
   });
}