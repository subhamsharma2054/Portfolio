const Hicon =document.getElementById("Hicon");
const Sicon =document.getElementById("Sicon");
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 80){
        document.getElementById("Hicon").style.display="none";
        document.getElementById("Sicon").style.display="flex";
    }
    else{
        document.getElementById("Hicon").style.display="flex";
        document.getElementById("Sicon").style.display="none";
    }
    var scroll = document.getElementById("ScrollToTop")
    scroll.classList.toggle("active", window.scrollY >625)
});