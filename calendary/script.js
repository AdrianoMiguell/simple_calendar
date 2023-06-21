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
  let color;

  switch (m) {
    case 0:
      color = "#f06e6e";
      break;
    case 1:
      color = "#f0e76e";
      break;
    case 2:
      color = "#6ef095";
      break;
    case 3:
      color = "#f09e6e";
      break;
    case 4:
      color = "#6ea6f0";
      break;
    case 5:
      color = "#da6ef0";
      break;
    case 6:
      color = "#f06ebe";
      break;
    case 7:
      color = "#3393a0";
      break;
    case 8:
      color = "#e9ac29";
      break;
    case 9:
      color = "#f06e6e";
      break;
    case 10:
      color = "#9c69df";
      break;
    default:
      color = "#ec43ac";
      break;
  }

  headCalender[m].style.backgroundColor = color;
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
  saveMonths();
  writeMonths();
}

initialize();
