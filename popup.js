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

  // valid events
  // 'ready', 'disconnected', 'disconnect', 'conflict', 'error',
  // 'features-loaded', 'connecting', 'authing', 'sync-busy', 'sync-done'
  remoteStorage.on('ready', function () {
    console.log('remoteStorage state: ready');
    document.getElementById('connected').style.display = 'block';
    chrome.browserAction.setIcon({
      path: "icon_connected.png"
    });
  });
  remoteStorage.on('disconnected', function () {
    console.log('remoteStorage state: disconnected');
    document.getElementById('anonymous').style.display = 'block';
    chrome.browserAction.setIcon({
      path: "icon_anonymous.png"
    });
  });
  remoteStorage.on('sync-busy', function () {
    console.log('remoteStorage state: sync-busy');
    // do some kind of nifty animation?
  });
  remoteStorage.on('sync-done', function () {
    console.log('remoteStorage state: sync-done');
    // stop nifty animation?
  });


});
