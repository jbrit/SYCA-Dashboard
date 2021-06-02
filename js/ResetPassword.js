var Form = document.getElementById("formResetPass");

//BEARER TOKEN
// const instance = axios.create(settings);
// const token = getSession();
// if (token != null && !_.isEmpty(token)) {
//   instance.defaults.headers.common.Authorization = `Bearer ${getSession()}`;
// }

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var ResetId = document.getElementById("ResetId").value;
  var NewPassword = document.getElementById("NewPassword").value;

  console.log(ResetId);
  console.log(NewPassword);

  fetch("https://api.wevesti.com/api/auth/forgot-password/confirm", {
    method: "POST",
    body: JSON.stringify({
      resetId: ResetId,
      password: NewPassword,
    }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(function (response) {
      console.log(response.status);
      return response.json();
    })
    .then(function (data) {
      var msg = data.message;

      //this is user id;

      if (msg == "Password updated successfully") {
        const container = document.getElementById("containerrResetPass");
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
            document.createTextNode(`Password updated successfully`)
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);
      } else {
        const container = document.getElementById("containerrResetPass");
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
