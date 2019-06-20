
window.addEventListener("load", () => {
    function handleNetworkChange(event) {
      if (navigator.onLine) {
        console.log('back online');
      } else {
        console.log('offline');
      }
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
           .register('./sw.js', {scope: '/sankofauI/'})
           .then(function() {
              
           });
   }
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);
  });