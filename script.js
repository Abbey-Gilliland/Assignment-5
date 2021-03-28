// This sets up the variables needed.
let diameter = 0
let radius = 0
const pi = Math.PI
let area = 0
let circumference = 0
// This makes the calculate button activate the areaCircumference function.
document.getElementById('calculate').addEventListener('click', areaCircumference)
// This assigns the variable diameter to the value of the textbox, then divides it by two and assigns the result to the variable radius.
function areaCircumference () {
  diameter = document.getElementById('diameter').value
  radius = diameter / 2
  // The variable radius is used with the pi variable to calculate the area and circumference of the circle. once that is done, the paragraphs at the bottom are changed to show the results.
  area = radius * radius
  area = area * pi
  circumference = 2 * pi * radius
  document.getElementById('area-answer').innerHTML = area
  document.getElementById('perimeter-answer').innerHTML = circumference
}
