console.log("User's KYC");

const usersKycDOM = document.getElementById("usersKycDOM");

const featuredUserTemplate = (usersDetails) => {
  return `
          
            <div class="product">
              <a class="product-img" href="shop_detail_fullwidth.html?product=${productDetails.id}">
                <img alt="product" src="${usersDetails.KycImageUrl}" height="200" width="250">
              </a>
                <h5 class="product-type">${usersDetails.fullname}</h5>                          
              </div>
   
     `;
};

let userToken = localStorage.getItem("token");
console.log({ userToken });

const fetchUserList = async () => {
  fetch("http://api.wevesti.com/api/kyc-documents?page=1&page_limit=100", {
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
      authorization: `Bearer ${userToken}`,
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (res) {
      console.log(res);
      var Users = res.data;
      let NumUsers = res.paginationMeta.totalObjects;
      console.log(NumUsers);
      console.log(Users);
      console.log("Hi");
      Users.forEach((user) => {
        console.log(user);
        var fullN = user.firstName + " " + user.lastName;
        usersDetails = {
          fullName: fullN,
          username: user.username,
          walletInNGNKobo: user.walletInNGNKobo,
          walletAmountInUSCents: user.walletAmountInUSCents,
          email: user.email,
          phoneNumber: user.phoneNumber,
          hasVerifiedKyc: user.hasVerifiedKyc,
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
