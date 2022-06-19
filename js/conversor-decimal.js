var botaoCalc = document.querySelector("#botao-calc"); //trazendo o botao converter para o javascript
botaoCalc.addEventListener("click", converte); //adicionando escuta ao botao


function converte(entrada) {
    entrada = conversor.value; //capturando o valor inserido no campo decimal
    decimal = parseFloat(entrada); //converter o texto inserido para float
    console.log(decimal);

    var binario = decimal.toString(2); //conversão de bases
    var octal = decimal.toString(8);
    var hexadecimal = decimal.toString(16);

    var tdBinario = document.querySelector("#dec"); //selecionando a coluna decmal no javascript
    tdBinario.textContent = binario; // inserindo o valor convertido na coluna

    var tdOctal = document.querySelector("#oct");
    tdOctal.textContent = octal;

    var tdHexadecimal = document.querySelector("#hex");
    tdHexadecimal.textContent = hexadecimal;


   // var decimal = parseInt(prompt("Entre com o valor decimal"))
    
   /* document.write("O número: " + decimal.toString(10) + " Corresponde a: <br>");
    document.write("Binário: " + decimal.toString(2) + "<br>");
    document.write("Octal: " + decimal.toString(8) + "<br>");
    document.write("Hexadecimal: " + decimal.toString(16) + "<br>");
     */
}

    

