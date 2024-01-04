const form = document.getElementById('formAtiv');
const imgAprovado = '<img src="assets/aprovado.png"/>';
const imgReprovado = '<img src="assets/reprovado.png"/>';
const atividades = [];
const notas = [];
const spanAprovado = `<span class = "resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class = "resultado reprovado">Reprovado</span>`;
 let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTab();
    atualizaMediaFinal();
})
function adcionaLinha(){
    const inputNomeAtividade = document.getElementById('nomeAtiv');
    const inputNotaAtividade = document.getElementById('notaAtiv');
    
    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida.`);
    }else{
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}
function atualizaTab(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
   const mediaFinal = calculaMediaFinal();

   document.getElementById('mediaDasNotas').innerHTML = mediaFinal;
   document.getElementById('resultFinal').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
}
function calculaMediaFinal(){
     let somaNotas = 0;
     for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }
return somaNotas / notas.length;
}
