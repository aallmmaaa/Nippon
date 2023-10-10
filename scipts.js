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



document.getElementById("filterknap1").addEventListener("click", valgt) ;

function valgt() {
    document.getElementById("filterknap1").style.backgroundColor = "#D51B2F" ;
    document.getElementById("filterknap1").style.borderColor = "#D51B2F" ;
    document.getElementById("filterknap1").style.color = "#F3F1ED" ;
    document.getElementById("filterknap2").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap2").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap2").style.color = "#2f2418" ;
    document.getElementById("filterknap3").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap3").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap3").style.color = "#2f2418" ;
    document.getElementById("filterknap4").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap4").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap4").style.color = "#2f2418" ;
    document.getElementById("filterknap5").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap5").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap5").style.color = "#2f2418" ;}

document.getElementById("filterknap2").addEventListener("click", valgt2) ;

function valgt2() {
    document.getElementById("filterknap2").style.backgroundColor = "#D51B2F" ;
    document.getElementById("filterknap2").style.borderColor = "#D51B2F" ;
    document.getElementById("filterknap2").style.color = "#F3F1ED" ;
    document.getElementById("filterknap1").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap1").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap1").style.color = "#2f2418" ;
    document.getElementById("filterknap3").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap3").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap3").style.color = "#2f2418" ;
    document.getElementById("filterknap4").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap4").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap4").style.color = "#2f2418" ;
    document.getElementById("filterknap5").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap5").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap5").style.color = "#2f2418" ;}

document.getElementById("filterknap3").addEventListener("click", valgt3) ;

function valgt3() {
    document.getElementById("filterknap3").style.backgroundColor = "#D51B2F" ;
    document.getElementById("filterknap3").style.borderColor = "#D51B2F" ;
    document.getElementById("filterknap3").style.color = "#F3F1ED" ;
    document.getElementById("filterknap1").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap1").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap1").style.color = "#2f2418" ;
    document.getElementById("filterknap2").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap2").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap2").style.color = "#2f2418" ;
    document.getElementById("filterknap4").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap4").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap4").style.color = "#2f2418" ;
    document.getElementById("filterknap5").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap5").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap5").style.color = "#2f2418" ;}

document.getElementById("filterknap4").addEventListener("click", valgt4) ;

function valgt4() {
    document.getElementById("filterknap4").style.backgroundColor = "#D51B2F" ;
    document.getElementById("filterknap4").style.borderColor = "#D51B2F" ;
    document.getElementById("filterknap4").style.color = "#F3F1ED" ;
    document.getElementById("filterknap1").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap1").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap1").style.color = "#2f2418" ;
    document.getElementById("filterknap2").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap2").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap2").style.color = "#2f2418" ;
    document.getElementById("filterknap3").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap3").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap3").style.color = "#2f2418" ;
    document.getElementById("filterknap5").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap5").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap5").style.color = "#2f2418" ;}

document.getElementById("filterknap5").addEventListener("click", valgt5) ;

function valgt5() {
    document.getElementById("filterknap5").style.backgroundColor = "#D51B2F" ;
    document.getElementById("filterknap5").style.borderColor = "#D51B2F" ;
    document.getElementById("filterknap5").style.color = "#F3F1ED" ;
    document.getElementById("filterknap1").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap1").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap1").style.color = "#2f2418" ;
    document.getElementById("filterknap2").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap2").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap2").style.color = "#2f2418" ;
    document.getElementById("filterknap3").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap3").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap3").style.color = "#2f2418" ;
    document.getElementById("filterknap4").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap4").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap4").style.color = "#2f2418" ;}

document.getElementById("filterknap6").addEventListener("click", valgt6) ;

function valgt6() {
    document.getElementById("filterknap6").style.backgroundColor = "#D51B2F" ;
    document.getElementById("filterknap6").style.borderColor = "#D51B2F" ;
    document.getElementById("filterknap6").style.color = "#F3F1ED" ;
    document.getElementById("filterknap7").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap7").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap7").style.color = "#2f2418" ;
    document.getElementById("filterknap8").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap8").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap8").style.color = "#2f2418" ;
    document.getElementById("filterknap9").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap9").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap9").style.color = "#2f2418" ;}

document.getElementById("filterknap7").addEventListener("click", valgt7) ;

function valgt7() {
    document.getElementById("filterknap7").style.backgroundColor = "#D51B2F" ;
    document.getElementById("filterknap7").style.borderColor = "#D51B2F" ;
    document.getElementById("filterknap7").style.color = "#F3F1ED" ;
    document.getElementById("filterknap6").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap6").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap6").style.color = "#2f2418" ;
    document.getElementById("filterknap8").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap8").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap8").style.color = "#2f2418" ;
    document.getElementById("filterknap9").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap9").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap9").style.color = "#2f2418" ;}

document.getElementById("filterknap8").addEventListener("click", valgt8) ;

function valgt8() {
    document.getElementById("filterknap8").style.backgroundColor = "#D51B2F" ;
    document.getElementById("filterknap8").style.borderColor = "#D51B2F" ;
    document.getElementById("filterknap8").style.color = "#F3F1ED" ;
    document.getElementById("filterknap7").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap7").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap7").style.color = "#2f2418" ;
    document.getElementById("filterknap6").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap6").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap6").style.color = "#2f2418" ;
    document.getElementById("filterknap9").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap9").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap9").style.color = "#2f2418" ;}

document.getElementById("filterknap9").addEventListener("click", valgt9) ;

function valgt9() {
    document.getElementById("filterknap9").style.backgroundColor = "#D51B2F" ;
    document.getElementById("filterknap9").style.borderColor = "#D51B2F" ;
    document.getElementById("filterknap9").style.color = "#F3F1ED" ;
    document.getElementById("filterknap7").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap7").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap7").style.color = "#2f2418" ;
    document.getElementById("filterknap8").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap8").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap8").style.color = "#2f2418" ;
    document.getElementById("filterknap6").style.backgroundColor = "#F3F1ED" ;
    document.getElementById("filterknap6").style.borderColor = "#2f2418" ;
    document.getElementById("filterknap6").style.color = "#2f2418" ;}

document.addEventListener("DOMContentLoaded", () => {
  const log = console.log,
    array = [src="billeder/forsideimg1.jpg", src="billeder/forsideimg2.jpg", src="billeder/forsideimg4.jpg", src="billeder/forsideimg5.jpg",src="billeder/forsideimg6.jpg",src="billeder/forsideimg7.jpg"],
    random = Math.floor(Math.random() * array.length),
    target = document.getElementById("target");
  target.src = `${array[random]}`;
  log(target);
});


/*Funktion til forsendelse/leveringsadresse*/
function checkNyForsendelse(val){
    const visNytNavn = document.getElementById("nytnavn");

    if(val==1){
        visNytNavn.style.display="none";

    } if(val==2) {
        visNytNavn.style.display="block"
    }

}

/*Funktion til betalingsmetode*/
function checkMobilepay(val){
    const visMobilepayInfo = document.getElementById("mobilepayinfo");
    const visKortInfo = document.getElementById("kortinfo");

    if(val==1){
        visMobilepayInfo.style.display="none";
        visKortInfo.style.display="block"

    } if(val==2) {
        visMobilepayInfo.style.display="block";
        visKortInfo.style.display="none"
    }
}
