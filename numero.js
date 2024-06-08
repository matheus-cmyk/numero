function normalizar(telefone) { 

    let limpar = telefone.replace(/\D/g, '') 


    if (limpar.length !== 12) {
        throw new Error('Número de telefone inválido. Deve conter exatamente 12 dígitos.')
    }


    let formatar = `(${limpar.slice(0, 3)}) ${limpar.slice(3, 8)}-${limpar.slice(8)}`;
    return formatar; 

}

    function normalizar() {
        const input = document.getElementById('telefone').value;
        const result = normalizar(input);
        document.getElementById('result').innerText = result; 
    }

console.log(normalizar("123-22456-7890"))   // (123) 22456-7890
console.log(normalizar("(123) 22456 7890")) // (123) 22456-7890
console.log(normalizar("123.22456.7890"))   // (123) 22456-7890
console.log(normalizar("+1 (123) 22456-7890")) // (123) 22456-7890
