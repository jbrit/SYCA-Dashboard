console.log("All users");
// // export const api = {
// //   baseURL: "https://VESTI Dashboard-network.org/api",
// //   allFlights: "/flights/all",
// //   arrivingFlights: "/flights/arrival",
// //   departingFlights: "/flights/departure",
// // };

const usersDOM = document.getElementById("usersInfo");
const NumUsersDOM = document.getElementById("TotalNouser");

const featuredUserTemplate = (usersDetails) => {
  return `
          
           <td class="column1"> ${usersDetails.fullName} </td>
           <td class="column3">${usersDetails.email}</td>
           <td class="column2">${usersDetails.phoneNumber}</td>
           <td class="column4">${usersDetails.walletInNGNKobo}</td>
           <td class="column5">${usersDetails.walletAmountInUSCents}</td>
           <td class="column6">${usersDetails.username}</td>
           <td class="column6 text-success"> False </td>
         
     `;
};

const featuredNumUserTemplate = (NumUsers) => {
  return `
          ${NumUsers} 
        `;
};

let userToken = localStorage.getItem("token");
console.log({ userToken });

const fetchUserList = async () => {
  fetch("https://api.wevesti.com/api/profiles?page=13&page_limit=100", {
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
        let htmlFragment = document.createElement("tr");
        htmlFragment.innerHTML = htmlString;
        usersDOM.appendChild(htmlFragment);

        //Totalnouser.inner HTML
      });
      let htmlStringNumUsers = featuredNumUserTemplate(NumUsers);
      let htmlFragmentNumUsers = document.createElement("div");
      htmlFragmentNumUsers.innerHTML = htmlStringNumUsers;
      NumUsersDOM.appendChild(htmlFragmentNumUsers);
    });
};

fetchUserList();

// GET
// https://sycabestaging.herokuapp.com/api/profiles?page_limit=603
// "paginationMeta": {
//   "currentPage": 1,
//   "nextPage": null,
//   "previousPage": null,
//   "totalObjects": 603,
//   "totalPages": 1,
//   "maxObjectsPerPage": 603
// }
