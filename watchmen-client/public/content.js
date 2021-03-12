
console.log("Hi from content.js");


/*
window.addEventListener("message", function(event) {
    if (event.source !== window) return;
    onDidReceiveMessage(event);
});

async function onDidReceiveMessage(event) {
    if (event.data.type && (event.data.type === "GET_URL")) {

        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            console.log(url);
            window.postMessage({ type: "URL_RESULT", url: `${url}` }, "*");
        });
    }
}
*/