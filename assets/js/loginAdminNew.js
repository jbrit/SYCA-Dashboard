//session management implemented and check out
//import { GetUserCart } from "./cart.js"

var Form = document.getElementById("form");
const userNameDOM = document.getElementById("user");

///////////////////

///////////////////
Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(email);
  console.log(password);

  //
  fetch("https://api.wevesti.com/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      var msg = res.message;

      //this is user id;

      //AT this block, i want to compare the id with the one in user also use the id for cart logic

      if (msg == "Successfully logged in") {
        const token = res.token;

        localStorage.setItem("token", token);
        console.log(token);

        const name = res.data.username;
        console.log("this is : ", name);

        //localStorage.setItem("name", name);
        const container = document.getElementById("containerr");
        const loader = document.createElement("div");
        loader.className = "progress";

        const loadingBar = document.createElement("div");
        loadingBar.className = "indeterminate";
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function () {
          const loaderDiv = document.querySelector("div.progress");
          const panel = document.createElement("div");
          panel.className = "card-panel green";
          const text = document.createElement("span");
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(
              `Log in Successfully !, welcome to VESTI DASHBOARD ${name}`
            )
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        setTimeout(function () {
          window.location.assign("admindashboard/dashboard2.html");
        }, 2200);

        //For authentication
        localStorage.setItem("UserLogin", true);
        console.log("logged in");
      } else {
        const container = document.getElementById("containerr");
        const loader = document.createElement("div");
        loader.className = "progress";
        const loadingBar = document.createElement("div");
        loadingBar.className = "indeterminate";
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function () {
          const loaderDiv = document.querySelector("div.progress");
          const panel = document.createElement("div");
          panel.className = "card-panel green";
          const text = document.createElement("span");
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(`User Not found or Incorrect Password!`)
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        console.log("User Not found or Incorrect Password!");
        alert("User Not found or Incorrect Password!");
      }
    });
});

console.log("hi");

/**
 * {
    "status": "OK",
    "message": "Log in Successful",
    "payload": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWN2b25kZWU1QGdtYWlsLmNvbSIsImlhdCI6MTYwMTk3NzI5OCwiZXhwIjoxNjAzMjczMjk4fQ.pI9QZNZ2Ki_61Ljnn32Ri9zUeUVYzt4Akfd7c0neFQo",
        "email": "ericvondee5@gmail.com",
        "id": "5f4d0fd68cc9aa11e6151b88",
        "fullname": "Eric",
        "gender": "Male"
    }
}
 */
