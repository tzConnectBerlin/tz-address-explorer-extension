const CONTEXT_MENU_ID = "MY_CONTEXT_MENU"

const isTezos = (string) => {
  const contract = /KT1[1-9A-HJ-NP-Za-km-z]{33}/
  const wallet = /tz[1-3][1-9A-HJ-NP-Za-km-z]{33}/
  return string.match(contract) || string.match(wallet)
}

const getword = (info, tab) => {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return
  }
  console.log("Word " + info.selectionText + " was clicked.")
  chrome.tabs.create({
    url: "https://tzkt.io/" + info.selectionText
  })
}

chrome.contextMenus.onClicked.addListener(getword)

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.request === "updateContextMenu") {
    console.log("CHAU!")
    chrome.contextMenus.create({
      title: "Search: %s",
      contexts: ["selection"],
      id: CONTEXT_MENU_ID
    })
  } else {
    chrome.contextMenus.removeAll();
  }
})

export {}



