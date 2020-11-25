var areas = document.getElementsByTagName("area");
var table = document.getElementById("table");

//populate rows and cells
for (i = 0; i < areas.length; i++) {
    var row = table.insertRow(-1);
    var areaName = areas[i].id;
    row.classList.add("part");
    row.id = areaName + "Part";
    row.insertCell(0).innerHTML = i + 1;
    row.insertCell(1).innerHTML = areaName;
    row.insertCell(2).innerHTML = partNumberGen();
    row.insertCell(3).innerHTML = stockNumberGen();
    row.addEventListener("onfocus", gotoDesc);
    console.log(row.id + " has been added");
}

//create variable of all rows containing parts
var parts = document.getElementsByClassName("part");
//add event to image map areas
for (i = 0; i < areas.length; i++) {
    areas[i].addEventListener("mouseenter", highlight);
    areas[i].addEventListener("mouseout", highlight);
};
//highlight row when user hovers over product in image
function highlight() {
    var row = document.getElementById(this.id + "Part");
    row.classList.toggle("highlight");
    console.log(this.id + " is toggled")
};
//generate a random part number
function partNumberGen() {
    var partNumber = "";
    for (var i = 0; i < 6; i++) {
        var gen = Math.floor((Math.random() * 9) + 1);
        partNumber += gen;

    }
    return partNumber;
}
//generate random number of items in stock. 
function stockNumberGen() {
    return Math.floor((Math.random() * 100) + 1);
}
//item description as collapsable div
var desc = document.getElementsByClassName("collapsible");
for (i = 0; i < desc.length; i++) {
    desc[i].addEventListener("click", collapse);
}
//collapse product descriptions
function collapse() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

//take user to product description
function gotoDesc() {
    var rowName = this.id.slice(0, -4);
    location.href = '#' + rowName + 'Description';
}
