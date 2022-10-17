// Listen for messages from the background.js
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'click') {
        console.log("click")
        console.log(document.getElementById("compose-textarea").value)
        if (document.getElementById("compose-textarea").value != null) {
            let mathpix = document.getElementById("compose-textarea").value
            zulip = mathpixToZulipMarkups(mathpix)
            console.log(zulip)
            document.getElementById("compose-textarea").value = zulip
        }
    }
});

function mathpixToZulipMarkups(mathpix) {
    return mathpix.replace(/(?<!\$)\$(?!\$)/g, "$$$$")
}