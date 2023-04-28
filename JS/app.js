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

function mainSlider(){
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    let slideIntervalId=null;

    let activeIndex = 0;
     
    function renderSlides() {
        slides.forEach((el,i) =>{
            if (i === activeIndex){
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        })
    }
}