window.onload = function(){
    GetResult();
};

function GetResult() {
    // let user_name = localStorage.getItem("name");
let user_points = localStorage.getItem("points");
// // document.querySelector("span.name").innerHTML = user_name;
document.getElementById("score").textContent = user_points;
}