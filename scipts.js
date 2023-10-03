document.getElementById("kurv").addEventListener("mouseenter", vis) ;

function vis(){
    document.getElementById("kurv").style.display = "none" ;
    document.getElementById("rødkurv").style.display = "flex" ;}

document.getElementById("rødkurv").addEventListener("mouseleave", gem) ;

function gem(){
    
    document.getElementById("rødkurv").style.display = "none" ;
    document.getElementById("kurv").style.display = "flex" ;}
