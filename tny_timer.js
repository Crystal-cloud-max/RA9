"use strict";

/*Execute the function to run and display the countdown clock for a second = 1000 ms*/
showClock();
setInterval("showClock()", 1000);

//function to create and run countdown clock
function showClock() {
    //variables for today's local date and time
    var thisDay = new Date();
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();

    //Display current time and date under Welcome to Tulsa
    document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";

    //set timer for upcoming July 4
    var j4Date = nextJuly4(thisDay);//call function
    j4Date.setHours(21);//set for 9pm

    //Calculate days, hours, minutes, and seconds until July 4 at 9pm
    var days = (j4Date - thisDay) / (1000 * 60 * 60 * 24);
    var hrs = (days - Math.floor(days)) * 24;
    var mins = (hrs - Math.floor(hrs)) * 60;
    var secs = (mins - Math.floor(mins)) * 60;

    //Display time left until July 4 at 9pm rounded to next lowest int under Countdown to the Fireworks
    document.getElementById("dLeft").textContent = Math.floor(days);
    document.getElementById("hLeft").textContent = Math.floor(hrs);
    document.getElementById("mLeft").textContent = Math.floor(mins);
    document.getElementById("sLeft").textContent = Math.floor(secs);
}

//function to keep track until arrival of 4 of July
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();//calendar year for whole year
   var jDate = new Date("July 4, 2030");//create new date
   jDate.setFullYear(cYear);//set whole year for new date passing calendar year
   //if new date-today less than 0 set whole year for new date passing whole year plus extra one
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}