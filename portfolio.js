let form = document.getElementById("form");
let names = document.getElementById("name");
let name_error = document.querySelector(".name_error");
let em = document.getElementById("email");
let em_error = document.querySelector(".email_error");
let phone = document.getElementById("phone");
let phone_error = document.querySelector(".phone_error");
let text = document.getElementById("text");
let text_error = document.querySelector(".text_error");

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission by default

  let isValid = true;

  // Name validation
  if (names.value.trim() === "") {
    name_error.textContent = "Name is Required!";
    names.classList.add("border_error");
    isValid = false;
  } else {
    name_error.textContent = "";
    names.classList.remove("border_error");
  }

  // Email validation
  if (!em.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    em_error.textContent = "Invalid Email!";
    em.classList.add("border_error");
    isValid = false;
  } else {
    em_error.textContent = "";
    em.classList.remove("border_error");
  }

  // Phone validation
  if (phone.value.trim() === "") {
    phone_error.textContent = "Phone Number is Required!";
    phone.classList.add("border_error");
    isValid = false;
  } else if (phone.value.length !== 10) {
    phone_error.textContent = "Phone Number should have 10 digits!";
    phone.classList.add("border_error");
    isValid = false;
  } else {
    phone_error.textContent = "";
    phone.classList.remove("border_error");
  }

  // Comment validation
  if (text.value.trim() === "") {
    text_error.textContent = "This field is Required!";
    text.classList.add("border_error");
    isValid = false;
  } else {
    text_error.textContent = "";
    text.classList.remove("border_error");
  }

  // Submit only if all fields are valid
  if (isValid) {
    send_mail();
  }
});

function send_mail() {
  const params = {
    name: names.value,
    email: em.value,
    phone: phone.value,
    comment: text.value
  };

  emailjs.send("service_0ypr31c", "template_xcgbb2p", params)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      swal("Thank You!", "Your Form Has been Submitted Successfully!", "success");
      form.reset(); // clear form
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Email sending failed: " + JSON.stringify(error));
    });
}
