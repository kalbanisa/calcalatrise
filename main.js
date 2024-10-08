const display = document.getElementById("display");
let =document.querySelector("h2")
alert('mon calculatrise')
function apprendToDisplay(input){
display.value += input;
}
function clearDisplay(){
display.value = "";
}
function calculate() {
try{
    display.value = eval(display.value);
}
catch (error){
display.value = "Erreur de saisir";
};
 

}