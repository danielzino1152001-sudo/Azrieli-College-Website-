document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const emailButton = document.getElementById("emailButton");
  const clearNotesButton = document.getElementById("clearNotes");
  const notesField = document.getElementById("notes");
  const confirmSendEmailButton = document.getElementById("confirmSendEmail");
  const emailSendSection = document.getElementById("emailSendSection");
  const sendEmail = document.getElementById("sendEmail");
  const sendEmailError = document.getElementById("sendEmailError");

  const fullName = document.getElementById("fullName");
  const idNumber = document.getElementById("idNumber");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const majorRadios = document.querySelectorAll("input[name='major']");

  const nameError = document.getElementById("nameError");
  const idError = document.getElementById("idError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const majorError = document.getElementById("majorError");

  const currentDateField = document.getElementById("currentDate");

  function setCurrentDate() {
  const now = new Date();
  const date = now.toLocaleDateString('he-IL');
  const time = now.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
  currentDateField.value = `${date} ${time}`;
  }
  setCurrentDate();


  function clearErrors() {
    nameError.textContent = "";
    idError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    majorError.textContent = "";
    sendEmailError.textContent = "";
  }

  function hideEmailSection() {
  emailSendSection.style.display = "none";
  sendEmail.value = "";
  }

  function isMajorSelected() {
    return Array.from(majorRadios).some(r => r.checked);
  }

  fullName.addEventListener("input", () => nameError.textContent = "");
  idNumber.addEventListener("input", () => idError.textContent = "");
  phone.addEventListener("input", () => phoneError.textContent = "");
  email.addEventListener("input", () => emailError.textContent = "");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();
    let valid = true;
    let firstInvalidField = null;

    if (fullName.value.trim() === "") {
      nameError.textContent = "נא להזין שם מלא";
      if (!firstInvalidField) firstInvalidField = fullName;
      valid = false;
    }

    if (idNumber.value.trim() === "") {
      idError.textContent = "נא להזין תעודת זהות";
      if (!firstInvalidField) firstInvalidField = idNumber;
      valid = false;
    }
    else if (!/^\d{9}$/.test(idNumber.value.trim())) {
      idError.textContent = "מספר תעודת זהות לא חוקי";
      idNumber.value = "";
      if (!firstInvalidField) firstInvalidField = idNumber;
      valid = false;
    }

    if (email.value.trim() === "") {
      emailError.textContent = "נא להזין כתובת אימייל";
      if (!firstInvalidField) firstInvalidField = email;
      valid = false;
    } 
    else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "כתובת אימייל לא חוקית";
        if (!firstInvalidField) firstInvalidField = email;
        valid = false;
      }
    }

    if (phone.value.trim() === "") {
      phoneError.textContent = "נא להזין מספר טלפון";
      if (!firstInvalidField) firstInvalidField = phone;
      valid = false;
      } 
    else if (!/^05\d{8}$/.test(phone.value.trim())) {
      phoneError.textContent = "מספר טלפון לא חוקי";
      phone.value = "";
      if (!firstInvalidField) firstInvalidField = phone;
      valid = false;
    }

    if (!isMajorSelected()) {
      majorError.textContent = "נא לבחור מגמת לימוד";
      if (!firstInvalidField) firstInvalidField = majorError;
      valid = false;
    }

    if (!valid && firstInvalidField) {
      firstInvalidField.focus();
      firstInvalidField.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    alert("הטופס נשלח בהצלחה. נהיה בקשר!");
    form.reset();
    clearErrors();
    hideEmailSection();
    setCurrentDate();

  });

  emailButton.addEventListener("click", function () {
    emailSendSection.style.display = "block";
    sendEmail.focus();
  });

  confirmSendEmailButton.addEventListener("click", function () {
    const val = sendEmail.value.trim();
    sendEmailError.textContent = "";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(val)) {
      sendEmailError.textContent = "כתובת אימייל לא חוקית";
      sendEmail.focus();
      return;
    }
    alert("הטופס נשלח לכתובת: " + val);
    hideEmailSection();
  });

  clearNotesButton.addEventListener("click", function () {
    notesField.value = "";
  });

  form.addEventListener("reset", function () {
    hideEmailSection();
    clearErrors();
    setTimeout(setCurrentDate, 0);

  });

});




(function () {
  const menuLinks = document.querySelectorAll(".menu a");
  const logo = document.querySelector(".logo");

  // אפקט על תפריט
  menuLinks.forEach(link => {
    const text = link.textContent.trim();
    if (text === "אודות המכללה") return;

    link.addEventListener("mouseenter", () => {
      link.classList.add("custom-hover-effect");
      link.style.transition = "transform 0.2s ease-in-out";
      const randX = Math.floor(Math.random() * 10 - 5);
      const randY = Math.floor(Math.random() * 10 - 5);
      link.style.transform = `rotate(${Math.random() * 360}deg) translate(${randX}px, ${randY}px)`;
    });

    link.addEventListener("mouseleave", () => {
      link.classList.remove("custom-hover-effect");
      link.style.transform = "none";
    });
  });

  // אפקט על לוגו
  if (logo) {
    logo.style.transition = "all 0.4s ease";
    logo.addEventListener("mouseenter", () => {
      logo.style.transform = "scale(1.3) rotate(15deg)";
      logo.style.filter = "drop-shadow(0 0 10px yellow) hue-rotate(45deg) saturate(200%)";
    });

    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "scale(1) rotate(0deg)";
      logo.style.filter = "none";
    });
  }
})();

(function () {
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.classList.add("custom-hover-effect");
      link.style.transition = "transform 0.3s ease-in-out";
      link.style.transform = `rotate(${Math.random() * 360}deg)`;
    });

    link.addEventListener("mouseleave", () => {
      link.classList.remove("custom-hover-effect");
      link.style.transform = "none";
    });

    link.addEventListener("click", () => {
      document.body.classList.add("page-shake");

      // אין תיבת טקסט בכלל

      setTimeout(() => {
        document.body.classList.remove("page-shake");
      }, 1000);
    });
  });
})();