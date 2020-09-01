if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('../../sw.js')
        .then(function(registration) {
            // Registration was succesful
            console.log('serviceworker working succesful with scope:', registration.scope)
        })
    })
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferredPrompt = e;
        document.querySelector('.hidden').classList.toggle('hidden', false);
    });

    let buttonInstall = document.querySelector('.download-app')

    buttonInstall.addEventListener('click', () => {
        document.querySelector('.download-app').classList.add('hidden');
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
        });
    });
}

// notificatoins

Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
    if(Notification.permission == 'granted'){
        navigator.serviceWorker.getRegistration()
        .then(function(reg) {
            let options = {
                body: "",
                icon: "/assets/images/time.png" ,
                data: {
                    dateOfArrival : Date.now(),
                    primaryKey: 1
                }
            }
            reg.showNotification('Ready to make a timestamp', options)
        })
    }
});
