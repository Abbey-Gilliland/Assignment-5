// This sets up the variables needed.
let diameter = 0
let radius = 0
let pi = Math.PI;
let area = 0
let circumference = 0

document.getElementById('calculate').addEventListener('click', areaCircumference)

function areaCircumference () {
  diameter = document.getElementById('diameter').value
  radius = diameter / 2
  area = radius * radius
  area = area * pi
  circumference = 2 * pi * radius
  document.getElementById('area-answer').innerHTML = area
  document.getElementById('perimeter-answer').innerHTML = circumference
}
