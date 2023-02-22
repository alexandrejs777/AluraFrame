var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tableBody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){

    event.preventDefault();
    
    var tableRow = document.createElement('tr');

    campos.forEach(function(campo) {
        
        var tableData = document.createElement('td');
        tableData.textContent = campo.value;
        tableRow.appendChild(tableData);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    
    tableRow.appendChild(tdVolume);

    tableBody.appendChild(tableRow);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();

});