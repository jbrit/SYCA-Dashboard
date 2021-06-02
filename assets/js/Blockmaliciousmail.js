//////////////////
//CREATE AUTHORIZATION MODEL => REDIRECT PAGE\

//Michael wake Up

var Form = document.getElementById("form");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;

  console.log(email);

  //AT this block, i want to compare the id with the one in user also use the id for user logic

  if (email) {
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
        document.createTextNode(`You've blocked ` + email + ` Successfully !`)
      );
      panel.appendChild(text);
      container.replaceChild(panel, loaderDiv);
    }, 1000);
  }
});

var FormUnblock = document.getElementById("formUnblock");

FormUnblock.addEventListener("submit", function (e) {
  e.preventDefault();

  var emailUnblock = document.getElementById("emailUnblock").value;

  console.log(emailUnblock);

  //AT this block, i want to compare the id with the one in user also use the id for user logic

  if (emailUnblock) {
    const container = document.getElementById("containerrUnblock");
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
          `You've Removed ` + emailUnblock + ` from Blacklist Successfully !`
        )
      );
      panel.appendChild(text);
      container.replaceChild(panel, loaderDiv);
    }, 1000);
  }
});

console.log("hi");
