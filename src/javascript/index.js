const db = firebase.firestore();

db.collection("timereg").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc){
    console.log(doc.id, " => ", doc.data());
  })
})

