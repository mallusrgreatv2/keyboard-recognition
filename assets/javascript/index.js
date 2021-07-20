// TODO: Play audio when milestone reached

const keys = getKeys();
const no = $(".no");
const items = $("#items");
const global = $("html");
const err = $(".err");
const totalclicks = $(".total");
let time = 0;
let totalClicks = 0;
setInterval(() => {
  increment(time);
  no.innerHTML = `You haven't clicked for ${time} second${
    time == 1 ? "" : "s"
  }.`;
}, 1000);
let clicks = "";
let body = $("body");

document.addEventListener("keyup", (e) => {
  clicks += e.key;
  if (e.key == " ") clicks = '';
  console.log(clicks);
  if (clicks == "dark") {
    body.classList.toggle("dark-mode");
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
darktext.addEventListener("click", e => body.classList.toggle('dark-mode'))
