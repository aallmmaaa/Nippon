
document.getElementById("kontakt1").addEventListener("mouseenter", viskontakt) ;

function viskontakt(){
    document.getElementById("kontakt2").style.display = "flex"
    document.getElementById("kontakt1").style.display = "none"}

document.getElementById("kontakt2").addEventListener("mouseleave", gemkontakt) ;

function gemkontakt(){
    document.getElementById("kontakt2").style.display = "none"
    document.getElementById("kontakt1").style.display = "flex"}


document.getElementById("historie1").addEventListener("mouseenter", vishistorie) ;

function vishistorie(){
    document.getElementById("historie2").style.display = "flex"
    document.getElementById("historie1").style.display = "none"}

document.getElementById("historie2").addEventListener("mouseleave", gemhistorie) ;

function gemhistorie(){
    document.getElementById("historie2").style.display = "none"
    document.getElementById("historie1").style.display = "flex"}


document.getElementById("koncept1").addEventListener("mouseenter", viskoncept) ;

function viskoncept(){
    document.getElementById("koncept2").style.display = "flex"
    document.getElementById("koncept1").style.display = "none"}

document.getElementById("koncept2").addEventListener("mouseleave", gemkoncept) ;

function gemkoncept(){
    document.getElementById("koncept2").style.display = "none"
    document.getElementById("koncept1").style.display = "flex"}


document.getElementById("kurv").addEventListener("mouseenter", vis) ;

function vis(){
    document.getElementById("kurv").style.display = "none" ;
    document.getElementById("rødkurv").style.display = "flex" ;}

document.getElementById("rødkurv").addEventListener("mouseleave", gem) ;

function gem(){
    
    document.getElementById("rødkurv").style.display = "none" ;
    document.getElementById("kurv").style.display = "flex" ;}

