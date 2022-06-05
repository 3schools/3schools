(function () {
    if (!("Notification" in window)) {
        alert("Browser does not support notifications");
    }
    else if (Notification.permission === "granted") {
        navigator.serviceWorker.ready
            .then(function (registration) {
               
                registration.showNotification('App Notification', {
          body: 'Thanks for subscribing to our newsletter.',
          icon: 'https://app.3schools.in/images/icon_256.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: '3schools Notification'
        }); 
            
            });
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                navigator.serviceWorker.ready
                    .then(function (registration) {
                 registration.showNotification('App Notification', {
          body: 'Welcome back to our blog',
          icon: 'https://app.3schools.in/images/icon_256.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'Notification'
        }); 
                    });
            }
        });
    }
})();
