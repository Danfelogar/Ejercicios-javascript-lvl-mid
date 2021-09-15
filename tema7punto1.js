let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `protocolo: <b>${protocol}</b></br></br>`;
html += `pathname: <b>${pathname}</b></br></br>`;
html += `hostname: <b>${hostname}</b></br></br>`;
html += `URL completa: <b>${href}</b></br></br>`;


document.write(html);