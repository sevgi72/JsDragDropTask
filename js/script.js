let draggedId = "";

const boxes = document.querySelectorAll(".box");
const zones = document.querySelectorAll(".drop-zone");


boxes.forEach(function(box) {
  box.addEventListener("dragstart", function() {
    draggedId = box.id;
  });
});

zones.forEach(function(zone) {
  zone.addEventListener("dragover", function(e) {
    e.preventDefault();
  });

  zone.addEventListener("drop", function() {

    let number = parseInt(draggedId.substring(3));
    if (number >= 1 && number <= 4 && zone.id === "drop1") {
      zone.appendChild(document.getElementById(draggedId));
    }
    else if (number >= 5 && number <= 8 && zone.id === "drop2") {
      zone.appendChild(document.getElementById(draggedId));
    }
    else if (number >= 9 && number <= 12 && zone.id === "drop3") {
      zone.appendChild(document.getElementById(draggedId));
    }
    else {
      alert("Wrong drop!");
    }

  });
});