function displayTime(){
    var dateTime=new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById(`session`);

    document.getElementById(`hours`).innerHTML = hours;
    document.getElementById(`minutes`).innerHTML = minutes;
    document.getElementById(`seconds`).innerHTML = seconds;
    
    if (hours >= 12) {
        session.innerHTML = `PM`;
    } else {
        session.innerHTML= `AM`;
    }

}

setInterval(displayTime, 10);