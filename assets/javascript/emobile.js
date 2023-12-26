let pc = false
if (navigator.userAgent.indexOf("Win") != -1 || navigator.userAgent.indexOf("Mac") != -1 || navigator.userAgent.indexOf("X11") != -1 || navigator.userAgent.indexOf("Linux") != -1) pc = true
window.addEventListener('load', () => {
    if(pc) return window.location.replace("https://recognition.netlify.app");
})
