const date = new Date();
const hour = date.getUTCHours();
const localHour = hour + 16;
const minute = date.getMinutes();

document.getElementById("time").innerHTML = localHour + ":" + minute;