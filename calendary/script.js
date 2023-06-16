const Title = document.querySelector("h1");
const calendary = document.querySelector(".calendary");

const numberOfMonths = 12;
const numberOfWeeks = 7;

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weeks = ["S", "M", "T", "W", "T", "F", "S"];

let constructorMonth = {
  m: [],
  d: [],
  firstDay: [],
};

// const numberOfDays = [28, 30, 31];
const year = new Date().getFullYear();
let nameYear = String(year).split("");

for (const i in nameYear) {
  Title.innerHTML += `<span class='titleOfYear'>${nameYear[i]}</span>`;
}

function createBubbles() {
  const areaTitle = document.querySelector(".area-title");

  // let num = (Math.floor(Math.random() * 3) + 1) * 10;
  let num = 40;

  for (let i = 0; i < num; i++) {
    let bubble = document.createElement("div");

    let nX;
    let nY = 0;

    nX = i + 20.5 * i + 1;
    nY =
      -(Math.floor(Math.random() * 200) + 10 - i) -
      i * (Math.floor(Math.random() * 3) + 1);
    c = Math.floor(Math.random() * 5) + 1;

    bubble.setAttribute("class", "bubbles");
    bubble.style.translate = `${nX}px ${nY}px`;

    switch (c) {
      case 1:
        bubble.style.backgroundColor = "navy";
        break;
      case 2:
        bubble.style.backgroundColor = "#197c7c";
        break;
      case 3:
        bubble.style.backgroundColor = "palevioletred";
        break;
      case 4:
        bubble.style.backgroundColor = "darksalmon";
        break;
      case 5:
        bubble.style.backgroundColor = "#ffff4e";
        break;
      default:
        bubble.style.backgroundColor = "#41ffc6";
        break;
    }

    console.log(bubble);
    areaTitle.appendChild(bubble);
  }
}

function saveMonths() {
  for (let i = 0; i < numberOfMonths; i++) {
    let month = months[i];
    constructorMonth.m.push(month);
    verifyFirstDay(month, i);

    let days;

    if (i == 1) {
      if (
        Number(year) % 400 == 0 ||
        (Number(year) % 4 == 0 && Number(year) % 100 != 0)
      ) {
        days = 29;
      } else {
        days = 28;
      }
      constructorMonth.d.push(days);
    } else if (i == 3 || i == 5 || i == 8 || i == 10) {
      let days = 30;
      constructorMonth.d.push(days);
    } else {
      let days = 31;
      constructorMonth.d.push(days);
    }
  }

  console.log(constructorMonth);
}

function verifyFirstDay(month, i) {
  let firstDayOfMonth = new Date(`${month} 1`).getDay();
  console.log(firstDayOfMonth);
  constructorMonth.firstDay[i] = Number(firstDayOfMonth);
}

function writeMonths() {
  for (let i = 0; i < numberOfMonths; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", String(constructorMonth.m[i]));
    div.setAttribute("class", "month");
    div.innerHTML += `<div class='headCalender'> <div class='monthOfName'> <h1> ${constructorMonth.m[i]} </h1> </div> <div class='namesOfDays'> </div> </div>`;
    div.innerHTML += `<div class='days'> </div>`;

    calendary.appendChild(div);

    colorCalender(i);
    writeDays(i);
  }
}

function colorCalender(m) {
  let headCalender = document.querySelectorAll(`.headCalender`);

  if(m == 0 || m % 2 == 0) {
    headCalender[m].style.backgroundColor = "#6eabf0";
  } else if(m % 3 == 0) {
    headCalender[m].style.backgroundColor = "#7df06e";
  } else {
    headCalender[m].style.backgroundColor = "#f06e6e";
  }
}

function writeDays(m) {
  let divDays = document.querySelectorAll(`.days`);
  let namesOfDays = document.querySelectorAll(`.namesOfDays`);

  for (let i = 0; i < 7; i++) {
    namesOfDays[m].innerHTML += `<span> ${weeks[i]} </span>`;
  }

  for (let d = 1; d <= constructorMonth.firstDay[m]; d++) {
    divDays[m].innerHTML += `<span> </span>`;
  }

  for (let d = 1; d <= constructorMonth.d[m]; d++) {
    divDays[m].innerHTML += `<span> ${String(d)} </span>`;
    if (d % 7 == 0) {
    }
  }
}

function initialize() {
  // createBubbles();
  saveMonths();
  writeMonths();
}

initialize();
