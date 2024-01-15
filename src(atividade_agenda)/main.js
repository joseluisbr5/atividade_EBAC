document.getElementById('Agend').addEventListener('submit', function (e) {
    e.preventDefault();

    var inputNomeContato = document.getElementById('txtname').value;
    var inputNumContato = document.getElementById('txtnum').value;

    var tbody = document.querySelector('#tableStyle tbody');
    var tr = document.createElement('tr');

    var tdNome = document.createElement('td');
    tdNome.textContent = inputNomeContato;
    tr.appendChild(tdNome);

    var tdNumero = document.createElement('td');
    tdNumero.textContent = inputNumContato;
    tr.appendChild(tdNumero);

    tbody.appendChild(tr);

    // Limpa os campos de entrada
    document.getElementById('txtname').value = '';
    document.getElementById('txtnum').value = '';
    
    const linhasTabela = document.querySelectorAll('#tableStyle tbody tr');
    linhasTabela.forEach((linha, index) => {
        linha.className = index % 2 === 0 ? 'even' : 'odd';
});

   
    });
    document.getElementById('row').remove()
