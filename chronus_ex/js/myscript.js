document.getElementById('save').onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      start: document.getElementById('start').value,
      end: document.getElementById('end').value,
      work: document.getElementById('work').value,
      cause: document.getElementById('cause').value
    }, function(msg) {
      // console.log('response message:', msg);
    });
  });
  return false;
}
