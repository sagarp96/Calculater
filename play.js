
let currentDisplaynumber=''
let frst_Num=[];
let scnd_Num=[];
let OPR_Sign=[];
let operandArray=[];

// console.log('currentDisplaynumber:', currentDisplaynumber);
// console.log('frst_Num:', frst_Num);
// console.log('scnd_Num:', scnd_Num);
// console.log('OPR_Sign:', OPR_Sign);
// console.log('operandArray:', operandArray);

function getClickednum(numButton){
    let currentDisplaynumber=numButton.innerHTML;
    storeNum(currentDisplaynumber);
    Display(numButton);
}

function storeNum(Num){
    if (frst_Num.length==null && operandArray.length==null){
        frst_Num.push(Num);
    }
    else if( operandArray.length==1 && frst_Num.length!=null){
        scnd_Num.push(Num);
        clearDisplay();
    }
    else {
        frst_Num=scnd_Num;
    }
}
    function Display(displayNum){
        //ek number ahyega aur hum usse display pe laadege 
        const screen=document.getElementById('ScreenContainer');
        const currentScreenValue=document.createElement("p");
        currentScreenValue.classList.add('Display')
        currentScreenValue.innerHTML+=displayNum;
        screen.appendChild(currentScreenValue);
    }

function getOperands(numButton){
    const operandBTN=numButton.innerHTML;
    operandArray.length.push(operandBTN);
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
    else {
        operandArray.push(OPR_Sign);
        operandArray[0]=OPR_Sign;
        operandArray.shift();
        Evaluate(OPR_Sign,frst_Num,scnd_Num);// evaluates and displayes the result 
    }
}

function Evaluate(operand, firstNumber, SecondNumber){
    parseInt(firstNumber);
    parseInt(SecondNumber);
    switch(operand) {
        case '+':
            function Plus(){
                finalResult=firstNumber+SecondNumber;
            };
            break;
        case '-':
            function Minus(){
                finalResult=firstNumber-SecondNumber;

            };
            break;
        case '×':
            function Multiply(){
                finalResult=firstNumber*SecondNumber;

            };
            break;
        case '÷':
            function Divide(){
                finalResult=firstNumber/SecondNumber;
            };
            break;
    }
    Display(finalResult);
}
    
function isEqual(oprand, firstNumber, secondNumber){
    Evaluate(oprand,firstNumber,secondNumber);
    firstNumber=[];
    secondNumber=[];
    operation=[];
}
