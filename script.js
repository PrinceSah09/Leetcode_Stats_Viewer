const userName = document.querySelector(".search2");
const submitButton = document.querySelector(".submit_username");
const displayData = document.querySelector(".solvedQuestion");
const reputationData = document.querySelector("#reputation");
const contributionData = document.querySelector("#contribution");
const GlobalRankData = document.querySelector("#GlobalRank");

const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");

function getData(userID = "Princesah999") {
  return fetch(`https://leetcodestats.cyclic.app/${userID}`)
    .then((response) => {
      // Check if the response status is OK (in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displayData.innerHTML = data.totalSolved;
      easy.innerHTML = data.easySolved;
      medium.innerHTML = data.mediumSolved;
      hard.innerHTML = data.hardSolved;
      reputationData.innerHTML = data.reputation;
      contributionData.innerHTML = data.contributionPoints;
      GlobalRankData.innerHTML = data.ranking;
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
}

submitButton.addEventListener("click", () => {
  const userID = userName.value.trim();
  if (userID !== "") {
    getData(userID);
  }
});
