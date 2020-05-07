// console.log('yes it works!');

const paragraph = document.getElementById('second');
// console.log('paragraph: ', paragraph);

paragraph.innerHTML = '<h1>SECOND paragraph</h1>';
paragraph.style.color = 'green';


const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'yellow'
}

const redElements = document.getElementsByClassName('red');

for (let i = 0; i < redElements.length; i++) {
    redElements[i].style.color = 'red'
}

const counter = document.getElementById('counter');

let count = 0;


counter.addEventListener('click', () => {
    // count = count + 1;

    // string concatenation
    // counter.innerHTML = 'You have clicked ' + count + ' times'
    
    count += 1;

    // string interpolation
    if (count === 1) {
        counter.innerHTML = `You have clicked ${count} time`
    } else {
        counter.innerHTML = `You have clicked ${count} times`
    }
})