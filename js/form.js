/**
 * Tratamento do button de formulário, criando um evento para adicionar mais uma
 * linha na tabela acima.
 */
var button = document.querySelector("#adicionar-paciente");

// Adicionando um evento ao botão (com função anônima)
button.addEventListener("click", function (event){

    // Retirando o comportamento padrão do button (Limpar o form e enviar)
    event.preventDefault();

    // Capturando formulário
    let form = document.querySelector("#form-adicionar");

    // Recebendo o objeto paciente
    let paciente = receberPaciente(form);

    // Recebendo a Tr criada
    let trPaciente = criarTr(paciente);
    var erro = validaPaciente(paciente);

    // Validação do paciente!!!
    if(!validaPaciente(paciente)) {
        var erros = validaPaciente(paciente);

        if (erros.length > 0){
            
            exibeMensagemErro(erros);

            return;
        }

    }

    // Capturando o tbody onde todos os tr's ficam e adicionando a tr na tabela
    // Adicionando o paciente na tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(trPaciente);

    // Limpando os campos dos inputs após o submit
    form.reset();
});

// Function que retorna as informações do paciente
function receberPaciente(form) {

    // Criando um objeto paciente que terá como atributos cada campo do form
    let paciente = {
        "nome"    : form.nome.value,
        "massa"   : form.massa.value,
        "altura"  : form.altura.value,
        "gordura" : form.gordura.value,
        "imc"     : calcularIMC(form.massa.value, form.altura.value)
    }

    return paciente;
}

// Function que cria o elemento Tr recebendo o objeto paciente
function criarTr (paciente) {
    
    // Criando novos elementos no DOM
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // Adicionando os td's criados na tr paciente
    pacienteTr.appendChild(criarTd(paciente.nome,     "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.massa,    "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura,   "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura,  "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc,      "info-imc"));

    // Retornando a Tr
    return pacienteTr;
}

// Function que cria o elemento Td recebendo o um dado do paciente ("paciente.imc") e classe que será adicionada a td
function criarTd (dado, classe) {

    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

// Function para fazer as validações dos novos pacientes que forem criados
function validaPaciente(paciente) {

    // Criando um array de erros
    var erros = [];

     // Adicionando uma String ao array caso for true
    if(!validaPeso(paciente.massa)) erros.push("Peso inválido");

    // Adicionando uma String ao array caso for true
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

    // Retornando o array na função
    return erros;
}

// Fuction de exibição de mensagens de erro
function exibeMensagemErro(erros){

    // Pegando a ul do HTML
    let ul = document.querySelector("#mensagem-erro");

    erros.forEach(function (erro){

        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

    return null;
}