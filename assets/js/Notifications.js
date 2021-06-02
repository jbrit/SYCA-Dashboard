var Form = document.getElementById("formBulkEmail");

var FormPush = document.getElementById("formPush");
let userToken = localStorage.getItem("token");
console.log({ userToken });

Form.addEventListener("submit", function (e) {
  e.preventDefault();
  var subject = document.getElementById("subject").value;
  var confirmEmailMsg = document.getElementById("bodyBulk").value;

  console.log(subject);
  console.log(confirmEmailMsg);

  //
  fetch("https://api.wevesti.com/api/send-bulk-email", {
    method: "POST",
    body: JSON.stringify({
      confirmEmailMsg: confirmEmailMsg,
      subject: subject,
    }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${userToken}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      var msg = res.message;

      //this is user id;

      //AT this block, i want to compare the id with the one in user also use the id for cart logic

      if (msg == "Bulk Email Has been sent successfully") {
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
            document.createTextNode(`Bulk Email Has been sent successfully`)
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);
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
            document.createTextNode(
              `An Error occurred!, Unable to send Notification`
            )
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        console.log("An Error occurred!, Unable to send Notification");
      }
    });
});

console.log("hi");

FormPush.addEventListener("submit", function (e) {
  e.preventDefault();
  var subject = document.getElementById("subjectPush").value;
  var confirmPushMsg = document.getElementById("bodyPush").value;

  console.log(subject);
  console.log(confirmPushMsg);

  //
  fetch("https://api.wevesti.com/api/push-Notification", {
    method: "POST",
    body: JSON.stringify({
      confirmPushMsg: confirmPushMsg,
      subject: subject,
    }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${userToken}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      var msg = res.message;

      if (msg == "Push Notification has been sent successfully") {
        //localStorage.setItem("name", name);
        const container = document.getElementById("containerrPush");
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
              `Push Notification has been sent successfully`
            )
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);
      } else {
        const container = document.getElementById("containerrPush");
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
              `An Error occurred!, Unable to send Notification`
            )
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        console.log("An Error occurred!, Unable to send Notification");
      }
    });
});

console.log("bulk emails");
