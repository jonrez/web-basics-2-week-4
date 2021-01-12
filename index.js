//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'


//resolve // QUESTION 1 here
const oldDiv = document.getElementById('a-1')
const newDiv = document.createElement('div')
const q1Label = document.querySelector('.question-label')
oldDiv.appendChild(newDiv)
newDiv.className = 'square'

oldDiv.addEventListener('click', (e) => {
  const button = e.target
  if (button.className === 'square' && q1Label.textContent == "Question 1: if you click the square below the text changes 'x' to 'o' or vice versa"){
    q1Label.textContent = "Question 1: if you click the square below the text changes 'o' to 'x' or vice versa"
  }else if (button.className === 'square')
    q1Label.textContent = "Question 1: if you click the square below the text changes 'x' to 'o' or vice versa"
})




//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];




//resolve // QUESTION 2 here
const list = document.getElementById('a-2')

for (let i = 0; i < colors.length; i ++) {
  const li = document.createElement('li')
  li.textContent = colors[i]
  const removeButton = document.createElement('button')
  removeButton.textContent = 'remove'
  li.appendChild(removeButton)
  list.appendChild(li)
}

list.addEventListener('click', (e) => {
  li = e.target.parentNode
  list.removeChild(li)
})






//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

const measurements = document.getElementById('a-3')

const calculateSphere = () =>{
  lablesAndInputs = measurements.children
  const radius = document.getElementById('radius')
  const volInput = document.getElementById('volume')
  const surfaceInput = document.getElementById('area')
  var volume = (4/3) * (parseInt(radius.value)^3) * Math.PI
  var surfaceArea = 4 * Math.PI * (radius^2)

  if (radius.value > 0){
    volInput.value = volume
    surfaceInput.value = surfaceArea
  }else {
    volInput.value = 0
    surfaceInput.value = 0
  }
 }




//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer.
const buttons = ['1', '2', '3']
const listOfButtons = document.getElementById('a-4')

for (let i = 0; i < buttons.length; i ++) {
  const li = document.createElement('button')
  li.textContent = `hide answere #${buttons[i]}`
  listOfButtons.appendChild(li)
}

listOfButtons.addEventListener('click', (e) => {
  if (e.target.textContent === 'hide answere #1'){
    oldDiv.removeChild(newDiv)
    q1Label.textContent = "Question 1: if you click the square below the text changes 'x' to 'o' or vice versa"

  }else if(e.target.textContent === 'hide answere #2'){
     list.style.display = 'none'

   }else if (e.target.textContent === 'hide answere #3'){
     measurements.style.display = 'none'
   }
})
//resolve // QUESTION 4 here
