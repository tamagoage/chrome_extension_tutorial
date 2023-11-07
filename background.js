chrome.runtime.onMessage.addListener((request) => {
    // 期待通りのリクエストかどうかを判定
    if (request.name === "displayUrl:background") {
        let url;
        let id;

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            console.log({ tabs });
            url = tabs[0].url;
            id = tabs[0].id;

            // content.scriptへデータを送る
            chrome.tabs.sendMessage(id, {
                name: "displayUrl:contentScripts",
                data: {
                    url,
                },
            });
        });
    }
});
