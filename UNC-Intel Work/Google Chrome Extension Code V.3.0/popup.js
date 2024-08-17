// popup.js

document.getElementById('download').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "downloadTasks" }, response => {
      console.log(response.status);
    });
  });
  