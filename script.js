let currentDisplaynumber=''
let frst_Num=[];
let scnd_Num=[];
let OPR_Sign=[];
let operandArray=[];
let finalResult='';
function getClickednum(button){
    let currentDisplaynumber=button.innerHTML;
    storeNum(currentDisplaynumber);
    Display(currentDisplaynumber);
}

function storeNum(Num){
    if (operandArray.length == 0 && scnd_Num.length==0){
        frst_Num.push(Num);
        console.log('frst_Num:', frst_Num);
    }

    else if (operandArray.length == 1 && scnd_Num.length==0) {
        scnd_Num.push(Num);
        clearDisplay();
        console.log('secondNum', scnd_Num);
    }
    else if(operandArray.length == 1 && scnd_Num.length>=1 ){
        scnd_Num.push(Num);
        console.log('secondNum', scnd_Num);
    }

}
    function Display(displayNum){
        const screen = document.getElementById('ScreenContainer');
        
        // Check if there's already a display element
        let displayElement = screen.querySelector('.DisplayContainer');
        
        // If no display container exists, create one
        if (!displayElement) {
            displayElement = document.createElement("div");
            displayElement.classList.add('DisplayContainer');
            screen.appendChild(displayElement);
        }
        
        // Update the display content by appending to the existing text
        displayElement.textContent += displayNum;
    }

function getOperands(button){
    const operandBTN=button.innerHTML;
    operandArray.push(operandBTN);
    if (operandArray.length==1){
        switch(operandBTN) {
            case '+':
                OPR_Sign='+';
                break;
            case '-':
                OPR_Sign='-';
                break;
            case '×':
                OPR_Sign = '×';
                break;
            case '÷':
                OPR_Sign = '÷';
                break;
        }
    
    }
    else if (operandArray[0]==operandArray[1] && scnd_Num.length==0) {
        OPR_Sign=operandArray[0];
        operandArray.shift();
        console.log(operandArray);
        frst_Num.forEach(element => {scnd_Num.push(element)
        });

        Evaluate(OPR_Sign,frst_Num,scnd_Num);// evaluates and displayes the result 
        clearDisplay();
        Display(finalResult);
        frst_Num=finalResult.toString().split('').map(Number);
        scnd_Num=[];
    }
    else if (operandArray[0]==operandArray[1] && scnd_Num.length>=1){
        OPR_Sign=operandArray[0];
        Evaluate(OPR_Sign,frst_Num,scnd_Num);
        clearDisplay();
        Display(finalResult);
        operandArray.shift(); 
        OPR_Sign=operandArray[0];
        frst_Num=finalResult.toString().split('').map(Number);
        scnd_Num=[];
    }
    else {
        OPR_Sign=operandArray[0];
        Evaluate(OPR_Sign,frst_Num,scnd_Num);
        clearDisplay();
        Display(finalResult);
        operandArray.shift(); 
        OPR_Sign=operandArray[0];
        frst_Num=finalResult.toString().split('').map(Number);
        scnd_Num=[];
    }
}

function Evaluate(OPR_Sign,frst_Num,scnd_Num){
    let Eval_first= Number(frst_Num.join(''));
    let Eval_second=Number(scnd_Num.join(''));
    switch(OPR_Sign){
        case '+': 
        finalResult=Eval_first+Eval_second;
        break;
    case '-':
            finalResult=Eval_first-Eval_second;
        break;
    case '×':
            finalResult=Eval_first*Eval_second;


        break;
    case '÷':
            finalResult=Eval_first/Eval_second;
        break;

    }         
    }
   

    
function isEqual(){
    Evaluate(OPR_Sign,frst_Num,scnd_Num);
    clearDisplay();
    Display(finalResult); 
    finalResult='';
}

function AC_button(){
    clearDisplay();
    frst_Num=[];
    scnd_Num=[];
    OPR_Sign=[];
    operandArray=[];


}
function clearDisplay(){
    const screen=document.getElementById('ScreenContainer');
    screen.innerHTML = ''; // This removes all children elements
}


