let draggedId = "";
const boxes = document.querySelectorAll(".box");
const zones = document.querySelectorAll(".drop-zone");
boxes.forEach(function (box) {
    box.ondragstart = function () {
        draggedId = box.id;
    };
});
zones.forEach(function (zone) {
    zone.ondragover = function (e) {
        e.preventDefault();
    };
    zone.ondrop = function () {
        let number = Number(draggedId.substring(3));
        if (number >= 1 && number <= 4 && zone.id === "d1") {
            zone.appendChild(document.getElementById(draggedId));
        }
        else if (number >= 5 && number <= 8 && zone.id === "d2") {
            zone.appendChild(document.getElementById(draggedId));
        }
        else if (number >= 9 && number <= 12 && zone.id === "d3") {
            zone.appendChild(document.getElementById(draggedId));
        }
        else {
            alert("Wrong drop!");
        }
    };
});