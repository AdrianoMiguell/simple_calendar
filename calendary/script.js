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

const weeks = [
  "S",
  "M",
  "T",
  "W",
  "T",
  "F",
  "S",
];

let constructorMonth = {
  m: [],
  d: [],
  firstDay: [],
};

// const numberOfDays = [28, 30, 31];
const year = new Date().getFullYear();
Title.innerHTML += year;

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
    div.innerHTML += `<h1> ${constructorMonth.m[i]} </h1>`;
    div.innerHTML += `<div class='days'> </div>`;

    calendary.appendChild(div);

    writeDays(i);
  }
}

function writeDays(m) {
  let divDays = document.querySelectorAll(`.days`);

  for (let i = 0; i < 7; i++) {
    divDays[m].innerHTML += `<span class='namesOfWeek'> ${weeks[i]} </span>`;
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
