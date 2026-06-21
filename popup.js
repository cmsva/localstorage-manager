document.getElementById("export").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "exportLocalStorage" }, (response) => {
    document.getElementById("localStorageData").value = response.result;
  });
});

document.getElementById("import").addEventListener("click", () => {
  const data = document.getElementById("localStorageData").value;
  chrome.runtime.sendMessage({ action: "importLocalStorage", data: data });
});

document.getElementById("copy").addEventListener("click", () => {
  const textArea = document.getElementById("localStorageData");
  textArea.select();
  document.execCommand("copy");
});

document.getElementById("clear").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "clearLocalStorage" });
  document.getElementById("localStorageData").value = "";
});

document.getElementById("download").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "exportLocalStorage" }, (response) => {
    const blob = new Blob([response.result], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "localStorage.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
});

document.getElementById("reload").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
  });
});