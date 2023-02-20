window.onload = function(){
    getResult();
    getUserName();
};

// Function to print out stored value of correct answer points

function getResult() {
let user_points = localStorage.getItem("points");
document.getElementById("score").textContent = user_points;
}

// Function to get the locally stored user input from index page.

function getUserName() {
    let user_name = localStorage.getItem("name");
    document.getElementById("user").innerHTML = user_name;
}