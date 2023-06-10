const form = document.querySelector("#contactForm");
const fullName = form.querySelector("#name");
const email = form.querySelector("#email");
const phone = form.querySelector("#phone");
const message = form.querySelector("#message");
const submitBtn = form.querySelector("input[type='submit']");
const nameContainer = document.querySelector("#nameContainer");
const emailContainer = document.querySelector("#emailContainer");
const phoneContainer = document.querySelector("#phoneContainer");
const modalWindow = document.querySelector("#modalWindow");
const modalCross = document.querySelector("#modalCross");
const modalNameSpan = modalWindow.querySelector("#modalName");

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
      const name = fullName.value.split(" "[1]);
      restoreForm();
      showMessage(name);
      //modalWindow.classList.remove("contactUs_modal-hidden");
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
    nameContainer.classList.add("contactUs_form_inputContainer-alert");
    fullName.addEventListener("keydown", () => {
      nameContainer.classList.remove("contactUs_form_inputContainer-alert");
    });
    isValid = false;
  }
  if (!email.value) {
    emailContainer.classList.add("contactUs_form_inputContainer-alert");
    email.addEventListener("keydown", () => {
      emailContainer.classList.remove("contactUs_form_inputContainer-alert");
    });
    isValid = false;
  }
  if (!phone.value) {
    phoneContainer.classList.add("contactUs_form_inputContainer-alert");
    phone.addEventListener("keydown", () => {
      phoneContainer.classList.remove("contactUs_form_inputContainer-alert");
    });
    isValid = false;
  }
  return isValid;
}

function showMessage(name) {
  modalNameSpan.innerText = name;
  modalWindow.classList.remove("contactUs_modal-hidden");
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
