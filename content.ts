export {}

const contract = /KT1[1-9A-HJ-NP-Za-km-z]{33}/
const wallet = /tz[1-3][1-9A-HJ-NP-Za-km-z]{33}/

var elems = document.querySelectorAll("*"),
  res = Array.from(elems).find(
    (v) => v.textContent.match(contract) || v.textContent.match(wallet)
  )

console.log(res ? "found!" : "not found")
