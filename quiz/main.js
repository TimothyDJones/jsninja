//alert("Welcome to Quiz Ninja!");

const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Dianna Prince" },
    { name: "Batman", realName: "Bruce Wayne" }
];

// View Object - For updating page.
// It also defines its own namespace named 'view'.
const view = {
    score: document.querySelector("#score strong"),
    question: document.getElementById("question"),
    result: document.getElementById("result"),
    info: document.getElementById("info"),
    start: document.getElementById("start"),
    response: document.querySelector('#response'),
    timer: document.querySelector('#timer strong'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element) {
        element.style.display = 'block';
    },
    hide(element) {
        element.style.display = 'none';
    },
    setup() {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, "");
        this.render(this.info, "");
        this.resetForm();
    },
    resetForm() {
        this.response.answer.value = "";
        this.response.answer.focus();
    },
    teardown() {
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
};

const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;      // initialize score
        this.secondsRemaining = 20;
        this.timer = setInterval(this.countdown, 1000);
        view.setup();
        this.ask();
/*
        // Main game loop
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }

        this.gameOver();
*/        
    },

        // Function declarations
        ask() {
            if (this.questions.length > 0) {
                this.question = this.questions.pop();      // Pull next question from *end* of list.
                const question = `What is ${this.question.name}'s real name?`;
                view.render(view.question, question);
            } else {
                this.gameOver();
            }
/*            const response = prompt(question);
            this.check(response);  */
        },

        check(event) {
            event.preventDefault();
            const response = view.response.answer.value;
            const answer = this.question.realName;
            if (response === answer) {
                view.render(view.result, "Correct!", {"class": "correct"});
                //alert("Correct!");
                this.score++;
                view.render(view.score, this.score);
            } else {
                view.render(view.result, `Wrong! The correct answer is ${answer}.`,
                            {"class": "wrong"});
                //alert(`Wrong! The correct answer is ${answer}.`);
            }
            view.resetForm();
            this.ask();         // Ask next question (if any).
        },
        
        countdown() {
            game.secondsRemaining--;
            view.render(view.timer, game.secondsRemaining);
            if (game.secondsRemaining < 0) {
                game.gameOver();
            }
        },

        gameOver() {
            // At the end of the game, report the final score.
            view.render(view.info, `Game Over.\nYou scored ${this.score} point${this.score > 1 ? 's' : ''}.`);
            view.teardown();
            clearInterval(this.timer);
/*            view.show(view.start);
            alert(`Game Over.\nYou scored ${this.score} point${this.score > 1 ? 's' : ''}.`);  */
        }
}

game.start(quiz);

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event) );
//view.hide(view.response);