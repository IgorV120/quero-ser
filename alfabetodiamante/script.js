var alfabetoBtn = document.getElementsByClassName('botoes');

function passagemString(letra){
document.getElementById('campotexto').value=letra;
}

function enviarString(){
document.getElementById('diamante').innerHTML="";
let ltrPassada = document.getElementById('campotexto').value;
ltrPassada = ltrPassada.toUpperCase();
ltrPassada = ltrPassada.substring(0,1)
  for(let i=0;i<alfabetoBtn.length;i++){
    if(ltrPassada==alfabetoBtn[i].innerHTML){
      console.log(ltrPassada+ " = "+i);
      criarDiamante(i);
    }
    
  }

}

function checarLetra(letra, espaco){
  if(letra=="A"){
    document.getElementById('diamante').innerHTML+= letra + " <br/>";
  }else{
    document.getElementById('diamante').innerHTML+= letra + espaco + espaco + letra + " <br/>";
  }
}

function criarDiamante(index){
  let espaco="&nbsp";
  for(let i=0;i<=index;i++){
    espaco += "&nbsp"; 
    checarLetra(alfabetoBtn[i].innerHTML, espaco); 
          
  }
  for(let i=index-1;i>=0;i--){
    espaco = espaco.substring(0, espaco.length-5);
    checarLetra(alfabetoBtn[i].innerHTML, espaco); 
    
  }
      
  }

