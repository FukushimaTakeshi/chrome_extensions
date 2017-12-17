document.getElementById('input').onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      lastName: document.getElementById('lastName').value,
      firstName: document.getElementById('firstName').value,
      lastNameKana: document.getElementById('lastNameKana').value,
      firstNameKana: document.getElementById('firstNameKana').value,
      tel: document.getElementById('tel').value,
      email: document.getElementById('email').value,
      emailConfirmation: document.getElementById('emailConfirmation').value,
      birthYear: document.getElementById('birthYear').value,
      birthMonth: document.getElementById('birthMonth').value,
      birthDay: document.getElementById('birthDay').value
    }, function(msg) {
      // console.log('response message:', msg);
    });
  });
  return false;
}
