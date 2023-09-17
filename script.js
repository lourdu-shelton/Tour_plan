
var card_footer = document.getElementById("card_footer");
var headback = document.getElementById("headback");
document.getElementById("container_fluid").style.height=headback.offsetHeight + card_footer.offsetHeight/2 + "px";
var sect_one = document.getElementById("first-sec");
console.log(sect_one.offsetHeight);
document.getElementById("second-sec").style.height=sect_one.offsetHeight + "px";
