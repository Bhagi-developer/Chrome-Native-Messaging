let vscode = document.getElementById("vscode");
let git = document.getElementById("git");
let node = document.getElementById("node");
let notepad = document.getElementById("notepad");

var port = null;

vscode.addEventListener("click", () => {
  port = chrome.runtime.connectNative("com.bhagi.vscode");
  onDisconnect();
});

git.addEventListener("click", () => {
  port = chrome.runtime.connectNative("com.bhagi.git");
  onDisconnect();
});

node.addEventListener("click", () => {
  port = chrome.runtime.connectNative("com.bhagi.node");
  onDisconnect();
});

notepad.addEventListener("click", () => {
  port = chrome.runtime.connectNative("com.bhagi.notepad");
  onDisconnect();
});

function onDisconnect() {
  port.onDisconnect.addListener(function () {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
    }
  });
}
