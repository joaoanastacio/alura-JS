/**
 * A variável título está recebendo o valor encontrado pelo querySelector e
 * logo em seguida o textContent altera o text existente por um novo texto "Aparecida nutrição"
 */
var titulo = document.querySelector(".titulos").textContent = "Aparecida Nutricionista";
    
/**
 * Alterando o valor do IMC na tabela de forma dinâmica
 */
var paciente = document.querySelectorAll(".paciente");

for(i = 0; i < paciente.length; i++) {
    let massa = paciente[i].querySelector(".info-peso").textContent;
    let altura = paciente[i].querySelector(".info-altura").textContent;

    // valor_imc recebe a function que faz o calculo e retorna o valor do imc
    let valor_imc = paciente[i].querySelector(".info-imc").textContent = 
        calcularIMC(parseFloat(massa),parseFloat(altura)).toString();
    
    // Validação para testar a utilização da propriedade JS .style (má prática)
    let massaValida = validaPeso(massa);
    let alturaValida = validaPeso(altura);

    if (!massaValida) {
        massaValida = false;
        massa.textContent = "Peso inválido";

        // Chamando a classe criada no CSS para estilizar o elemento do DOM
        paciente[i].classList.add("altura-massa-invalido");
    }

    if (!alturaValida) {
        alturaValida = false;
        altura.textContent = "Altura inválida";

        // Chamando a classe criada no CSS para estilizar o elemento do DOM
        paciente[i].classList.add("altura-massa-invalido");
    }

    // Fuction que verifica o peso e retorna um true ou false
    function validaPeso(massa) {
        if (massa >= 0 && massa < 255) {
            return true;
        } else {
            return false;
        }
    }

    // Function que verifica a altura e retorna true ou false
    function validaAltura(altura) {
        if(altura >= 0 && altura <= 3.00) {
            return true;
        } else {
            return false;
        }
    }

    /**
    * Criando uma fuction para calcular o valor do IMC de forma dinâmica
    */
    function calcularIMC(massa, altura) {
        let imc;
        imc = (massa / (altura * altura));

        return imc.toFixed(2);
    }
}

