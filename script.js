// Open en sluit het menu op een telefoon.
let menuKnop = document.getElementById("menu-button");
let menu = document.getElementById("nav-links");

menuKnop.onclick = function () {
  menu.classList.toggle("open");
  menuKnop.setAttribute("aria-expanded", menu.classList.contains("open"));
  console.log("Menu geopend of gesloten");
};

// Wissel tussen licht en donker.
let themaKnop = document.getElementById("theme-button");

themaKnop.onclick = function () {
  document.body.classList.toggle("dark");
  themaKnop.setAttribute("aria-pressed", document.body.classList.contains("dark"));
  console.log("Thema gewijzigd");
};

// De begroeting hangt af van het tijdstip.
let begroeting = document.getElementById("greeting");
let uur = new Date().getHours();

if (begroeting) {
  if (uur < 6) {
    begroeting.textContent = "Goedenacht";
  } else if (uur < 12) {
    begroeting.textContent = "Goedemorgen";
  } else if (uur < 18) {
    begroeting.textContent = "Goedemiddag";
  } else {
    begroeting.textContent = "Goedenavond";
  }
}

// Onthoud de keuze voor de cookiemelding.
let cookieMelding = document.getElementById("cookie-box");
let accepteerKnop = document.getElementById("cookie-accept");
let weigerKnop = document.getElementById("cookie-reject");

if (document.cookie.includes("portfolio_keuze=")) {
  cookieMelding.hidden = true;
}

accepteerKnop.onclick = function () {
  document.cookie = "portfolio_keuze=ja; max-age=31536000; path=/; samesite=lax";
  cookieMelding.hidden = true;
  console.log("Cookies geaccepteerd");
};

weigerKnop.onclick = function () {
  document.cookie = "portfolio_keuze=nee; max-age=31536000; path=/; samesite=lax";
  cookieMelding.hidden = true;
  console.log("Cookies geweigerd");
};

// Voorlopige deadline: controleer de datum bij de docent.
let eindDatum = new Date("2026-12-18T23:59:00+01:00");
let dagen = document.getElementById("days");
let uren = document.getElementById("hours");
let minuten = document.getElementById("minutes");
let seconden = document.getElementById("seconds");
let timer;

function aftellen() {
  let verschil = eindDatum - new Date();

  if (verschil <= 0) {
    verschil = 0;
    clearInterval(timer);
  }

  let totaal = Math.floor(verschil / 1000);
  dagen.textContent = Math.floor(totaal / 86400);
  uren.textContent = Math.floor((totaal % 86400) / 3600);
  minuten.textContent = Math.floor((totaal % 3600) / 60);
  seconden.textContent = totaal % 60;
}

// De countdown staat alleen op de homepage.
if (dagen && uren && minuten && seconden) {
  timer = setInterval(aftellen, 1000);
  aftellen();
}

// Dit formulier is een voorbeeld en verstuurt geen bericht.
let formulier = document.getElementById("contact-form");

if (formulier) {
  formulier.onsubmit = function (event) {
    event.preventDefault();
    document.getElementById("form-message").textContent = "Dit is een voorbeeld. Je bericht is niet verstuurd.";
    console.log("Voorbeeldformulier ingevuld");
  };
}

// Laat in de console zien wanneer de muis over de afbeelding gaat.
let afbeelding = document.querySelector(".hero-image");
if (afbeelding) {
  afbeelding.onmouseenter = function () {
    console.log("Muis over de afbeelding");
  };
}
