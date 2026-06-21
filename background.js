chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "exportLocalStorage") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: exportLocalStorage
        }, (results) => {
          sendResponse({ result: results[0].result });
        });
      });
      return true;
    } else if (message.action === "importLocalStorage") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: importLocalStorage,
          args: [message.data]
        });
      });
    } else if (message.action === "clearLocalStorage") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: clearLocalStorage
        });
      });
    }
  });
  
  function exportLocalStorage() {
    return JSON.stringify(localStorage);
  }
  
  function importLocalStorage(data) {
    const obj = JSON.parse(data);
    for (let key in obj) {
      localStorage.setItem(key, obj[key]);
    }
  }
  
  function clearLocalStorage() {
    localStorage.clear();
  }
  