window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("Sticky", window.scrollY > 25);
})

var formData = new formData(document.getElementById("form"))