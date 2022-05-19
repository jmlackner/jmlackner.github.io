var currentDate = new Date();
var weddingDate = new Date('12/10/2022');
var daysToGo = Math.floor((weddingDate.getTime() - currentDate.getTime()) / 24 / 60 / 60 / 1000);

document.getElementById('countdown').textContent = daysToGo + ' days to go!';