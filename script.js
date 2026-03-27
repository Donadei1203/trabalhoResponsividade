// function transformar(dol, real) {
//     console.log('funcionando');
//     const dolarProduto = parseFloat(document.getElementById(dol).innerText);
//     const realProduto = document.getElementById(real);

//     fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
//     .then(resposta => {
//         return resposta.json()
//     }).then(economia => {


//         const valorDolar = parseFloat(economia.USDBRL.high, 2);

//          realProduto.innerText = "R$" + (valorDolar * dolarProduto).toFixed(2);
//     })

//     document.getElementById(dol).innerText = "$ 35.00"
// }

let valorFrete = 0;

function calcularTotal() {
    const realProduto = document.getElementsByClassName('real');
    const total = document.getElementById('total');

    let soma = 0;

    for (let i = 0; i < realProduto.length; i++) {
        soma += parseFloat(realProduto[i].innerHTML);
    }

    soma += valorFrete;

    total.innerHTML = soma.toFixed(2);
}

function transformar1() {
    const dolarProduto = document.getElementsByClassName('dolar');
    const realProduto = document.getElementsByClassName('real')

    console.log(realProduto[0].innerHTML);
    console.log(dolarProduto[0].innerHTML);

    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
        .then(resposta => {
            return resposta.json()
        }).then(economia => {
            const valorDolar = parseFloat(economia.USDBRL.high);
            console.log(valorDolar)
           

            for (let i = 0; i < dolarProduto.length; i++) {
                const numero = parseFloat(dolarProduto[i].innerHTML)
                console.log(numero)
                realProduto[i].innerHTML = "R$" + (numero * valorDolar).toFixed(2);
 
            }
        })
}

function transformar2() {
    const dolarProduto = document.getElementsByClassName('dolar');
    const realProduto = document.getElementsByClassName('real')

    console.log(realProduto[0].innerHTML);
    console.log(dolarProduto[0].innerHTML);

    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
        .then(resposta => {
            return resposta.json()
        }).then(economia => {
            const valorDolar = parseFloat(economia.USDBRL.high);
            console.log(valorDolar)
           

            for (let i = 0; i < dolarProduto.length; i++) {
                 const numero = parseFloat(dolarProduto[i].innerHTML)
                realProduto[i].innerHTML = (numero * valorDolar).toFixed(2);
 
            }
            calcularTotal();
        })
}

function procuraCEP() {
  const cep = document.getElementById("cep").value;
  
  const valorCep = document.getElementById("valor");

  console.log(cep);

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resposta) => {
      return resposta.json();
    })
    .then((cep) => {

      if (cep.regiao == "Sudeste") {
        valorCep.innerHTML = '15.00';
        valorFrete = 15.00
      } else if (cep.regiao == "Nordeste") {
        valorCep.innerHTML = '20.00';
        valorFrete = 20.00
      } else if (cep.regiao == "Sul") {
        valorCep.innerHTML = '35.00';
        valorFrete = 35.00
      } else if (cep.regiao == "Norte") {
        valorCep.innerHTML = '40.00';
        valorFrete = 40.00
      } else if (cep.regiao == "Centro-Oeste") {
        valorCep.innerHTML = '60.00';
        valorFrete = 60.00
      }
      calcularTotal();
    });
}