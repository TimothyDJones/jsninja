const form = document.forms.search;
const [input, button] = form.elements;

//input.addEventListener('focus', () => alert('focused'), false);

form.addEventListener("submit", search, false);
function search(event) {
    alert(`You searched for: '${input.value}'.`);
    event.preventDefault();
}

input.value = 'Search Here';
input.addEventListener('focus', function() {
    if (input.value === 'Search Here') {
        input.value = "";
    }
}, false);
input.addEventListener('blur', function() {
    if (input.value === "") {
        input.value = 'Search Here';
    }
}, false);