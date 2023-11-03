// ボタンクリック時に実行する処理を定義
const button = document.getElementById("display");
button.addEventListener("click", () => {
    chrome.runtime.sendMessage({ name: "displayUrl:background" });
});
