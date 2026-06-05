const text = [
    "Data Entry Expert",
    "Excel Dashboard Creator",
    "Data Cleaning Specialist",
    "Future Data Analyst"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
})();

const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if(hour < 12){
    greeting.textContent = "☀️ Good Morning!";
}
else if(hour < 18){
    greeting.textContent = "🌤️ Good Afternoon!";
}
else{
    greeting.textContent = "🌙 Good Evening!";
}
