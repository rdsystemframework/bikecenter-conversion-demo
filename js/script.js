fetch("bikes.csv")
.then(response => response.text())
.then(data => {

const rows = data.split("\n").slice(1)

const gallery = document.getElementById("bike-gallery")

rows.forEach(row => {

const cols = row.split(",")

const productLink = cols[0].replace(/"/g,"")
const imageLink = cols[1].replace(/"/g,"")

if(!imageLink) return

const bike = document.createElement("div")
bike.className = "bike"

bike.innerHTML = `
<img src="${imageLink}">
<a class="details" href="${productLink}" target="_blank">
Produkt ansehen
</a>
`

gallery.appendChild(bike)

})

})
