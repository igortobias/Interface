function calculate(operation) {
    const num1 = parseFloat(document.getElementById('calcNum1').value);
    const num2 = parseFloat(document.getElementById('calcNum2').value);
    const resultDiv = document.getElementById('calcResult');

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = 'Insira números válidos!';
        return;
    }

    let result;
    switch (operation) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide':
            if (num2 === 0) {
                resultDiv.innerHTML = 'Divisão por zero não é permitida!';
                return;
            }
            result = num1 / num2;
            break;
        default: result = 'Operação inválida';
    }
    resultDiv.innerHTML = `<p>O resultado da operacao feita é ${result}</p>`;
}

function verifique() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    // Verifica se o campo está vazio ou se o ano informado é maior que o ano atual
    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {

        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //res.innerHTML = `Idade calculada: ${idade}`;
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
             genero = 'Homem'
        //     if (idade >= 0 && idade < 18) {
        //         //Crianca
        //         img.setAttribute('src', 'IdosaF.png')
        //     } else if (idade < 18) {
        //         //Adolescente
        //         img.setAttribute('src', 'IdosaF.png')
        //     } else if (idade < 40) {
        //         //Jovem
        //         img.setAttribute('src', 'IdosaF.png')
        //     } else if (idade < 55) {
        //         //Adulto
        //         img.setAttribute('src', 'IdosaF.png')
        //     } else {
        //         //Idoso
        //         img.setAttribute('src', 'IdosaF.png')
        //     }
          res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        } else if (fsex[1].checked) {
             genero = 'Mulher'
        //     if (idade >= 0 && idade < 18) {
        //         //Crianca
        //         img.setAttribute('src', 'IdosaF.png')
        //     } else if (idade < 18) {
        //         //Adolescente
        //         img.setAttribute('src', 'IdosaF.png')
        //     } else if (idade < 40) {
        //         //Jovem
        //         img.setAttribute('src', 'IdosaF.png')
        //     } else if (idade < 55) {
        //         //Adulto
        //         img.setAttribute('src', 'IdosaF.png')
        //     } else {
        //         //Idoso
        //         img.setAttribute('src', 'IdosaF.png')
        //     }
          res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.👩🏾‍🦳`
        }
        
        //res.appendChild(img)
    } 
  
}
