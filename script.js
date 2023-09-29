let mainElement = document.getElementsByTagName('main');

const monthNames = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","julio","Julio","Agosto","Septiembre",
"Octubre","Noviembre","Diciembre"];

let monthCounter = 8;
let currenDate = new Date('');

function addMonth(){
    let monthElement = document.createElement('div');
    monthElement.classList.toggle('month');

    let titleMontheElement = document.createElement('h4');
    titleMontheElement.textContent = monthNames[monthCounter];

    let daysElement = document.createElement('div');
    daysElement.classList.toggle('days');

    daysElement.textContent = `
    <div class="day">L</div>
    <div class="day">M</div>
    <div class="day">X</div>
    <div class="day">J</div>
    <div class="day">V</div>
    <div class="day">S</div>
    <div class="day">D</div>
    `
    let 
}