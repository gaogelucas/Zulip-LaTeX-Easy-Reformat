chrome.action.onClicked.addListener(async (tab) => {
  chrome.tabs.sendMessage(tab.id, { text: "click" });

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
