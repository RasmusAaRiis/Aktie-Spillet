import { Investment } from "./Investment";

let money = 1000;
let pengeDisplayElement: HTMLElement | null;
let startScreenElement: HTMLElement | null;
let mainScreenElement: HTMLElement | null;

let easyButton: HTMLElement | null;
let mediumButton: HTMLElement | null;
let hardButton: HTMLElement | null;

let lowTitle: HTMLElement | null;
let medTitle: HTMLElement | null;
let highTitle: HTMLElement | null;

let Trackunit: Investment;
let Microsoft: Investment;
let Curbfood: Investment;

const names = [
  "Netto",
  "Legoland",
  "Humlegaarden",
  "Curbfood 2",
  "Minecraft",
  "Elon Musk",
  "Carls Tandlæge",
  "Amazon",
  "Vand Inc.",
  "Blockbuster",
  "Minecraft 2",
  "Sprite",
  "Pepsi",
  "Bitcoin",
  "Dunder Mifflin",
  "PH lamper",
  "Bogense Havn",
  "Rasmus Aktie Spil",
  "MySpace",
  "r/HackerNews"
];

pengeDisplayElement = document.getElementById("pengeDisplay");
startScreenElement = document.getElementById("startScreen");
mainScreenElement = document.getElementById("mainScreen");

easyButton = document.getElementById("easyButton");
mediumButton = document.getElementById("mediumButton");
hardButton = document.getElementById("hardButton");

Trackunit = new Investment(
  "Trackunit",
  100,
  document.getElementById("lowWorth"),
  0,
  document.getElementById("lowOwned"),
  document.getElementById("lowNum"),
  document.getElementById("lowBuy"),
  document.getElementById("lowSell"),
  document.getElementById("lowTotal")
);
Microsoft = new Investment(
  "Microsoft",
  500,
  document.getElementById("MedWorth"),
  0,
  document.getElementById("MedOwned"),
  document.getElementById("MedNum"),
  document.getElementById("MedBuy"),
  document.getElementById("MedSell"),
  document.getElementById("MedTotal")
);
Curbfood = new Investment(
  "Curbfood",
  2000,
  document.getElementById("HighWorth"),
  0,
  document.getElementById("HighOwned"),
  document.getElementById("HighNum"),
  document.getElementById("HighBuy"),
  document.getElementById("HighSell"),
  document.getElementById("HighTotal")
);

lowTitle = document.getElementById("lowTitle");
medTitle = document.getElementById("medTitle");
highTitle = document.getElementById("highTitle");

if (easyButton) {
  easyButton.onclick = () => Start(100);
}
if (mediumButton) {
  mediumButton.onclick = () => Start(1000);
}
if (hardButton) {
  hardButton.onclick = () => Start(10000);
}

if (Trackunit.buyInput) {
  Trackunit.buyInput.onclick = () => Buy(Trackunit);
}
if (Trackunit.sellInput) {
  Trackunit.sellInput.onclick = () => Sell(Trackunit);
}
if (Trackunit.numberInput) {
  Trackunit.numberInput.onchange = () => Update();
}

if (Microsoft.buyInput) {
  Microsoft.buyInput.onclick = () => Buy(Microsoft);
}
if (Microsoft.sellInput) {
  Microsoft.sellInput.onclick = () => Sell(Microsoft);
}
if (Microsoft.numberInput) {
  Microsoft.numberInput.onchange = () => Update();
}

if (Curbfood.buyInput) {
  Curbfood.buyInput.onclick = () => Buy(Curbfood);
}
if (Curbfood.sellInput) {
  Curbfood.sellInput.onclick = () => Sell(Curbfood);
}
if (Curbfood.numberInput) {
  Curbfood.numberInput.onchange = () => Update();
}

function Buy(investment: Investment) {
  money = investment.Buy(money);
  Update();
}

function Sell(investment: Investment) {
  money = investment.Sell(money);
  Update();
}

function Start(moneyAmount: number) {
  money = moneyAmount;

  if (startScreenElement) {
    startScreenElement.style.display = "none";
  }
  if (mainScreenElement) {
    mainScreenElement.style.display = "initial";
  }

  Update();
  GameLoop();
}

let TrackunitChange = 1.05;
let MicrosoftChange = 1.1;
let CurbfoodChange = 1.2;

let TrackunitArray: number[] = [];
let MicrosoftArray: number[] = [];
let CurbfoodArray: number[] = [];

function GameLoop() {
  TrackunitArray.push(Trackunit.worth);
  DrawGraph(TrackunitArray, "lowChart");
  if (Math.random() >= 0.7) {
    if (TrackunitChange > 1) {
      TrackunitChange = 0.94;
    } else {
      TrackunitChange = 1.06;
    }
  }
  Trackunit.worth *= TrackunitChange;
  Trackunit.worth = Math.round(Trackunit.worth);

  MicrosoftArray.push(Microsoft.worth);
  DrawGraph(MicrosoftArray, "medChart");
  if (Math.random() >= 0.65) {
    if (MicrosoftChange > 1) {
      MicrosoftChange = 0.6;
    } else {
      MicrosoftChange = 1.4;
    }
  }
  Microsoft.worth *= MicrosoftChange;
  Microsoft.worth = Math.round(Microsoft.worth);

  CurbfoodArray.push(Curbfood.worth);
  DrawGraph(CurbfoodArray, "highChart");
  if (Math.random() >= 0.4) {
    if (CurbfoodChange > 1) {
      CurbfoodChange = 0.2;
    } else {
      CurbfoodChange = 2;
    }
  }
  Curbfood.worth *= CurbfoodChange;
  Curbfood.worth = Math.round(Curbfood.worth);

  if (Trackunit.worth <= 30) {
    let low = document.getElementById("low");
    if (low?.style) {
      low.style.backgroundColor = "rgb(240, 55, 55)";
    }
    setTimeout(() => {
      TrackunitArray = [];
      Trackunit.ownedStocks = 0;
      Trackunit.worth = 100 * Math.random();
      Trackunit.worth = Math.round(Trackunit.worth);
      if (lowTitle) {
        lowTitle.innerText = names[Math.floor(Math.random() * names.length)];
      }
      if (low?.style) {
        low.style.backgroundColor = "rgb(54, 54, 54)";
      }
    }, 1000);
  }

  if (Microsoft.worth <= 50) {
    let med = document.getElementById("med");
    if (med?.style) {
      med.style.backgroundColor = "rgb(240, 55, 55)";
    }
    setTimeout(() => {
      MicrosoftArray = [];
      Microsoft.ownedStocks = 0;
      Microsoft.worth = 1000 * Math.random();
      Microsoft.worth = Math.round(Microsoft.worth);
      if (medTitle) {
        medTitle.innerText = names[Math.floor(Math.random() * names.length)];
      }
      if (med?.style) {
        med.style.backgroundColor = "rgb(54, 54, 54)";
      }
    }, 1000);
  }

  if (Curbfood.worth <= 50) {
    let high = document.getElementById("high");
    if (high?.style) {
      high.style.backgroundColor = "rgb(240, 55, 55)";
    }
    setTimeout(() => {
      CurbfoodArray = [];
      Curbfood.ownedStocks = 0;
      Curbfood.worth = 5000 * Math.random();
      Curbfood.worth = Math.round(Curbfood.worth);
      if (highTitle) {
        highTitle.innerText = names[Math.floor(Math.random() * names.length)];
      }
      if (high?.style) {
        high.style.backgroundColor = "rgb(54, 54, 54)";
      }
    }, 1000);
  }

  Update();
  setTimeout(() => {
    GameLoop();
  }, 1000);
}

function Update() {
  if (pengeDisplayElement) {
    pengeDisplayElement.innerText = "Du har " + money + " dkk";
  }

  if (Trackunit.ownedStocksText && Trackunit.worthText && Trackunit.total) {
    Trackunit.worthText.innerText = "Værd " + Trackunit.worth + " per styk";
    Trackunit.ownedStocksText.innerText =
      "Ejer " + Trackunit.ownedStocks + " aktier";
    Trackunit.total.innerText =
      "(" +
      Trackunit.worth *
        parseInt((<HTMLInputElement>Trackunit.numberInput).value) +
      " dkk)";
  }

  if (Microsoft.ownedStocksText && Microsoft.worthText && Microsoft.total) {
    Microsoft.worthText.innerText = "Værd " + Microsoft.worth + " per styk";
    Microsoft.ownedStocksText.innerText =
      "Ejer " + Microsoft.ownedStocks + " aktier";
    Microsoft.total.innerText =
      "(" +
      Microsoft.worth *
        parseInt((<HTMLInputElement>Microsoft.numberInput).value) +
      " dkk)";
  }

  if (Curbfood.ownedStocksText && Curbfood.worthText && Curbfood.total) {
    Curbfood.worthText.innerText = "Værd " + Curbfood.worth + " per styk";
    Curbfood.ownedStocksText.innerText =
      "Ejer " + Curbfood.ownedStocks + " aktier";
    Curbfood.total.innerText =
      "(" +
      Curbfood.worth *
        parseInt((<HTMLInputElement>Curbfood.numberInput).value) +
      " dkk)";
  }
}

let myChart: HTMLElement | null;

function DrawGraph(yArray: number[], chartId: string) {
  let m_yArray: number[] = [];

  yArray.forEach((_, i) => {
    m_yArray.push(yArray[i] - Math.min(...yArray));
  });

  console.log("y: " + m_yArray);

  let xArray: number[] = [];

  m_yArray.forEach((_, i) => {
    xArray.push(i + 1);
  });

  myChart = document.getElementById(chartId);
  const ctx = (<HTMLCanvasElement>myChart).getContext("2d");
  if (!ctx) {
    return;
  }

  ctx.clearRect(0, 0, 180, 100);

  let xLineLength = 180 / Math.max(...xArray);
  xLineLength += xLineLength / xArray.length;
  const yLineLength = 100 / Math.max(...m_yArray);
  ctx.beginPath();

  xArray.forEach((_, i) => {
    ctx.lineTo(
      xArray[i] * xLineLength - xLineLength,
      100 - m_yArray[i] * yLineLength
    );
  });

  ctx.stroke();
}
