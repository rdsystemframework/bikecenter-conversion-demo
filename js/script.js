fetch("bikes.csv")
.then(response => response.text())
.then(data => {

const rows = data.split("\n").slice(1)

const gallery = document.getElementById("bike-gallery")

rows.forEach(row => {

const cols = row.split(",")

const link = cols[0]?.trim()
const image = cols[1]?.trim()

if(!image || image === "") return

const bike = document.createElement("div")
bike.className = "bike"

bike.innerHTML = `
<img src="${image}">
<a class="details" href="${link}" target="_blank">
Produkt ansehen
</a>
`

gallery.appendChild(bike)

})

})
