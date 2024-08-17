function logEvent(event) {
  const task = { 
    name: 'event', 
    type: event.type, 
    start: event.timeStamp, 
    duration: 0, 
    end: event.timeStamp 
  };
  console.log(`Event: ${event.type}, Time: ${event.timeStamp}`);
  chrome.runtime.sendMessage({ action: "logTask", data: task });
}

// Handle click and keypress events
document.addEventListener('click', logEvent);
document.addEventListener('keypress', logEvent);

// Define a callback function to process performance entries
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const endTime = entry.startTime + entry.duration;
    const task = { 
      name: entry.name, 
      type: entry.entryType, 
      start: entry.startTime, 
      duration: entry.duration, 
      end: endTime 
    };
    console.log(`Name: ${entry.name}, Type: ${entry.entryType}, Start: ${entry.startTime}, Duration: ${entry.duration}, End: ${endTime}`);
    chrome.runtime.sendMessage({ action: "logTask", data: task });
  });
});

// Start observing all specified performance entry types
observer.observe({ entryTypes: [
  'element', 
  'event', 
  'first-input', 
  'largest-contentful-paint', 
  'layout-shift', 
  'longtask', 
  'mark', 
  'measure', 
  'navigation', 
  'paint', 
  'resource'
] });

console.log('Content script injected and event listeners attached.');
