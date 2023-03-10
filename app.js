const lights = document.getElementById("lights");
const colorPicker = document.getElementById("colorpicker");
const light1 = document.getElementById("light1");
const light2 = document.getElementById("light2");
const light3 = document.getElementById("light3");

lights.addEventListener("change", function() {
  switch (lights.value) {
    case "light1":
      changeColor(light1);
      break;
    case "light2":
      changeColor(light2);
      break;
    case "light3":
      changeColor(light3);
      break;
  }
});

function changeColor(light) {
  light.style.backgroundColor = colorPicker.value;
}
