var currentDate = new Date();
var weddingDate = new Date('12/10/2022');

var daysToGo = weddingDate.getTime() - currentDate.getTime();

const countdown = document.getElementById('countdown');

countdown.textContent = daysToGo + ' days to go!';