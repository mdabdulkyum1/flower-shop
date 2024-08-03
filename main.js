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


function loadResources() {
    if (window.innerWidth > 768) { // Adjust the width as per your requirement
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/gh/mdabdulkyum1/c-a@main/style.css';
        document.head.appendChild(link);

        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/mdabdulkyum1/c-a@main/main.js';
        document.body.appendChild(script);
    }
}

loadResources();

window.addEventListener('resize', function() {
    // Reload the page on resize if necessary to re-evaluate the condition
    location.reload();
});