const db = firebase.firestore();
const dokument = db.collection('timereg');
let template = document.querySelector('.timelist__template')
let list = document.querySelector('.timelist__times')

dokument.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc){

    let docnum = parseInt(doc.id)
    if(docnum >= 1){
        console.log(doc.id, " => ", doc.data());
        const clone = template.content.cloneNode(true)
        clone.querySelector('.timelist__hours').innerText = doc.data().hours;
        clone.querySelector('.timelist__minutes').innerText = doc.data().minutes;
        clone.querySelector('.timelist__seconds').innerText = doc.data().seconds;
        clone.querySelector('.timelist__tid').innerText = doc.data().tid;
        clone.querySelector('.timelist__dato').innerText = doc.data().dato;
        list.appendChild(clone)
    }
})
})