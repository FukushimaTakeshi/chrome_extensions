chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
    if (msg) {
      document.getElementsByName('nmSei')[0].value = msg.lastName;
      document.getElementsByName('nmMei')[0].value = msg.firstName;
      document.getElementsByName('nmSeiKana')[0].value = msg.lastNameKana;
      document.getElementsByName('nmMeiKana')[0].value = msg.firstNameKana;
      document.getElementsByName('tel')[0].value = msg.tel;
      document.getElementsByName('email')[0].value = msg.email;
      document.getElementsByName('emailConfirm')[0].value = msg.emailConfirmation;
      document.getElementsByName('birthYear')[0].value = msg.birthYear;
      document.getElementsByName('birthMonth')[0].value = msg.birthMonth;
      document.getElementsByName('birthDay')[0].value = msg.birthDay;
    sendResponse('input completed');
    }
  }
);
