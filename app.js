let count = 0;
let Timecounter = 60;

const timerInterval = setInterval(() => {
    if (Timecounter >= 0) {
        document.getElementById("currentTimer").innerHTML = --Timecounter;
    } else {
        clearInterval(timerInterval);
        localStorage.setItem("finalScore", count);
        window.location.href = "result.html";
    }
}, 1000);

window.onload = function() {
    const username = localStorage.getItem("username") || "Guest";
    document.querySelector(".bottom-right").textContent = "user:" + username;
};

function hideBird(clicked_id) {
    document.getElementById("currentScore").innerHTML = ++count;
    document.getElementById("fireSound").play();
    document.getElementById(clicked_id).style.display = "none";
    let x = Math.floor((Math.random() * 10) + 1);
    setTimeout(() => {
        document.getElementById(clicked_id).style.display = "block";
    }, x * 1000);
}