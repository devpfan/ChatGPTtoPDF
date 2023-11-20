document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('convertButton').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const activeTab = tabs[0];
        if (activeTab && activeTab.id) {
          chrome.tabs.sendMessage(activeTab.id, {action: 'convertToPDF'});
        } else {
          console.error('No se pudo encontrar una pestaña activa.');
        }
      });
    });
  });
  