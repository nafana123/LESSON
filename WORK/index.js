// ЗАДАНИЕ 1
document.getElementById('display').innerHTML = 'Hello World';

// ЗАДАНИЕ 2
let newElement = document.createElement("p");
newElement.innerHTML = "JS ПРЕКРАСНЫЙ ЯЗЫК";
document.body.appendChild(newElement);

// ЗАДАНИЕ 3
let form = document.getElementById("for");
    form.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    console.log("Имя: " + name);
    console.log("Email: " + email);
  });