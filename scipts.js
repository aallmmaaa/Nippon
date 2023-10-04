document.getElementById("kurv").addEventListener("mouseenter", vis) ;

function vis(){
    document.getElementById("kurv").style.display = "none" ;
    document.getElementById("rødkurv").style.display = "flex" ;}

document.getElementById("rødkurv").addEventListener("mouseleave", gem) ;

function gem(){
    
    document.getElementById("rødkurv").style.display = "none" ;
    document.getElementById("kurv").style.display = "flex" ;}






document.getElementById("hurtig").addEventListener("mouseenter", vishurtig) ;

function vishurtig(){
    document.getElementById("hurtig-kort").style.display = "block" ;
    document.getElementById("klassisk-kort").style.display = "none" ;
    document.getElementById("eksperimenterende-kort").style.display = "none" ;
    document.getElementById("økonomisk-kort").style.display = "none" ;}



document.getElementById("klassisk").addEventListener("mouseenter", visklassisk) ;

function visklassisk(){
    document.getElementById("klassisk-kort").style.display = "block" ;
    document.getElementById("hurtig-kort").style.display = "none" ;
    document.getElementById("eksperimenterende-kort").style.display = "none" ;
    document.getElementById("økonomisk-kort").style.display = "none" ;}



document.getElementById("økonomisk").addEventListener("mouseenter", visøkonomisk) ;

function visøkonomisk(){
    document.getElementById("økonomisk-kort").style.display = "block" ;
    document.getElementById("eksperimenterende-kort").style.display = "none" ;
    document.getElementById("klassisk-kort").style.display = "none" ;
    document.getElementById("hurtig-kort").style.display = "none" ;}



document.getElementById("eksperimenterende").addEventListener("mouseenter", viseksperimenterende) ;

function viseksperimenterende(){
    document.getElementById("eksperimenterende-kort").style.display = "block" ;
    document.getElementById("økonomisk-kort").style.display = "none" ;
    document.getElementById("klassisk-kort").style.display = "none" ;
    document.getElementById("hurtig-kort").style.display = "none" ;}


document.getElementById("scroll2").addEventListener("mouseleave", gemhover) ;

function gemhover(){
    document.getElementById("eksperimenterende-kort").style.display = "none" ;
    document.getElementById("økonomisk-kort").style.display = "none" ;
    document.getElementById("klassisk-kort").style.display = "none" ;
    document.getElementById("hurtig-kort").style.display = "none" ;}
