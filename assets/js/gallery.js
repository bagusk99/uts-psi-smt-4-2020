// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

function show(src, alt) {
  modal.style.display = "block";
  modalImg.src = src;
  captionText.innerHTML = alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}