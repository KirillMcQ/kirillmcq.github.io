var boldBtn = document.querySelector(".bold");
var italicBtn = document.querySelector(".italic");
var underlineBtn = document.querySelector(".underline");
var colorPicker = document.querySelector(".color-picker");
var highlightBtn = document.querySelector("#highlight");
var bulletPointBtn = document.querySelector("#bulletPoint");
var fontSize = document.querySelector("#fontSize");
var fontInput = document.querySelector("#fontInput");

boldBtn.addEventListener("click", function () {
  boldBtn.classList.toggle("inUse");
});

italicBtn.addEventListener("click", function () {
  italicBtn.classList.toggle("inUse");
});

underlineBtn.addEventListener("click", function () {
  underlineBtn.classList.toggle("inUse");
});

highlightBtn.addEventListener("click", function () {
  highlightBtn.classList.toggle("inUse");
});

const changeColorText = (color) => {
  document.execCommand("styleWithCSS", false, true);
  document.execCommand("foreColor", false, color);
};

document.getElementById("highlight").addEventListener("click", function () {
  var range = window.getSelection().getRangeAt(0),
    span = document.createElement("span");

  span.className = "highlight";
  span.appendChild(range.extractContents());
  range.insertNode(span);
});
//Add a bullet point using the html tag <ul> when the user clicks on the bullet point button
bulletPointBtn.addEventListener("click", function () {
  document.execCommand("insertHTML", false, "<ul><li>&nbsp;</li></ul>");
});

function changeFont() {
  document.execCommand("fontSize", false, "7");
  var fontElements = document.getElementsByTagName("font");
  for (var i = 0, len = fontElements.length; i < len; ++i) {
    if (fontElements[i].size == "7") {
      fontElements[i].removeAttribute("size");
      fontElements[i].style.fontSize = fontInput.value + "px";
    }
  }
}
