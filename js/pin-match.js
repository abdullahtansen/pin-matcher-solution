function getPin(){
    const pin = generatePin();
    const pingString = pin + '';
    if(pingString.length === 4){
       return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const pin = Math.round(Math.random()*10000);
    return pin;
}

document.getElementById('generate-pin').addEventListener('click',function(){
   const pin = generatePin();
   const displayField = document.getElementById('display-show-pin');
   displayField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const numbers = event.target.innerText;
    const typedNumberInput = document.getElementById('typed-numbers');
    const previousTypedNumbers = typedNumberInput.value;
    if(isNaN(numbers)){
        if(numbers === 'C'){
            typedNumberInput.value = '';
        }else if(numbers === '<'){
            const digit = previousTypedNumbers.split('');
            digit.pop();
            const remainingDigits = digit.join('');
            typedNumberInput.value = remainingDigits;
        }
    }
    else{
        const newTypedNumbers =  previousTypedNumbers + numbers;
        typedNumberInput.value = newTypedNumbers;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayField = document.getElementById('display-show-pin');
    const displayPin =  displayField.value;

    const typedNumber = document.getElementById('typed-numbers');
    const typedNumbers = typedNumber.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailedMessage = document.getElementById('pin-failed');

    if(displayPin === typedNumbers){
        pinSuccessMessage.style.display = 'block'; 
        pinFailedMessage.style.display = 'none';
    }else{
        pinFailedMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none'; 
    }
})