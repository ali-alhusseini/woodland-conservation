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
const gallery = document.querySelector(".gallery-parent-container");
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
    Gallery.render();
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
 * This function is called by the Visit and Talking Trees buttons.  The button
 * that is pressed replaces the contents of the current map page with the
 * section related to the button.
 * 
 * @param {*} id ref to either the Visit or Talking Trees button
 * 
 * Author: Alexander Jaques
 */
function goToMapSubs(id) {
  document.getElementById("mapMain").style.display = "none";
  /* 
  If visit button pressed, show visit page and hide contents of talking
  trees 
  */
  if (id === "visit") {
    document.getElementById("mapVisit").style.display = "block"
    document.getElementById("mapTT").style.display = "none";
    if (isHuntingSzn()) {
      // if (false) {
      getEmbed(1);
    } else {
      document.getElementById("visit").innerHTML = "Get Directions"
      getEmbed(0);
    }
  }
  /* 
  If talking trees button pressed, show talking trees page and hide
  contents of visit.
  */
  if (id === "talkingTrees") {
    document.getElementById("mapTT").style.display = "block"
    document.getElementById("mapVisit").style.display = "none";
  }
}

/**
 * This function is called by the map button to return to the main map page.
 * 
 * Author: Alexander Jaques
 */
function goToMapMain() {
  document.getElementById("mapMain").style.display = "block";
  document.getElementById("mapVisit").style.display = "none";
  document.getElementById("mapTT").style.display = "none";
}

/**
 * Needed for mobile and desktop weather widgets.
 * 
 * Obtained from weatherwidget.io
 */
!function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'weatherwidget-io-js');


/**
 * This function gets the current date and compares it with the start and 
 * end of hunting season.
 * 
 * @returns false if it is not hunting season, true if it is
 * 
 * Author: Alexander Jaques
 */
let isHuntingSzn = () => {
  const d = new Date(), endOfSzn = new Date();
  let currMonth = d.getMonth() + 1;
  // Set endOfSzn as Jan 15
  endOfSzn.setMonth(0); endOfSzn.setDate(15);
  /* 
  If the current month is before Sept and after Jan 15, safe to visit
  Else it is hunting season 
  */
  if (currMonth < 9 &&
    (d.getMonth() > endOfSzn.getMonth() &&
      d.getDate() > endOfSzn.getDate())) {
    return false;
  }
  else {
    return true;
  }
}

/**
 * This function is called when it is not hunting season. The embedded map
 * is inserted into the document to allow the user to get directions to
 * the conservation.
 * 
 * @param {*} num 0 if not hunting season and 1 if it is.
 * 
 * Author: Alexander Jaques
 */
function getEmbed(num) {
  if (num === 0) {
    document.getElementById("insertVisitSection").innerHTML =
      ` 
      <h1>Get Directions</h1>
      <div id="mapDesktop">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2839.5532752450276!2d-63.92626992361472!3d44.6266077889327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDM3JzM1LjgiTiA2M8KwNTUnMjUuMyJX!5e0!3m2!1sen!2sca!4v1700852088228!5m2!1sen!2sca"
          width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div id="mapMobile">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2839.5532752450276!2d-63.92626992361472!3d44.6266077889327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDM3JzM1LjgiTiA2M8KwNTUnMjUuMyJX!5e0!3m2!1sen!2sca!4v1700852088228!5m2!1sen!2sca"
          width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      `;
  } else if (num === 1) {
    document.getElementById("insertVisitSection").innerHTML =
      `
      <h1>Planning a visit?</h1>
      <h3>It is currently hunting season.</h3>
        <p>
          We highly advise that you wait to visit between January 16th and August
          31st.
          <br>
          We hope to see you on the trail then.
        </p>
      `;
  }
}

/**
 * This Event Listener checks to see if it is not hunting season,
 * if it is not, the second button on the map page displays as
 * "Get Directions".  If it is hunting season, the button is unchanged
 * and displays "Planning to Visit?"
 * 
 * Author: Alexander Jaques
 */
document.addEventListener("DOMContentLoaded", function () {
  if (!isHuntingSzn()) {
    // if (isHuntingSzn()) {
    document.getElementById("visit").innerHTML = "Get Directions";
  }
});
/* Map Scripts - Start */

/**
 * Mobile version
 * 
 * This Event Listener resets the map page when the map button in the header
 * is clicked.
 * 
 * Author: Alexander Jaques
 */
document.getElementsByClassName("map-button")[0].addEventListener('click', () => {
  const mapMain = document.getElementById("mapMain");
  if (mapMain.style.display === "none") {
    mapMain.style.display = "block";
    document.getElementById("mapVisit").style.display = "none";
    document.getElementById("mapTT").style.display = "none";
  }
});

/**
 * Desktop version
 * 
 * This Event Listener resets the map page when the map button in the header
 * is clicked.
 * 
 * Author: Alexander Jaques
 */
document.getElementsByClassName("map-button")[1].addEventListener('click', () => {
  const mapMain = document.getElementById("mapMain");
  if (mapMain.style.display === "none") {
    mapMain.style.display = "block";
    document.getElementById("mapVisit").style.display = "none";
    document.getElementById("mapTT").style.display = "none";
  }
});

/* Only for presentation v */
function mapPres(num) {
  // if (isHuntingSzn()) {
  if (num === 1) {
    document.getElementById("visit").innerHTML = "Get Directions";
    document.getElementById("mapPresentation").innerHTML = '<button onclick="mapPres(0)">For Presentation</button>';
    getEmbed(0);
  } else {
    document.getElementById("visit").innerHTML = "Planning to Visit?";
    document.getElementById("mapPresentation").innerHTML = '<button onclick="mapPres(1)">For Presentation</button>';
    getEmbed(1);
  }
}
/* Only for presentation ^ */

/* Map Scripts - End */

/* Gallery - Start */
const Gallery = cloudinary.galleryWidget({
  container: ".gallery-container",
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
