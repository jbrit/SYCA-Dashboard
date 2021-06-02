var Form = document.getElementById("formSendLink");

let myStatus;

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("sendEmail").value;

  console.log(email);

  fetch("https://api.wevesti.com/api/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      redirectURL: "https://app.wevesti.com/auth/reset-password/",
    }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(function (response) {
      myStatus = response.status;
      console.log(myStatus);
      return response.json();
    })
    .then(function (data) {
      var msg = data.message;
      //var myStatus = response.status;

      //this is user id;

      if (myStatus == 201) {
        const container = document.getElementById("containerrSendLink");
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
          text.appendChild(document.createTextNode(`${msg}`));
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);
      } else {
        const container = document.getElementById("containerrSendLink");
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
            document.createTextNode(`An error occurred, Try Again!`)
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        console.log("An error occurred, Try Again!");
      }
    });
});

console.log("hi");
