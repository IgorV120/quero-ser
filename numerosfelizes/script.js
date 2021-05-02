function calcValor(){
    document.getElementById('resultado').innerHTML="";
    let valorResult = document.getElementById('valor').value;
    if(valorResult==""){
        alert("Insira um valor!");
    }else{
        valorResult=parseInt(valorResult);
        percorreString(valorResult,valorResult);
        }     
    }

function percorreString(entrada,valor){
    let valorResult=valor.toString();
    let resultadoFinal=0;
    for(let i=0; i<valorResult.length; i++){
        valor=parseInt(valorResult[i]);
        if(valorResult.length-i==1){
            document.getElementById('resultado').innerHTML += valor + "² = ";
            resultadoFinal+=(valor**2);
            document.getElementById('resultado').innerHTML += resultadoFinal + "<br />";
        }else{
            document.getElementById('resultado').innerHTML += valor + "² + ";
            resultadoFinal+=(valor**2);
            }
        }
        
        avaliaResultado(entrada, resultadoFinal)
    }

    function avaliaResultado(entrada, valor){
        if(valor==1){
            document.getElementById('resultado').innerHTML += "É um número feliz";
        }else if(valor==entrada || valor == 4){
            document.getElementById('resultado').innerHTML += "Não é um número feliz";
        }
        else{
            percorreString(entrada,valor);
        }
    }

    

