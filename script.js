"use strict";

// Chuc nang an thong tin ca nhan
const personalInfo = document.getElementById("personalInfo");
const formEmail = document.getElementById("formEmail");
document.getElementById("submitEmail").addEventListener("click", function () {
  const checkEmail = document.getElementById("exampleInputEmail1").value;

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(checkEmail)) {
    alert("Hay nhap dia chi email hop le.");
  } else {
    personalInfo.classList.remove("hidden");
    formEmail.classList.add("hidden");
  }
});

// Chuc nang an thong tin nghe nghiep
const btnView = document.querySelectorAll(".btnView");
const moreInfo = document.querySelectorAll(".moreInfo");
for (let i = 0; i < btnView.length; i++) {
  btnView[i].addEventListener("click", function () {
    if (btnView[i].innerHTML === "▲ Viewless") {
      moreInfo[i].classList.add("hidden");
      btnView[i].innerHTML = "▼ Viewmore";
    } else {
      moreInfo[i].classList.remove("hidden");
      btnView[i].innerHTML = "▲ Viewless";
    }
  });
}
