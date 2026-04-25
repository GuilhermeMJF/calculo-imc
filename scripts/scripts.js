const form = document.querySelector("form");
const resp1 = document.querySelector("#outIMC");
const resp2 = document.querySelector("#outCategoria");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const peso = Number(document.getElementById("inPeso").value);
    const altura = Number(document.getElementById("inAltura").value);

    const imc = peso / (altura * altura);

    resp1.innerText = `Seu IMC é ${imc.toFixed(2)}`;   
    
    let situacao = "";
    let cor = "";

    if (imc < 18.5){
        situacao = "Abaixo do peso";
        cor = "orange"
    }else if (imc >= 18.5 && imc < 25){
        situacao = "Peso normal";
        cor = "green";
    }else if(imc >=25 && imc < 30){
        situacao = "Sobrepeso";
        cor = "#d4a017";
    } else{
        situacao = "Obesidade";
        cor = "red";
    }

    resp2.innerText = `Classificação: ${situacao}`;
    resp2.style.color = cor;
});