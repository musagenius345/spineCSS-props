const slider = document.getElementById("mySlider");
const output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
