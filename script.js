var images = ["icons/laulud.jpeg", "icons/klaver.jpeg", "icons/nelipyha.jpeg", "icons/sibulatee.jpeg"]
var index = 1;

var posterImg = document.getElementById("poster-img");
posterImg.src = images[0];

let interval = setInterval(function(){
    posterImg.src = images[index];
    index = (index + 1) % 4
}, 10000)

