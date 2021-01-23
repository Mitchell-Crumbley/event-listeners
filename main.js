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

const sounds = document.querySelector('#sounds');

function playSound (www.youtube.com/watch?v=7mi4h00fedy) {
  var sounds = new Audio(www.youtube.com/watch?v=7mi4h00fedY
    );
    sounds.play();
}

button.addEventListener('click', whatIsTheId);

// TARGET 'other-btn' and on click run whatIsTheID

const otherButton = document.querySelector('#other-btn');

otherButton.addEventListener('click', whatIsTheId);
