
<script>

fetch("bikes.csv")
.then(response => response.text())
.then(data => {

let rows = data.split("\n");
let gallery = document.getElementById("bike-gallery");

rows.slice(1).forEach(row => {

let cols = row.split(",");

let name = cols[0];
let price = cols[1];
let image = cols[2];
let link = cols[3];

let bike = document.createElement("div");
bike.className = "bike";

bike.innerHTML = `
<img src="${image}">
<h3>${name}</h3>
<p>${price}</p>
<a href="${link}" target="_blank">Details</a>
<a href="#probefahrt">Probefahrt</a>
`;

gallery.appendChild(bike);

});

});

</script>
