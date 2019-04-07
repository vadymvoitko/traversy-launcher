try {
  chrome.devtools.panels.create("Observable",
    "icon.png",
    "popup.html",
    function (panel) {
      
    }
  );
} catch (err) {
  console.log(err)
}

// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     console.log(sender.tab ?
//       "from a content script:" + sender.tab.url :
//       "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({
//         farewell: "goodbye"
//       });
//   });

chrome.tabs.query({
  active: true,
  currentWindow: true
}, function (tabs) {
  console.log('sfd');
  chrome.tabs.sendMessage(tabs[0].id, {
    greeting: "hello"
  }, function (response) {
    console.log(response);
  });
});

// chrome.runtime.onConnect.addListener(function (port) {
//   console.log('aaaa')
//   console.assert(port.name == "knockknock");
//   port.onMessage.addListener(function (msg) {
//     if (msg.joke == "Knock knock")
//       port.postMessage({
//         question: "Who's there?"
//       });
//     else if (msg.answer == "Madame")
//       port.postMessage({
//         question: "Madame who?"
//       });
//     else if (msg.answer == "Madame... Bovary")
//       port.postMessage({
//         question: "I don't get it."
//       });
//   });
// });

