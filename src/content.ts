chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === 'start' ) {
            start();
        }
    }
);

function start(){
    const styleTag = document.createElement('link')
    styleTag.rel = 'stylesheet'
    styleTag.href = chrome.runtime.getURL('css/style.css')
    console.log(styleTag.href)
    document.head.appendChild(styleTag)
}
