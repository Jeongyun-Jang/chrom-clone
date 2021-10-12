const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
/*
function sayHello(){
    console.log('hello');
}*/
getClock(); //로드 되자마자 현재시간 보여줌 & 1초마다 실행
setInterval(getClock,1000);
//setTimeout(sayHello,5000);
