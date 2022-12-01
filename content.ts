import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://*/*"]
}

const isTezos = (string) => {
  const contract = /KT1[1-9A-HJ-NP-Za-km-z]{33}/
  const wallet = /tz[1-3][1-9A-HJ-NP-Za-km-z]{33}/
  return string.match(contract) || string.match(wallet)
}

document.addEventListener("selectionchange", function () {
  var selection = window.getSelection().toString().trim()
  if (isTezos(selection)) {
    console.log("HOLA")
    chrome.runtime.sendMessage({
        request: 'updateContextMenu',
        selection: selection
    });
  } else {
    chrome.contextMenus.removeAll();
  }
})
