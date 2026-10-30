// Het menu op een klein scherm openen en sluiten.
let menuKnop = document.getElementById("menu-button");
let menu = document.getElementById("nav-links");

if (menuKnop && menu) {
  menuKnop.addEventListener("click", function () {
    menu.classList.toggle("open");
    menuKnop.setAttribute("aria-expanded", menu.classList.contains("open"));
    console.log("Menu geopend of gesloten");
  });
}

// Wissel tussen een lichte en donkere pagina.
let themaKnop = document.getElementById("theme-button");

if (themaKnop) {
  themaKnop.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    themaKnop.setAttribute("aria-pressed", document.body.classList.contains("dark"));
    console.log("Thema gewijzigd");
  });
}

// Kies een begroeting die past bij het tijdstip.
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

// Onthoud of de bezoeker de melding heeft gesloten.
// Dit is een functionele cookie voor de keuze zelf; er zijn geen trackingcookies.
let cookieMelding = document.getElementById("cookie-box");
let accepteerKnop = document.getElementById("cookie-accept");
let weigerKnop = document.getElementById("cookie-reject");

if (cookieMelding && document.cookie.includes("portfolio_keuze=")) {
  cookieMelding.hidden = true;
}

if (accepteerKnop && cookieMelding) {
  accepteerKnop.addEventListener("click", function () {
    document.cookie = "portfolio_keuze=ja; max-age=31536000; path=/; samesite=lax";
    cookieMelding.hidden = true;
    console.log("Cookiekeuze: geaccepteerd");
  });
}

if (weigerKnop && cookieMelding) {
  weigerKnop.addEventListener("click", function () {
    document.cookie = "portfolio_keuze=nee; max-age=31536000; path=/; samesite=lax";
    cookieMelding.hidden = true;
    console.log("Cookiekeuze: geweigerd");
  });
}

// Voorlopige datum: controleer deze bij de docent en pas hem hier aan.
let eindDatum = new Date("2026-12-18T23:59:00+01:00");
let dagen = document.getElementById("days");
let uren = document.getElementById("hours");
let minuten = document.getElementById("minutes");
let seconden = document.getElementById("seconds");
let teller;

function updateCountdown() {
  let verschil = eindDatum.getTime() - new Date().getTime();

  // De teller blijft op nul staan als de datum bereikt is.
  if (verschil <= 0) {
    verschil = 0;
    clearInterval(teller);
  }

  dagen.textContent = Math.floor(verschil / (1000 * 60 * 60 * 24));
  uren.textContent = Math.floor((verschil / (1000 * 60 * 60)) % 24);
  minuten.textContent = Math.floor((verschil / (1000 * 60)) % 60);
  seconden.textContent = Math.floor((verschil / 1000) % 60);
}

if (dagen && uren && minuten && seconden) {
  teller = setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Het formulier is alleen een voorbeeld en verstuurt geen bericht.
let formulier = document.getElementById("contact-form");
let formulierMelding = document.getElementById("form-message");

if (formulier && formulierMelding) {
  formulier.addEventListener("submit", function (event) {
    event.preventDefault();
    formulierMelding.textContent = "Dit is een voorbeeld. Je bericht is niet verstuurd.";
    console.log("Voorbeeldformulier ingevuld");
  });
}

// Laat in de console zien wanneer de muis over de afbeelding gaat.
let afbeelding = document.querySelector(".hero-image");
if (afbeelding) {
  afbeelding.addEventListener("mouseenter", function () {
    console.log("Muis over de afbeelding");
  });
}
