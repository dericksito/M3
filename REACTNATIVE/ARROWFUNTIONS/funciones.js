ejecutarSumar=()=>{
   /* let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    console.log(valor1+"+"+valor2);
   let resultadoSuma=sumar(valor1,valor2);
   console.log(resultadoSuma);*/
   ejecutarOperacion(sumar);
}



ejecutarOperacion=(operar)=>{
    let valor1=recuperarFloat("txtValor1");
    let valor2=recuperarFloat("txtValor2");
    
    let resultado;
    resultado=operar(valor1,valor2);
    console.log(resultado);
  
}

sumar=(n1,n2)=>{
let resultado=n1+n2;

return resultado;
}

restar=(n1,n2)=>{
    let resultado=n1-n2;
    return resultado;
}

imprimir=()=>{

    console.log("estoy imprimiendo....");
}

saludar=()=>{
    alert("APRENDIENDO PROGRAMACION FUNCIONAL");
}

ejecutar=(fn)=>{
    console.log("estoy ejecutando funciones...")
    fn();
}

testEjecutar=()=>{
ejecutar(imprimir);
ejecutar(saludar);
ejecutar(()=>{
    alert("APRENDIENDO PROGRAMACION FUNCIONAL");
});
  
}


