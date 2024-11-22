const img = document.getElementById("img"); 
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;

const trafficlight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();//foi retirado do console este comando para saber onde foi clicado
    
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;
/*outra forma de de montar a equacao, neste caso ternário. Obs o ++tem que vir antes se nao vai ficar sempre vermelho*/


//mesmo jeito de ecrever o comando de cima

/*const nextIndex = () => {
    if (colorIndex < 2) {colorIndex++}
    else{colorIndex = 0}
}*/  


const changecolor = () => {
   const colors = ['red', 'yellow','green']
   const color = colors[colorIndex];
   turnOn[color]();
   nextIndex();
}

 const stopAutomatic = () => {
    clearInterval ( intervalId );
 }

const turnOn = {
    'red':    () => img.src = "imagens/vermelho.png",
    'yellow': () => img.src = "imagens/amarelo.png",
    'green':  () => img.src = "imagens/verde.png",
    'automatic': () => intervalId = setInterval(changecolor, 1000)
}



buttons.addEventListener('click', trafficlight);