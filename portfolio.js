let form = document.getElementById("form");
let names = document.getElementById("name");
let name_error = document.querySelector(".name_error");
let em = document.getElementById("email");
let em_error = document.querySelector(".email_error");
let phone = document.querySelector("#phone");
let phone_error = document.querySelector(".phone_error");
let text = document.querySelector("#text");
let text_error = document.querySelector(".text_error");

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent by default, only submit on valid

  let isValid = true;

  // Name validation
  if (names.value.trim() === "") {
    name_error.innerHTML = "Name is Required!";
    names.classList.add("border_error");
    isValid = false;
  } else {
    name_error.innerHTML = "";
    names.classList.remove("border_error");
  }

  // Email validation
  if (!em.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    em_error.innerHTML = "Invalid Email!";
    em.classList.add("border_error");
    isValid = false;
  } else {
    em_error.innerHTML = "";
    em.classList.remove("border_error");
  }

  // Phone number validation
  if (phone.value.trim() === "") {
    phone_error.innerHTML = "Phone Number is Required!";
    phone.classList.add("border_error");
    isValid = false;
  }else if (phone.value.length != 10) {
    e.preventDefault();
    phone_error.innerHTML = "Phone Number should have 10 digits!";
    phone.classList.add("border_error");
    isValid = false;
  } else {
    phone_error.innerHTML = "";
    phone.classList.remove("border_error");
  }

  // Comment validation
  if (text.value.trim() === "") {
    text_error.innerHTML = "This field is Required!";
    text.classList.add("border_error");
    isValid = false;
  } else {
    text_error.innerHTML = "";
    text.classList.remove("border_error");
  }

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
      form.reset(); // clear the form on success
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Email sending failed: " + JSON.stringify(error));
    });
}




// let form = document.getElementById("form");
// let names = document.getElementById("name");
// let name_error = document.querySelector(".name_error");
// let em = document.getElementById("email");
// let em_error = document.querySelector(".email_error");
// let phone = document.querySelector("#phone");
// let phone_error = document.querySelector(".phone_error");
// let text = document.querySelector("#text");
// let text_error = document.querySelector(".text_error");

// form.addEventListener('submit', (e) => {
//   let isValid = true;

//   // Name validation
//   if (names.value == "" || names.value == null) {
//     e.preventDefault();
//     name_error.innerHTML = "Name is Required!";
//     names.classList.add("border_error");
//     isValid = false;
//   } else {
//     name_error.innerHTML = "";
//     names.classList.remove("border_error");
//   }

//   // Email validation

//   if (!em.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) || em.value == "" || em.value == null) {
//     e.preventDefault();
//     em_error.innerHTML = "Invalid Email!";
//     em.classList.add("border_error");
//     isValid = false;
//   } else {
//     em_error.innerHTML = "";
//     em.classList.remove("border_error");
//   }

//   // Phone number validation
//   if (phone.value == "" || phone.value == null) {
//     e.preventDefault();
//     phone_error.innerHTML = "Phone Number is Required!";
//     phone.classList.add("border_error");
//     isValid = false;
//   } else if (phone.value.length != 10) {
//     e.preventDefault();
//     phone_error.innerHTML = "Phone Number should have 10 digits!";
//     phone.classList.add("border_error");
//     isValid = false;
//   } else {
//     phone_error.innerHTML = "";
//     phone.classList.remove("border_error");
//   }

//   // Text validation
//   if (text.value == "" || text.value == null) {
//     e.preventDefault();
//     text_error.innerHTML = "This field is Required!";
//     text.classList.add("border_error");
//     isValid = false;
//   } else {
//     text_error.innerHTML = "";
//     text.classList.remove("border_error");
//   }
//   if (
//     names.value != "" &&
//     em.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
//     phone.value.length == 10 &&
//     text.value != ""
//   ) {
//     isValid = true;
//   }


//   if (isValid) {
//     e.preventDefault();
//     Email.send({
//       SecureToken: "6e8b3ac3-be14-4187-b475-96e23f0fb666",
//       To: 'saichandu90872@gmail.com',
//       From:'saichandu90872@gmail.com',
//       Subject: "Contact Form",
//       Body: `Name: ${names.value}\nEmail: ${em.value}\nPhone: ${phone.value}\nAddress: ${text.value}`
//     })
//     .then((message) => {
//         if (message === "OK") {
//             swal("Thank You!", "Your Form Has been Submitted Successfully!", "success");
//         } else {
//           alert("Email sending failed: " + message);
//           console.log(message);
//         }
//       })
//       .catch((error) => {
//         alert("Error: " + error.message);
//       });
      
      
    
    
    
    
   
  
// }
// });





        

