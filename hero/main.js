const form = document.forms["hero"];
form.addEventListener("submit", makeHero, false);
form.addEventListener("submit", validate, false);

document.forms.hero.power[0].checked = true;   // Set "Flight" power to 'checked' by default.

function makeHero(event) {
    event.preventDefault();     // prevent form from being submitted to back end
    const hero = {};            // create empty object instance
    hero.name = form.heroName.value;    // Get value from form field
    hero.realName = form.realName.value;
    hero.power = [];
    for (let i = 0; i < form.power.length; i++) {
        if (form.power[i].checked) {
            hero.power.push(form.power[i].value);
        }
    }
    hero.category = form.category.value;
    hero.age = parseInt(form.age.value);
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    alert(JSON.stringify(hero));    // Convert JSON object to JSON string and display.
}

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === "X") {
        event.preventDefault();
        alert("Your name cannot start with 'X'!");
    }
}

form.heroName.addEventListener('keyup', validateInline, false);

const label = form.querySelector('label');
const error = document.createElement("div");
error.classList.add("error");
error.textContent = "! Your name cannot start with 'X'!";
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

// Disable submit button until heroName and realName populated
form.heroName.addEventListener('blur', disableSubmit, false);
form.realName.addEventListener('blur', disableSubmit, false);

function disableSubmit(event) {
    if (event.target.value === "") {
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}