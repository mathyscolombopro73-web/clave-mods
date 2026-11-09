/* CLAVE MODS — bandeau "offre à durée limitée" avec compte à rebours.
   Réglages (texte, date de fin) : window.CLAVE_DATA.promo dans data.js */
(function () {
  var bar = document.getElementById("promo-bar");
  var promo = window.CLAVE_DATA && window.CLAVE_DATA.promo;
  if (!bar || !promo) return;

  var end = new Date(promo.endsAt).getTime();
  if (!(end > Date.now())) return;

  bar.innerHTML =
    '<span class="promo-label"></span>' +
    '<span class="promo-timer" aria-live="off">Fin dans <strong></strong></span>';
  bar.querySelector(".promo-label").textContent = promo.label;
  var out = bar.querySelector(".promo-timer strong");
  bar.hidden = false;

  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function tick() {
    var ms = end - Date.now();
    if (ms <= 0) { bar.hidden = true; clearInterval(timer); return; }
    var s = Math.floor(ms / 1000);
    var d = Math.floor(s / 86400);
    var h = Math.floor((s % 86400) / 3600);
    var m = Math.floor((s % 3600) / 60);
    out.textContent = (d > 0 ? d + "j " : "") + pad(h) + "h " + pad(m) + "m " + pad(s % 60) + "s";
  }
  tick();
  var timer = setInterval(tick, 1000);
})();
