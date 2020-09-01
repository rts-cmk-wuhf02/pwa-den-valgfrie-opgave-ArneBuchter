let startStop = document.querySelector('.main__button');
let time;
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
startStop.addEventListener('click', () => {
  
  if(startStop.classList.contains('main__button_start')){

    startStop.classList.replace('main__button_start', 'main__button_stop');
    startStop.innerText = 'Stop';

    let totalSeconds = 0;
    time = setInterval(setTime, 1000);

    function setTime() {
      ++totalSeconds;
      secondsLabel.innerHTML = pad(totalSeconds % 60);
      minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
      let valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }
  }

  else{
    const pElement = document.createElement('p');
    let list = document.querySelector('.main__stamp');

    let timestamp = []
    let d = new Date;
    let day = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    let dato = day+"-"+month+"-"+year;
    startStop.classList.replace('main__button_stop', 'main__button_start');
    startStop.innerText = 'Start';
    
    timestamp.push({minutes: minutesLabel.innerText, seconds: secondsLabel.innerText, dato: dato });
    pElement.textContent = timestamp[0].minutes+":"+timestamp[0].seconds+" "+timestamp[0].dato;
    list.appendChild(pElement)
    console.log(timestamp)
    clearInterval(time);
    secondsLabel.innerHTML = '00'
    minutesLabel.innerHTML = '00'

  } 
})


