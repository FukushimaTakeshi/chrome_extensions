chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
    if (msg) {
      var start_list = OPERATION.document.getElementsByName('PeriodStart');
      var end_list = OPERATION.document.getElementsByName('PeriodEnd');
      var work_list = OPERATION.document.getElementsByName('WorkIDSelect');
      var holiday_list = OPERATION.document.getElementsByName('HolidayIDSelect');
      var cause_list = OPERATION.document.getElementsByName('Cause');

      for (var i = 0, len = start_list.length; i < len-1; i++) {
        if (holiday_list[i].value == ' ') {
          start_list[i].value = msg.start;
          end_list[i].value = msg.end;
          work_list[i].value = msg.work;
          cause_list[i].value = msg.cause;
        }
      }
    sendResponse('input completed');
    }
  }
);


// (function () {
//     var start_list = OPERATION.document.getElementsByName('PeriodStart');
//     var end_list = OPERATION.document.getElementsByName('PeriodEnd');
//     var work_list = OPERATION.document.getElementsByName('WorkIDSelect');
//     var holiday_list = OPERATION.document.getElementsByName('HolidayIDSelect');
//     var cause_list = OPERATION.document.getElementsByName('Cause');
//     console.log('test');
//
//     for (var i = 0, len = start_list.length; i < len-1; i++) {
//         if (holiday_list[i].value == ' ') {
//           chrome.storage.local.get(["start", "end", "work", "cause"], function (value) {
//             start_list[i].value = value.start;
//           })
//
//             end_list[i].value = localStorage.getItem("end");
//             work_list[i].value = localStorage.getItem("work");
//             cause_list[i].value = localStorage.getItem("cause");
//         }
//     }
// })();
