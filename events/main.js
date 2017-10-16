const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event) {
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () => console.log('move'));

addEventListener('keydown', highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing key at ${event.time}.`));

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
    console.log("Enjoy this while it lasts!");
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click', remove);
}

const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click', () => {
    event.preventDefault();
    console.log("Broken Link!");
});

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) =>
    console.log("Clicked on 'ul'.") );
    
liElement.addEventListener('click', (event) =>
    console.log("Clicked on 'li'.") );
    
ulElement.addEventListener('click', highlight);