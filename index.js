/**
 *
 * @param {String} query
 * @returns Element
 */
const $ = (query) => document.querySelector(query);
/**
 *
 * @param {String} query
 * @returns NodeList
 */
const $$ = (query) => document.querySelectorAll(query);
const keys = {
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
  Meta0: "Windows",
  Shift1: "Left Shift",
  Shift2: "Right Shift",
  Control1: "Left Control",
  Control2: "Right Control",
  Alt1: "Left Alt",
  Alt2: "Right Alt"
};
const no = $(".no")
const items = $("#items");
const global = $("html");
const err = $(".err");
const totalclicks = $(".total")
let time = 0;
let totalClicks = 0;
setInterval(() => {
  time++;
  no.innerHTML = `You haven't clicked for ${time} second${time == 1 ? "" : "s"}.`
}, 1000);
let clicks = '';
let body = $("body");

document.addEventListener("keyup", (e) => {
  console.log(e.key); 
  clicks += e.key;
  console.log(clicks);
  if(e.key == " ") clicks = '';
  if(clicks == 'dark') {
    body.classList.toggle("dark-mode")
    clicks = '';
  }

  let key = e.key + e.location;
  items.innerHTML = `Button Clicked: <br><code>${keys[key] || e.key}</code>`;
  
  time = 0;
  totalClicks++
  totalclicks.innerHTML = `You have ${totalClicks} total click${totalClicks == 1 ? "" : "s"}`
});
document.addEventListener("click", (e) => {
  let key = getClickedKey(e.button);
  items.innerHTML = `Button Clicked: <br><code>${key}</code>`;
  time = 0;
  totalClicks++
  totalclicks.innerHTML = `You have ${totalClicks} total click${totalClicks == 1 ? "" : "s"}`
})
function getClickedKey(EventKey) {
  if(EventKey == 0) return "Left Mouse Button";
  if(EventKey == 1) return "Middle Mouse Button";
  if(EventKey == 2) return "Right Mouse Button";
}