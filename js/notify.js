(function () {
    if (!("Notification" in window)) {
        alert("Browser does not support notifications");
    }
    else if (Notification.permission === "granted") {
        navigator.serviceWorker.ready
            .then(function (registration) {
               
                registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          icon: '/images/icon_256.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        }); 
            
            });
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                navigator.serviceWorker.ready
                    .then(function (registration) {
                        
                        registration.showNotification("Welcome back to Ask 3schools")
                    });
            }
        });
    }
})();
