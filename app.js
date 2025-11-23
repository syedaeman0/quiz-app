
var questions = [
    {
        Question: "What is JavaScript?",
        opt1: "JavaScript is a scripting language used to make web pages interactive",
        opt2: "language",
        opt3: "JavaScript is a type of coffee bean grown in Java",
        opt4: "JavaScript is the OS that powers all smartphones",
        ans: "JavaScript is a scripting language used to make web pages interactive"
    },

    {
        Question: "What is boolean in JavaScript?",
        opt1: "false",
        opt2: "true or false",
        opt3: "true",
        opt4: "A boolean is a type of pasta used to store long text",
        ans: "true or false"
    },

    {
        Question: "What is undefined in JavaScript?",
        opt1: "A secret error message when JS gets bored",
        opt2: "A function that fixes your code",
        opt3: "A variable declared but not given a value",
        opt4: "A data type used only to store the number 47",
        ans: "A variable declared but not given a value"
    },
];

var index = 0;
var result = 0;

function renderQues() {
    var container = document.getElementById("container");
    var options = document.getElementsByName("option");
    if (index > 0) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
                if (questions[index - 1].ans === options[i].value) {
                    result++;
                }
                console.log(options[i].value, questions[index - 1].ans, result);
            }
        }
    }

    if (!questions[index]) {
        calculateResult();
        var resultContainer = document.getElementById("result-container");
        resultContainer.style.display = "block";
        container.style.display = "none";
        console.log("Result: " + result);
        return;
    }

    container.innerHTML = `
    <h3 class="text-center text-body-secondary">JavaScript Quiz</h3>

    <p class="question">${index + 1}. ${questions[index].Question}</p>

    <div class="options"><label><input type="radio" name="option" value="${questions[index].opt1}"> ${questions[index].opt1}</label></div>
    <div class="options"><label><input type="radio" name="option" value="${questions[index].opt2}"> ${questions[index].opt2}</label></div>
    <div class="options"><label><input type="radio" name="option" value="${questions[index].opt3}"> ${questions[index].opt3}</label></div>
    <div class="options"><label><input type="radio" name="option" value="${questions[index].opt4}"> ${questions[index].opt4}</label></div>

    <button id="prev" class="m-2 btn btn-primary" onclick="previousQuestion()">Previous</button>
    <button id="next" class="m-2 btn btn-success" onclick="nextQuestion()">Next</button>
    `;

    var prevButton = document.getElementById("prev");
    var nextButton = document.getElementById("next");

    prevButton.disabled = (index == 0);

    if (index == questions.length - 1) {
        nextButton.innerHTML = "Submit";
        nextButton.classList.add("btn-danger");
    }
}

function calculateResult() {
    var score = document.getElementById("score");
    var percentage = ((result / questions.length) * 100).toFixed(2);

    if (percentage > 70) {
        score.innerHTML = "Congratulations! You passed the test.</br> You attempted " + result + " correct answers out of " + questions.length + " questions. </br> Your score is " + percentage + "%";
    } else {
        score.innerHTML = "Sorry! You failed the test.</br> You attempted " + result + " correct answers out of " + questions.length + " questions. </br> Your score is " + percentage + "%";
        score.style.color = "#dc3545";
    }
}

renderQues();

function nextQuestion() {
    index++;
    renderQues();
}

function previousQuestion() {
    if (index > 0) {
        index--;
        renderQues();
    }
}
