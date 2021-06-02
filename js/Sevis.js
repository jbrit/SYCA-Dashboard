var Form = document.getElementById("formSevis");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var AmusdSevis = document.getElementById("AmusdSevis").value;
  var ChusdSevis = document.getElementById("ChusdSevis").value;

  console.log(AmusdSevis);
  console.log(ChusdSevis);

  fetch("https://sycabestaging.herokuapp.com/api/payment/settings", {
    method: "PATCH",
    body: JSON.stringify({
      amountInUSDCents: AmusdSevis,
      chargeInUSDCents: ChusdSevis,
      type: "SEVIS",
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
    .then(function (data) {
      var msg = data.message;

      //this is user id;

      if (msg == "Settings successfully updated") {
        const container = document.getElementById("containerrSevis");
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
            document.createTextNode(`Settings successfully updated`)
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);
      } else {
        const container = document.getElementById("containerrSevis");
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
