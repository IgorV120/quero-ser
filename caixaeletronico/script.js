var saque="";
var l=0;


function addSaque(valor){    
            if(valor!='x' && valor !='entra' && valor!='reiniciar'){
                l=0;
                saque += valor;
                document.querySelector('p').textContent = "R$ " + saque+"\n";
            }
            else if(valor=='x'){
                l=0;
                saque = saque.substring(0, saque.length-1);
                document.querySelector('p').textContent = "R$ " + saque+"\n";
        
            }
            else if(valor=='entra'){
                if(l==0){
                let resp;
                resp=parseInt(saque);
                verifValor(resp);
                l++
                }
                
                          
           }
           else if(valor=='reiniciar'){
                l=0;
               saque ="";
               document.querySelector('p').textContent = "R$ " + saque+"\n";
        
           }
           
            
        }
    
  

function verifValor(valor){
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    while(valor>=100){
    valor = calculoCedula(valor,100);
    i++;
}
 while(valor>=50){
    valor = calculoCedula(valor,50);
    j++;
    
}
while(valor>=20){
     valor = calculoCedula(valor,20); 
     k++;
    }
while(valor>=10){
     valor = calculoCedula(valor,10);
     l++;
    }
    msgTela(i,j,k,l);
            
}

function calculoCedula(cedula,valor){
    cedula=cedula-valor;
    return cedula;
}
function msgTela(v1,v2,v3,v4){
    let msg="<br /><br /> NOTAS: <br />"+v1+" de R$ 100,<br />"+v2+" de R$50,<br />"+ v3+" de R$20,<br />"+ v4+" de R$10.";
    document.querySelector('p').innerHTML += msg;
    

}