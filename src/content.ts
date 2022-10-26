chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "start" ) {
            start();
        }
    }
);

function start(){
    document.body.style.backgroundColor = 'red'
}
