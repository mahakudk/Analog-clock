setInterval(()=>{
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

      hourRotation = 30*hours + minutes/2;
      minRotation = 6*minutes;
      secRotation = 6*seconds;

      hour.style.transform = `rotate(${hourRotation}deg)`;
      minute.style.transform = `rotate(${minRotation}deg)`;
      second.style.transform = `rotate(${secRotation}deg)`;

},1000)