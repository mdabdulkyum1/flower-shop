// Mobile menu created
var humOpen = document.getElementById("hum-open");
var humClose = document.getElementById("hum-close");
var mainMenu = document.getElementById("main-menu");

humOpen.addEventListener("click", function () {
    humOpen.style.display = "none";
    humClose.style.display = "block";
    mainMenu.style.left = "0%";
});
humClose.addEventListener("click", function () {
    humOpen.style.display = "block";
    humClose.style.display = "none";
    mainMenu.style.left = "-100%";
});
// document.addEventListener("click", function(){
//     mainMenu.style.left = "-100%";
// });
//