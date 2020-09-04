const db = firebase.firestore();
const dokument = db.collection('timereg');
let template = document.querySelector('.timelist__template')
let list = document.querySelector('.timelist__times')
let totalTid = [];
let jsonfile = [];


dokument.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc){

    let docnum = parseInt(doc.id)
  
    if(docnum >= 1){
        const clone = template.content.cloneNode(true)
        clone.querySelector('.timelist__hours').innerText = doc.data().hours;
        clone.querySelector('.timelist__minutes').innerText = doc.data().minutes;
        clone.querySelector('.timelist__seconds').innerText = doc.data().seconds;
        clone.querySelector('.timelist__tid').innerText = doc.data().tid;
        clone.querySelector('.timelist__dato').innerText = doc.data().dato;
        list.appendChild(clone)
        let stringTid = parseInt(doc.data().totaltid)
        totalTid.push(stringTid)
    }
    let sum = totalTid. reduce(function(a, b){return a + b;}, 0);
        const SECONDS_PER_DAY = 86400;
        const HOURS_PER_DAY = 24;
        
        const secondsToHms = (seconds) => {
          const days = Math.floor(seconds / SECONDS_PER_DAY);
          const remainderSeconds = seconds % SECONDS_PER_DAY;
          const hms = new Date(remainderSeconds * 1000).toISOString().substring(11, 19);
          return hms.replace(/^(\d+)/, h => `${(h) + days * HOURS_PER_DAY}`.padStart(2, '0'));
        };

        document.querySelector('.timelist__totalhours').innerHTML = secondsToHms(sum); 
        jsonfile.push({hours: doc.data().hours, minutes: doc.data().minutes, seconds: doc.data().seconds, tidspunkt: doc.data().tid, dato : doc.data().dato, samletTid : secondsToHms(sum)})

    })
})



  