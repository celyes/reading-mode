window.addEventListener('DOMContentLoaded', function () {
    const activationButton = document.getElementById('activate-reading-mode-btn')!
    activationButton.addEventListener('click', function() {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id!, {"message": "start", "tabId": tabs[0].id!});
        });
    })
})