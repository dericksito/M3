ejecutarSumar=function(){
    let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    console.log(valor1+"+"+valor2);
   let resultadoSuma=sumar(valor1,valor2);
   console.log(resultadoSuma);
}

ejecutarRestar=function(){
    let valor1=recuperarFloat("txtValor1");
    let valor2=recuperarFloat("txtValor2");
    console.log(valor1+"-"+valor2);
    let resultadoResta=restar(valor1,valor2);
    console.log(resultadoResta);
  
}

sumar=(n1,n2)=>{
let resultado=n1+n2;

return resultado;
}

restar=(n1,n2)=>{
    let resultado=n1-n2;
    return resultado;
}

