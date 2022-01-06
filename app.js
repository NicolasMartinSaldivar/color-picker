const inputColor = document.getElementById('inputColor');
const btnVisualizar = document.getElementById('btnVisualizar');
const parrafoExa = document.getElementById('parrafoExa');
const cardColor = document.getElementById('cardColor');

btnVisualizar.addEventListener('click', ()=>{
    console.log(inputColor.value)
    parrafoExa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
})