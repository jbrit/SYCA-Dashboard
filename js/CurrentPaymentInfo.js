console.log("Current Price");

const usersDOM = document.getElementById("currentPaymentInfo");

const featuredUserTemplate = (usersDetails) => {
  return `
          
           <h6>SERVICE NAME ${usersDetails.serviceName} </h6>
           <h6>AMOUNT IN USDCENT ${usersDetails.amountInUSDCents}</h6>
           <h6>CHARGE IN USDCENT ${usersDetails.chargeInUSDCents}</h6>
           
         
     `;
};

const fetchUserList = async () => {
  fetch("https://sycabestaging.herokuapp.com/api/payment/settings", {
    method: "GET",
    //mode: "no-cors",
    // body: JSON.stringify({
    //   USERNAME: demo,
    //   PASSWORD: demo,
    // }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      Token: "11a0e1ff-61b8-4235-bda7-070cabe7ac28",
      //"x-admin-token": "`${adminToken}`",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (res) {
      console.log(res);
      var Users = res.data;

      console.log(Users);
      console.log("Hi");
      Users.forEach((user) => {
        console.log(user);

        usersDetails = {
          serviceName: user.serviceName,
          amountInUSDCents: user.amountInUSDCents,
          chargeInUSDCents: user.chargeInUSDCents,
        };

        let htmlString = featuredUserTemplate(usersDetails);
        let htmlFragment = document.createElement("div");
        htmlFragment.innerHTML = htmlString;
        usersDOM.appendChild(htmlFragment);

        //Totalnouser.inner HTML
      });
    });
};

fetchUserList();
