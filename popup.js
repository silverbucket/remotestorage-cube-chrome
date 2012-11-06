window.addEventListener('DOMContentLoaded', function() {

  remoteStorage.claimAccess({'root':'rw'});

  remoteStorage.displayWidget('remotestorage-connect', {
    syncShortcut: false,
    authDialog: function(url) {
      chrome.tabs.create({url: url}, function(tab) {
        localStorage.setItem('auth-tab-id', tab.id);
      });
    }
  });

  var state = remoteStorage.getWidgetState();

  console.log('remoteStorage.getWidgetState = '+state);

  document.getElementById(state).style.display = 'block';

  if(state === 'connected') {
    chrome.browserAction.setIcon({
      path: "icon_connected.png"
    });
  } else if (state === 'anonymous') {
    chrome.browserAction.setIcon({
      path: "icon_anonymous.png"
    });
  } else if (state === 'busy') {
    // do some kind of nifty animation?
  }

});
