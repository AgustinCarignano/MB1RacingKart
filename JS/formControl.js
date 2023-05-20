const form = document.querySelector("#contactForm");
const fullName = form.querySelector("#name");
const email = form.querySelector("#email");
const phone = form.querySelector("#phone");
const message = form.querySelector("#message");
const formAlert = form.querySelector("#formAlert");
const submitBtn = form.querySelector("input[type='submit']");
const modalWindow = document.querySelector("#modalWindow");
const modalCross = document.querySelector("#modalCross");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const isValidForm = checkForm();
  if (!isValidForm) {
    form.addEventListener("change", () => {
      formAlert.classList.add("contactUs_form_alert-hidden");
    });
    return formAlert.classList.remove("contactUs_form_alert-hidden");
  } else {
    submitBtn.disabled = true;
    // const resp = await fetch(
    //   "https://formsubmit.co/f41881c3c154fdad8f2a22b2169ad644",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       nombre: fullName.value,
    //       email: email.value,
    //       telefono: phone.value,
    //       mensaje: message.value,
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   }
    // );
    // console.log(resp);
    setTimeout(() => {
      restoreForm();
      modalWindow.classList.remove("contactUs_modal-hidden");
      closeModalBehaviour();
    }, 500);
    // restoreForm();
    // modalWindow.classList.remove("contactUs_modal-hidden");
    // closeModalBehaviour();
  }
});

function checkForm() {
  let isValid = true;
  if (!fullName.value) {
    fullName.classList.add("inputAlert");
    fullName.addEventListener("keydown", () => {
      fullName.classList.remove("inputAlert");
    });
    isValid = false;
  }
  if (!email.value) {
    email.classList.add("inputAlert");
    email.addEventListener("keydown", () => {
      email.classList.remove("inputAlert");
    });
    isValid = false;
  }
  if (!phone.value) {
    phone.classList.add("inputAlert");
    phone.addEventListener("keydown", () => {
      phone.classList.remove("inputAlert");
    });
    isValid = false;
  }
  return isValid;
}

function closeModalBehaviour() {
  modalCross.addEventListener("click", () => {
    modalWindow.classList.add("contactUs_modal-hidden");
  });
  modalWindow.addEventListener("click", (e) => {
    if (e.target.classList.value === "contactUs_modal") {
      modalWindow.classList.add("contactUs_modal-hidden");
    }
  });
}

function restoreForm() {
  fullName.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
  submitBtn.disabled = false;
}
