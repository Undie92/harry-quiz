window.onload = function(){
    getResult();
};

function getResult() {
let user_points = localStorage.getItem("points");
document.getElementById("score").textContent = user_points;
}