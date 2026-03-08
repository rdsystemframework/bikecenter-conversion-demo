fetch("images/bikecenter.csv")
.then(response => response.text())
.then(data => {

let rows = data.split("\n");

let gallery = document.getElementById("bike-gallery");

rows.slice(1).forEach(row => {

let cols = row.split(";");

let link = cols[0];
let image = cols[1];

if(!image) return;

let bike = document.createElement("div");
bike.className = "bike";

bike.innerHTML = `
<img src="${image}">
<a href="${link}" target="_blank">Details</a>
`;

gallery.appendChild(bike);

});

});
