var Name = "a"
if (navigator.userAgent.indexOf("Win") != -1) Name = "Windows OS";
if (navigator.userAgent.indexOf("Mac") != -1) Name = "MacOS";
if (navigator.userAgent.indexOf("X11") != -1) Name = "UNIX OS";
if (navigator.userAgent.indexOf("Linux") != -1) Name = "Linux OS";
window.addEventListener('load', () => {
    if(Name !== "a") return window.location.replace("https://recognition.netlify.app");
})