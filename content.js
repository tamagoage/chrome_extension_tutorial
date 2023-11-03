chrome.runtime.onMessage.addListener((request, options) => {
    console.log("contentscript");
    console.log(options);

    if (request.name === "displayUrl:contentScripts") {
        const body = document.querySelector("body");
        const addElement = document.createElement("h1");

        // 受け取ったURLを表示
        addElement.textContent = `URL is ${request.data.url}`;

        body.prepend(addElement);
    }
});
