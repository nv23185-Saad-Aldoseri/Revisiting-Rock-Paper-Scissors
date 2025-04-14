// Get the container element
const container = document.getElementById('container');

// Create a <p> element with red text
const redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I’m red!";
redParagraph.style.color = 'red';
container.appendChild(redParagraph);

// Create an <h3> element with blue text
const blueHeading = document.createElement('h3');
blueHeading.textContent = "I’m a blue h3!";
blueHeading.style.color = 'blue';
container.appendChild(blueHeading);

// Create a <div> with a black border and pink background
const pinkDiv = document.createElement('div');
pinkDiv.style.border = '1px solid black';
pinkDiv.style.backgroundColor = 'pink';

// Create an <h1> inside the <div>
const divHeading = document.createElement('h1');
divHeading.textContent = "I’m in a div";
pinkDiv.appendChild(divHeading);

// Create a <p> inside the <div>
const divParagraph = document.createElement('p');
divParagraph.textContent = "ME TOO!";
pinkDiv.appendChild(divParagraph);

// Append the <div> to the container
container.appendChild(pinkDiv);