function onScreennumbers(button){
const currentButton=button.innerHTML;
console.log(currentButton);

const screen=document.getElementById('ScreenContainer'); // It's a collection not a value
const currentScreenValue=document.createElement("p");
currentScreenValue.innerHTML=currentButton;
screen.appendChild(currentScreenValue);

}



function acButton(){
    
}