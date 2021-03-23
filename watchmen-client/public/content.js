
console.log("Set up event listeners from HomePage Page");

window.addEventListener("message", function(event) {
    if (event.source !== window) return;
    onDidReceiveMessage(event);
});

async function onDidReceiveMessage(event) {
    if (event.data.type && (event.data.type === "GET_URL")) {

        window.postMessage({ type: "GET_URL_RESULT", url: "hello world" }, "*");
    }
}
