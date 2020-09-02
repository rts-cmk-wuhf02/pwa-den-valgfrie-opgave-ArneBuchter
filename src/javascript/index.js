/* let apiKey = 'AIzaSyCkAl12z0asdcpuiEqYXRbRyk5lo59AUdE';

let app = initializeApp({
    apiKey: `<${apiKey}>`,
    authDomain: '<timestamp-d535c.web.app>',
    databaseURL: '<https://timestamp-d535c.firebaseio.com/>',
    projectId: '<timestamp-d535c>',
    storageBucket: '<gs://timestamp-d535c.appspot.com>',
    messagingSenderId: '<799941260904>'
  }); */
  
fetch(`https://timestamp-d535c.firebaseio.com.json `,{
  'method': 'GET'

})
.then(response => response.json())
.then(data => {
  console.log(data)
})