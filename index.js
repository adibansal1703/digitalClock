function clock () {
    let a = new Date();
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent  =  time ;
}

clock();
setInterval(clock,1000);