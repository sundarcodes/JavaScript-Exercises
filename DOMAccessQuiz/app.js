var marg = 0;

function identifyById() {
  console.log(document.getElementById("para1"));
}

function identifyByClass() {
  console.log(document.getElementsByClassName("class1"));
}

function byTag() {
  console.log(document.getElementsByTagName("p"));
}

function changeBackground() {
  var elem = document.getElementById("block1");
  elem.style.background = "blue";
}

function increaseFont() {
  var elem = document.getElementById("block2");
  elem.style.fontSize = "4em";
}

function changeFontColor() {
  var elem = document.getElementById("block3");
  elem.style.color = "green";
}

function revertColor() {
  var elem = document.getElementById("block3");
  elem.style.color = "black";
}

function hide() {
  var elem = document.getElementById("block4");
  elem.style.visibility = "hidden";
}

function changeBackColor(color, className) {
  var elem = document.getElementsByClassName(className);
  for (i = 0; i < elem.length; i++) {
    elem[i].style.background = color;
  }
}

function numbersOnly(e) {

  var charCode = e.which || e.keycode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

function addAdjacent() {
  var elem = document.getElementById("para2");
  elem.insertAdjacentHTML("afterend", "<p>I got generated on the fly...</p>");
}

function removePara() {
  var elem = document.getElementById("para4");
  elem.remove();
}

function myMove() {
  var elem = document.getElementById("box5");
  var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  elem.style.background = color;
  elem.style.marginLeft = (marg + 5) + 'px';
}

function myFunction() {
  var elem = document.getElementById('fname');
  elem.value = elem.value.toUpperCase();
}

function changeOn() {
  // body...
  var elem = document.getElementById('fname1');
  elem.value = elem.value.toUpperCase();
}

function preferedBrowser() {
  // body...
  var elem = document.getElementById("browsers");
  alert(elem.value);
}

function color(elem) {
  // body...
  elem.style.background = "red";
}

function inputxt() {
  var elem = document.getElementById('demo');
  demo.innerHTML = 'You selected some text';
}

function confirmInput() {

}

function message() {
  alert("Reset");
}

function keydown(n) {
  var elem = n;
  var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  elem.style.background = color;
}

function keypress(n) {
  var elem = document.getElementById('keycode');
  elem.innerHTML = n.which || n.keycode;
}

function keyup() {
  var elem = document.getElementById('fname2');
  elem.value = elem.value.toUpperCase();
}

function writeMessage() {
  var elem1 = document.getElementsByName('myInput')[0];
  var elem2 = document.getElementsByName('mySecondInput')[0];
  elem2.value = elem1.value;
}