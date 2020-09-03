let startStop = document.querySelector('.main__button');
let time;
let minutesLabel = document.querySelector("#minutes");
let secondsLabel = document.querySelector("#seconds");
let hourslabel = document.querySelector("#hours");
const db = firebase.firestore();
const dokument = db.collection('timereg');
let doclength = [];
let newDoc;

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
      hourslabel.innerHTML = pad(parseInt(totalSeconds / 3600));
    }

    function pad(val) {
      let valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }
    dokument.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc){
        console.log(doc.id)
        doclength.push(doc.id)
      newDoc = doclength.length+1
      console.log(newDoc)
      })
    })
  }
  else{
    const pElement = document.createElement('p');
    let list = document.querySelector('.main__stamp');

    let timestamp = []
    let d = new Date;
    let day = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    let tidHour = d.getUTCHours()+2;
    let tidMinutes = d.getUTCMinutes();
    let tidSeconds = d.getUTCSeconds();
    let tid = tidHour+ ":" +tidMinutes+ ":" +tidSeconds;
    let dato = day+"-"+month+"-"+year;
    startStop.classList.replace('main__button_stop', 'main__button_start');
    startStop.innerText = 'Start';
    
    timestamp.push({hours: hourslabel.innerText, minutes: minutesLabel.innerText, seconds: secondsLabel.innerText, dato: dato, tid: tid });

    if(newDoc != undefined){
      dokument.doc(newDoc.toString()).set({
      hours: `${timestamp[0].hours}`,
      minutes: `${timestamp[0].minutes}`,
      seconds: `${timestamp[0].seconds}`,
      dato: `${timestamp[0].dato}`,
      tid: `${timestamp[0].tid}`, 
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    }else{
      dokument.doc('1').set({
        hours: `${timestamp[0].hours}`,
        minutes: `${timestamp[0].minutes}`,
        seconds: `${timestamp[0].seconds}`,
        dato: `${timestamp[0].dato}`,
        tid: `${timestamp[0].tid}`, 
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    } 



    pElement.textContent = timestamp[0].minutes+":"+timestamp[0].seconds+" "+timestamp[0].dato;
    list.appendChild(pElement)
    console.log(timestamp)
    clearInterval(time);
    secondsLabel.innerHTML = '00'
    minutesLabel.innerHTML = '00'

  } 
})


