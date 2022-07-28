
const keys = getKeys();
const clicked = $(".clicked");
const items = $("#items");
const global = $("html");
const err = $(".err");
const totalclicks = $(".total");
let time = 0;
let totalClicks = 0;
setInterval(() => {
  time++;
  clicked.innerHTML = `You haven't clicked for ${time} second${
    time == 1 ? "" : "s"
  }.`;
}, 1000);
let clicks = "";
let body = $("body");

document.addEventListener("keyup", (e) => {
  clicks += e.key;
  const rev = clicks.split("").reverse();
  if (e.key == " ") clicks = '';
  console.log(clicks);
  if (clicks == "white" || clicks.includes("white")) {
    body.classList.toggle("white-mode");
    clicks = '';
  }
  if (clicks == "dark"|| (clicks.includes("dark") && rev[0]+rev[1]+rev[2]+rev[3] == "dark")) {
    body.classList.remove("white-mode");
    clicks = '';
  }


  let key = e.key + e.location;
  items.innerHTML = `Button Clicked: <br><code>${keys[key] || e.key}</code>`;

  time = 0;
  totalClicks++;
  totalclicks.innerHTML = `You have ${totalClicks} total click${generateS(totalClicks)}`;
});
document.addEventListener("mousedown", (e) => {
  let key = getClickedKey(e.button);
  items.innerHTML = `Button Clicked: <br><code>${key}</code>`;
  time = 0;
  totalClicks++;
  totalclicks.innerHTML = `You have ${totalClicks} total click${generateS(totalClicks)}`;
});
let darktext = $(".darktext");
darktext.addEventListener("click", e => body.classList.toggle('white-mode'))

































function generateS(item) {
  return item == 1 ? "" : "s";
}
function getKeys() {
  return {
    Escape0: "Esc",
    Tab0: "Tab",
    CapsLock0: "Caps Lock",
    Control0: "Ctrl",
    " 0": "Space",
    ArrowDown0: "🔽",
    ArrowLeft0: "◀",
    ArrowRight0: "▶",
    ArrowUp0: "🔼",
    ContextMenu0: "📰",
    PrintScreen0: "Prt Sc<br>SysRq",
    Pause0: "Pause<br>Break",
    Insert0: "Ins",
    Delete0: "Del",
    PageUp0: "PgUp",
    PageDown0: "PgDn",
    Meta0: "winkey",
    Shift1: "Left Shift",
    Shift2: "Right Shift",
    Control1: "Left Control",
    Control2: "Right Control",
    Alt1: "Left Alt",
    Alt2: "Right Alt",
  };
}
/**
 *
 * @param {String} query
 * @returns Element
 */
function $(query) {
  return document.querySelector(query)
}
/**
 *
 * @param {String} query
 * @returns NodeList
 */
function $$(query) {
  return document.querySelectorAll(query);
}
function getClickedKey(EventKey) {
  if (EventKey == 0) return "Left Mouse Button";
  if (EventKey == 1) return "Middle Mouse Button";
  if (EventKey == 2) return "Right Mouse Button";
}
function increment(number) {
    number++;
}
// function reset(string) {
//     return string = '';
// }
