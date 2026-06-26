const empresas = [];

const VALOR_TONELADA = 220;

function calcularPremiacao(valorReceber){

    let percentual = 0;

    if(valorReceber <= 1000){
        percentual = 0;
    }
    else if(valorReceber <= 10000){
        percentual = 0.08;
    }
    else if(valorReceber <= 15000){
        percentual = 0.10;
    }
    else if(valorReceber <= 25000){
        percentual = 0.15;
    }
    else{
        percentual = 0.20;
    }

    return percentual;

}

function atualizarTabela(){

    const tabela = document.getElementById("tabela");

    tabela.innerHTML = "";

    for(let empresa of empresas){

        tabela.innerHTML += `

        <tr>

            <td>${empresa.nome}</td>

            <td>${empresa.quantidade}</td>

            <td>R$ ${empresa.valorReceber.toFixed(2)}</td>

            <td>${empresa.premioTexto}</td>

            <td>R$ ${empresa.valorFinal.toFixed(2)}</td>

        </tr>

        `;

    }

}

document.getElementById("formEmpresa").addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("empresa").value;

    const quantidade = Number(document.getElementById("quantidade").value);

    const valorReceber = quantidade * VALOR_TONELADA;

    const percentual = calcularPremiacao(valorReceber);

    let premio = valorReceber * percentual;

    let premioTexto = "";

    if(percentual == 0){
        premioTexto = "Abaixo da Meta";
    }
    else{
        premioTexto = "R$ " + premio.toFixed(2);
    }

    const valorFinal = valorReceber + premio;

    empresas.push({

        nome,
        quantidade,
        valorReceber,
        premioTexto,
        valorFinal

    });

    atualizarTabela();

    this.reset();

});