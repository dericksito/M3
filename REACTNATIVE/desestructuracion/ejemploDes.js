recuperar=()=>{
let frutas=["pera","manzana","sandia"];
frutas.push("bananas");
return frutas;
}

testRecuperar=()=>{
let misFrutas=recuperar();
let frutaPrimera=misFrutas[0];
let Otrafruta=misFrutas[1];

console.log("1>>>"+frutaPrimera);
console.log("2>>>"+Otrafruta);

}

testRecuperarDes=()=>{
    let [frutaPrimera,frutaSegunda,frutaTercera]=recuperar();
    console.log("1>>>>>"+frutaPrimera);
    console.log("2>>>>>"+frutaSegunda);
    console.log("3>>>>>"+frutaTercera);
}