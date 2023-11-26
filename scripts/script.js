/* Header - Start */
const burgerButton = document.querySelector(".burger-button button");
const overlay = document.querySelector("#overlay");

burgerButton.addEventListener("click", () => {
  const isOverlayVisible = overlay.style.display === "block";
  overlay.style.display = isOverlayVisible ? "none" : "block";
  document.body.style.overflow = isOverlayVisible ? "auto" : "hidden";
});

var aboutButtons = document.querySelectorAll(".about-button");
var getInvolvedButtons = document.querySelectorAll(".getinvolved-button");
var mapButtons = document.querySelectorAll(".map-button");
var galleryButtons = document.querySelectorAll(".gallery-button");
const homepage = document.querySelector(".homepage-container");
const aboutContent = document.querySelector(".about-main-container");
const getInvolved = document.querySelector(".getinvolved");
const gallery = document.querySelector(".gallery-container");
const headerContainer = document.querySelector(".header-container");
const mapContainer = document.querySelector(".map-container");

aboutButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    homepage.classList.add("hidden");
    aboutContent.classList.remove("hidden");
    getInvolved.classList.add("hidden");
    mapContainer.classList.add("hidden");
    gallery.classList.add("hidden");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    headerContainer.style.position = "relative";
  });
});

getInvolvedButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    homepage.classList.add("hidden");
    getInvolved.classList.remove("hidden");
    aboutContent.classList.add("hidden");
    mapContainer.classList.add("hidden");
    gallery.classList.add("hidden");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    headerContainer.style.position = "relative";
  });
});

mapButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    homepage.classList.add("hidden");
    getInvolved.classList.add("hidden");
    aboutContent.classList.add("hidden");
    gallery.classList.add("hidden");
    mapContainer.classList.remove("hidden");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    headerContainer.style.position = "relative";
  });
});

galleryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    homepage.classList.add("hidden");
    getInvolved.classList.add("hidden");
    aboutContent.classList.add("hidden");
    mapContainer.classList.add("hidden");
    gallery.classList.remove("hidden");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    headerContainer.style.position = "relative";
  });
});

/* Book Burial Time */
const bookBurialButton = document.querySelector(".book-burial-button");
const bookBurialOverlay = document.querySelector(".book-burial-container");

bookBurialButton.addEventListener("click", () => {
  if (bookBurialOverlay.style.display === "block") {
    bookBurialOverlay.style.display = "none";
  } else {
    bookBurialOverlay.style.display = "block";
  }
});


/* About - Start */
/* hideContent hides the about content when the faq button is clicked */
function hideAboutContent() {
  const faqButton = document.getElementById("faq-button");
  const aboutContent = document.querySelector(".about-main-container");
  const faqContent = document.querySelector(".faq-container");
  faqButton.addEventListener("click", () => {
    faqContent.classList.remove("hidden");
    aboutContent.classList.add("hidden");
  });
}

/* shows about content when about back button is clicked */
function showAboutContent() {
  const aboutButton = document.getElementById("back-button");
  const aboutContent = document.querySelector(".about-main-container");
  const faqContent = document.querySelector(".faq-container");
  aboutButton.addEventListener("click", () => {
    faqContent.classList.add("hidden");
    aboutContent.classList.remove("hidden");
  });
}

// Code obtained from W3 schools
// link: https://www.w3schools.com/howto/howto_js_accordion.asp
/* This code is for the faq questions and hides/shows each panel when clicked */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // toggle between adding and removing the active tab
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbx5TF5aAW5ElVEHYEs6IBTwJk4duccv4jfD5lekOrJ-szqaJz8kBTB_Rg3g0yfCJwct/exec";
const form = document.forms["submit-to-google-sheet"];
const message = document.getElementById("message");
// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => console.log('Success!', response))
//       .catch(error => console.error('Error!', error.message))
//   })
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      message.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        message.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
/* End About script */

/* Start Get Involved */
var dropdown = document.getElementById('dropdown');
var fname = document.getElementById('fname-for-app');
var lname = document.getElementById('lname-for-app');
var phone = document.getElementById('phone-for-app');
var email = document.getElementById('email-for-app');
var address = document.getElementById('address-for-app');
var sdate = document.getElementById('sdate-for-app');
var eligibledropdown = document.getElementById('eligible-dropdown');
var ref1name = document.getElementById('ref1-name');
var ref1relation = document.getElementById('ref1-relation');
var ref1phone = document.getElementById('ref1-phone');
var ref1email = document.getElementById('ref1-email');
var ref2name = document.getElementById('ref2-name');
var ref2relation = document.getElementById('ref2-relation');
var ref2phone = document.getElementById('ref2-phone');
var ref2email = document.getElementById('ref2-email');
var volAppForm = document.getElementById('vol-app');
var donorboxContainer = document.getElementById('donorbox-container');

document.getElementById('apply-button').addEventListener('click', function () {
  volAppForm.classList.toggle('hidden');
});

document.getElementById('donate-button').addEventListener('click', function() {
  donorboxContainer.classList.toggle('hidden');
});

document.getElementById('close-button').addEventListener('click', function() {
  donorboxContainer.classList.toggle('hidden');
});

document.getElementById('submit-button').addEventListener('click', function (event) {
  event.preventDefault();
  var pass = true;
  removeErrorMessages();

  if (dropdown.value === "") {
      showError(dropdown, "Please select a preferred position.");
      pass = false;
  }

  if (!validateContents(fname, "First Name")) {
    pass = false;
  }

  if (!validateContents(lname, "Last Name")) {
    pass = false;
  }
  
  if (!validatePhoneNumber(phone.value)) {
    showError(phone, "Please enter a 10-digit phone number.");
    pass = false;
  }

  if (!validateEmail(email.value)) {
    showError(email, "Please enter a valid email.");
    pass = false;
  }

  if (!validateContents(address, "Address")) {
    pass = false;
  }

  if (!validateDate(sdate, "Start Date")) {
    pass = false;
  }

  if (eligibledropdown.value === "") {
    showError(eligibledropdown, "Please select an option.");
    pass = false;
  }

  if (eligibledropdown.value === "No") {
    showError(eligibledropdown, "You are not eligible to volunteer.");
    pass = false;
  }

  if (!validateContents(ref1name, "Reference 1 name")) {
    pass = false;
  }

  if (!validateContents(ref1relation, "Reference 1 relation")) {
    pass = false;
  }

  if (!validatePhoneNumber(ref1phone.value)) {
    showError(ref1phone, "Please enter a 10-digit phone number.");
    pass = false;
  }

  if (!validateEmail(ref1email.value)) {
    showError(ref1email, "Please enter a valid email.");
    pass = false;
  }

  if (!validateContents(ref2name, "Reference 2 name")) {
    pass = false;
  }

  if (!validateContents(ref2relation, "Reference 2 relation")) {
    pass = false;
  }

  if (!validatePhoneNumber(ref2phone.value)) {
    showError(ref2phone, "Please enter a 10-digit phone number.");
    pass = false;
  }

  if (!validateEmail(ref2email.value)) {
    showError(ref2email, "Please enter a valid email.");
    pass = false;
  }

  if (pass) {
    volAppForm.submit()
  } else {
    var error = document.querySelector('.error-message');
    error.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

function validateContents(input, fieldName) {
  if (input.value.trim() === "") {
      showError(input, fieldName + " cannot be empty.");
      return false;
  }
  return true;
}

function validatePhoneNumber(phone) {
  var phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

function validateEmail(email) {
  var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

function validateDate(input, fieldName) {
  if (input.value === "") {
    showError(input, "Please select a " + fieldName + ".");
    return false;
  }
  var currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  var selectedDate = new Date(input.value + "T00:00:00");

  if (selectedDate < currentDate) {
    showError(input, fieldName + " cannot be before the current date.");
    return false;
  }
  return true;
}

function showError(input, message) {
  var errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;
  input.parentNode.insertBefore(errorMessage, input.nextSibling);
}

function removeErrorMessages() {
  var errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (errorMessage) {
    errorMessage.parentNode.removeChild(errorMessage);
  });
}
/* End Get Involved */

/* Map Scripts - Start */
/**
 * This function is called by the Lost and Talking Trees buttons.  The button
 * that is pressed is replaced by a button to return to the main map page.
 *
 * @param {*} id ref to either the Lost or Talking Trees button
 *
 * Author: Alexander Jaques
 */
function goToMapSubs(id) {
  document.getElementById("mapMain").style.display = "none";

  if (id === "lost") {
    document.getElementById(id).style.display = "none";
    document.getElementById("mapPage1").style.display = "block";
    document.getElementById("mapLost").style.display = "block";

    // If coming from talking trees page, display button and hide contents
    if (document.getElementById("talkingTrees").style.display == "none") {
      document.getElementById("mapTT").style.display = "none";
      document.getElementById("talkingTrees").style.display = "block";
      document.getElementById("mapPage2").style.display = "none";
    }
  }

  if (id === "talkingTrees") {
    document.getElementById(id).style.display = "none";
    document.getElementById("mapPage2").style.display = "block";
    document.getElementById("mapTT").style.display = "block";

    // If coming from lost page, display button and hide contents
    if (document.getElementById("lost").style.display == "none") {
      document.getElementById("mapLost").style.display = "none";
      document.getElementById("lost").style.display = "block";
      document.getElementById("mapPage1").style.display = "none";
    }
  }
}

/**
 * This function is called by the map buttons to show the original buttons
 *
 * @param {*} id ref to either of the map buttons
 *
 * Author: Alexander Jaques
 */
function goToMapMain(id) {
  document.getElementById("mapMain").style.display = "block";

  if (id === "mapPage1") {
    document.getElementById("mapLost").style.display = "none";
    document.getElementById(id).style.display = "none";
    document.getElementById("lost").style.display = "block";
  }

  if (id === "mapPage2") {
    document.getElementById("mapTT").style.display = "none";
    document.getElementById(id).style.display = "none";
    document.getElementById("talkingTrees").style.display = "block";
  }
}
/* Map Scripts - End */

/* Gallery - Start */
const myGallery = cloudinary.galleryWidget({
  container: "#my-gallery",
  //cloud name is a unique ID associated with a cloudinary account
  cloudName: "dxmmwd2wz",
  aspectRatio: "20:9",
  //must tag photo in cloudinary to gallery-image to display in gallery
  mediaAssets: [
    { tag: "rvd" },
    // {tag: 'gallery-videos', mediaType: 'video'},
  ],

  //comment out these two lines for a different view with small pictures on the side
  carouselStyle: "indicators",
  carouselLocation: "bottom",
});

myGallery.render();

var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "dxmmwd2wz",
    uploadPreset: "rvwtest",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);
