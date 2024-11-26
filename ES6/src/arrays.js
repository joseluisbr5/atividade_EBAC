// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carla', nota: 6 },
    { nome: 'Diego', nota: 4 },
    { nome: 'Ester', nota: 7 }
];

// Função que retorna apenas alunos com nota maior ou igual a 6
function filtrarAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamando a função e exibindo os alunos aprovados
const aprovados = filtrarAprovados(alunos);
console.log('Alunos aprovados:', aprovados);
