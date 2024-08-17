let tasks = [];

// Log when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Handle the action button click
chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    }).catch((error) => {
      console.error('Script execution failed:', error);
    });
  } else {
    console.error('Tab ID is not available.');
  }
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "logTask") {
    tasks.push(message.data);
    sendResponse({ status: "Task logged" });
  }

  if (message.action === "downloadTasks") {
    if (tasks.length === 0) {
      sendResponse({ status: "No tasks to download" });
      return;
    }

    // Prepare CSV header
    const header = "name,type,start,duration,end";
    
    // Map tasks to CSV rows
    const rows = tasks.map(task => [
      task.name || '',
      task.type || '',
      task.start || '',
      task.duration || '',
      task.end || ''
    ].join(','));

    // Combine header and rows with newline separation
    const csvContent = header + '\n' + rows.join('\n');
    
    // Encode URI and trigger download
    const encodedUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
    chrome.downloads.download({
      url: encodedUri,
      filename: 'tasks.csv'
    }, (downloadId) => {
      if (chrome.runtime.lastError) {
        console.error('Download failed:', chrome.runtime.lastError);
      } else {
        console.log(`Download started with ID: ${downloadId}`);
      }
    });

    sendResponse({ status: "Tasks downloaded" });
  }
});
