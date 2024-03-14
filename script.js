function verificar(){
    //Obtenha os valor do ano de nascimento
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res') //Aqui onde vai aparecer o resultado
    
    //Aqui é a onde ferificamos se a pessoa preencheu o campo,se ele nao preencheu o campo vai dar um alerta para ele
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Insira todos os dados!')
    } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)


       // aqui é a onde fazemos a comparação da idade e demostração de fotos
 var genero = ''
 var img = document.createElement('img')
 img.setAttribute('id', 'foto')
      if(fsex[0].checked){
           genero = 'Homem'
           if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src','bebehomem.png')
           } else if ( idade < 21){
            //Jovem
            img.setAttribute('src','adolecentehomem.png')
           }else if (idade < 50){
            //Adulto
            img.setAttribute('src','adultohomem.png')
           } else {
            //Idoso
            img.setAttribute('src','idoso homem.png')
           }
    }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bebemulher.png')
               } else if ( idade < 21){
                //Jovem
                img.setAttribute('src','adolecentemenina.png')
               }else if (idade < 50){
                //Adulto
                img.setAttribute('src','adultomulher.png')
               } else {
                //Idoso
                img.setAttribute('src','velho.png')
               }
       }
      //aqui exibimos uma frase e mostramos a foto
       res.innerHTML = genero + ' com ' + idade + ' anos.' 
       res.appendChild(img)

 }
}

function calcularIMC() {
    // Obtenha os valores de peso e altura dos campos de entrada
    var pesoInput = document.getElementById('peso');
    var alturaInput = document.getElementById('altura');
    var ress = document.getElementById('ress'); // Onde você deseja exibir o resultado

    // Converta os valores para números
    var peso = parseFloat(pesoInput.value);
    var altura = parseFloat(alturaInput.value);

    // Verifique se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        ress.innerHTML = 'Por favor, insira valores válidos para peso e altura.';
    } else {
        // Calcule o IMC
        var imc = peso / (altura * altura);

        // Exiba o resultado
        if (imc < 18.5) {
            ress.innerHTML = 'Seu IMC está abaixo do peso.';
        } else if (imc >= 18.5 && imc < 24.9) {
            ress.innerHTML = 'Seu IMC está normal.';
        } else if (imc >= 25 && imc < 29.9) {
            ress.innerHTML = 'Seu IMC está com excesso de peso!';
        } else if (imc >= 30 && imc < 34.9){
            ress.innerHTML = 'Obesidade classe I';
        } else if (imc >= 35 && imc < 39.9) {
            ress.innerHTML = 'Obesidade classe II';
        } else if (imc >= 40){
            ress.innerHTML = 'Obesidade classe III';
        }
    }
}


function calcularPesoCorporal(){
    var pesoCorpo = 1.5
    var pesoInput = document.getElementById('peso')

    var peso = parseFloat(pesoInput.value);

    var resultado = peso * pesoCorpo
    resul.innerHTML ='O ideal é você consumir apenas ' + resultado + ' gramas de proteínas por dias! '
}