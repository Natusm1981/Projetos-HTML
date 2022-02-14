let total = 0;
let zerarDisplay = false;
let result;
let operation ='';
let numDisplay = 0;

function encurtar13()
{
    total = total.toString().substring(0,13)
    console.log(total)

}

function insert(num){
    
    if(zerarDisplay)
        {
            document.getElementById('resultado').innerHTML = '0';
            zerarDisplay = false;
        }
    result = document.getElementById('resultado').innerHTML;

    if(result.length < 13){
        switch(num)
        {
            case '0':
                if(result[0] !== '0')
                {
                    result = result + num
                }    
            break;

            case '.':
                if(result.indexOf('.') == -1){  //se não tiver .  na string, adiciona ponto no final        
                    result = result + num
                }              
            break;

            default:
                result = result + num;
                if(result.length > 1 && result[0] === '0'){
                    result = result.substring(1)
                }
            break;
        }
        
    }
    document.getElementById('resultado').innerHTML = result;
    numDisplay = parseFloat(document.getElementById('resultado').innerHTML);
}

function somar() {
    if (!zerarDisplay){
        zerarDisplay = true;
        numDisplay = parseFloat(document.getElementById('resultado').innerHTML);    
        if(operation !== ''){
            total += numDisplay;
            operation = ''
        }else{
            total = numDisplay;
        }
    }
    operation = '+';
}

function subtrair() {
    if (!zerarDisplay){
        zerarDisplay = true;
        numDisplay = parseFloat(document.getElementById('resultado').innerHTML);    
        if(operation !== ''){
            total -= numDisplay;
            operation = ''
        }else{
            total = numDisplay;
        }
    }
    operation = '-';
}

function multiplicar() {
    if (!zerarDisplay){
        zerarDisplay = true;
        numDisplay = parseFloat(document.getElementById('resultado').innerHTML);    
        if(operation !== ''){
            total *= numDisplay;
            operation = ''
        }else{
            total = numDisplay;
        }
    }
    operation = '*';
}

function dividir() {
    if (!zerarDisplay){
        zerarDisplay = true;
        numDisplay = parseFloat(document.getElementById('resultado').innerHTML);    
        if(operation !== ''){
            total /= numDisplay;
            operation = ''
        }else{
            total = numDisplay;
        }
    }
    operation = '/';
}

function limpar() {
    document.getElementById('resultado').innerHTML = 0;
    total = 0;
    zerarDisplay = 0;
    result = '';
    operation ='';
}

function corrigir() {
    if(result.length > 1)
        result = result.substring(0, result.length - 1)
    else{
        result = '0'
    }
    document.getElementById('resultado').innerHTML = result;  
}

function resultado(){
  
    switch (operation){
        case '+':
        total = total + numDisplay
        break;

        case '-':
        total = total - numDisplay      
        break;

        case '*':
        total = total * numDisplay
        break;

        case '/':
        total = total / numDisplay
        
        
        break;

    }

    if(total.toString().length > 13)
        encurtar13(total);
        //console.log("entrou encurtar");
    
    document.getElementById('resultado').innerHTML = total.toString();

    operation = ''
    
}
