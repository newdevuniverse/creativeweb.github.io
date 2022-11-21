const familyBtn = document.getElementById("family-btn");
const familyBody = document.getElementById("family-excuse-body");

familyBtn.addEventListener("click", function () {
  getFamilyExcuse();
});

function getFamilyExcuse() {
  const ajax = new XMLHttpRequest();
  const randomNumArr = {};

  for (let i = 1; i <= 10; i++) {
    randomNumArr[i-1] = i;
  }

  let randomNum = undefined;
  let url = "";
  for (let index = 0; index < 10; index++) {
    randomNum = randomNumArr[Math.floor(Math.random() * 10)];
    url = "https://excuser.herokuapp.com/v1/excuse/id" + "/" + randomNum;
    ajax.open("GET", url, true);
    ajax.onreadystatechange = function () {
      if (this.status == 200 && this.readyState == 4) {
        console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        familyBody.innerHTML = `${data.excuse}`;
      } else {
        this.onerror = this.onerror();
      }
    };
  }

  ajax.send();
}

function onerror() {
  familyBody.textContent = "There was an error!";
}