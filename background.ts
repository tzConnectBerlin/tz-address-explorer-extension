const isTezos = (string) => {
  const contract = /KT1[1-9A-HJ-NP-Za-km-z]{33}/
  const wallet = /tz[1-3][1-9A-HJ-NP-Za-km-z]{33}/
  return string.match(contract) || string.match(wallet)
}

chrome.contextMenus.create({
  id: "tzkt-context-menu",
  title: "Check on Tzkt.io",
  contexts: ["selection"]
})

chrome.contextMenus.onClicked.addListener(function (info) {
  let selectedText = info.selectionText
  if (isTezos(selectedText)) {
    chrome.tabs.create({
      url: "https://tzkt.io/" + selectedText
    })
  }
})

export {}