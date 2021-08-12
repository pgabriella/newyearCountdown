let countDownDate = new Date("Jan 1,2022 00:00:00");

var myFunc = setInterval(() => {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("mins").innerHTML = minutes + "m";
    document.getElementById("secs").innerHTML= seconds + "s";

    if(timeleft < 0){
        clearInterval(myFunc);
        document.getElementById("days").innerHTML = "";
        document.getElementById("hours").innerHTML = "";
        document.getElementById("mins").innerHTML="";
        document.getElementById("secs").innerHTML="";
        document.getElementById("end").innerHTML =" happy new year"
    }


    
}, 1000);
