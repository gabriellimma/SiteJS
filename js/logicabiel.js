function onClickAlert()
{
   alert("isso é um alert!");    
}

function onClickConfirm()
{
    confirm("isso é um confirm!")    
}

function onClickPrompt()
{
    prompt("isso é um Prompt!")    
}

function troca() 
{
    var text = prompt("Qual é o seu nome?");
    botao.textContent = "Olá " + text + ", tudo bem?"
}

// function criaParagrafo()
// {
//     var pai = document.getElementById("paragrafo")
//     var filho = document.createElement('p');
//     filho.textContent ="isso é um paragrafo"
//     pai.appendChild(filho);
// }

function criaTextArea()
{
    var pai = document.getElementById("paragrafo")
    var filho = document.createElement('textarea');
    filho.textContent ="Isso é um paragrafo!"
    pai.appendChild(filho);
}