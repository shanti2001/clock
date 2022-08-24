setInterval(()=>{
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    hours = 30*h + m/2;
    min = m*6 + s/10;
    sec = s*6;
    hour.style.transform =`rotate(${hours}deg)`;
    minute.style.transform= `rotate(${min}deg)`;
    second.style.transform=`rotate(${sec}deg)`;
},1000)