//targeting an event

const button = document.querySelector('#main-btn');
const container = document.querySelector('#container');

// // button.addEventListener('click', (event) => {
// //   console.log(`YOU CLICKED ${event.target.id}!`);
// //   })

const whatIsTheId = (event) => {
  console.log(`YOU CLICKED ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
  } else {
    container.innteHTML = 'You clicked the OTHER BUTTON';
  }
}

button.addEventListener('click', whatIsTheId);

// TARGET 'other-btn' and on click run whatIsTheID

const otherButton = document.querySelector('#other-btn');

otherButton.addEventListener('click', whatIsTheId);
