/**
 * This is the main script file for the website. 
 * 
 * Authors:
 *  Riley O'Keefe: About and FAQ Section
 *  John Wanamaker: Gallery Section
 *  Mike Warren: Get Involved and Donate Sections
 *  Alex Jaques: Map Section
 *  Ali Alhusseini: Homepage, Header, and Footer
 */

/* Constants for burger button and nav overlay in mobile */
const burgerButton = document.querySelector(".burger-button button");
const overlay = document.querySelector("#overlay");

/**
 * This function is called when the user clicks on the burger button.  It
 * toggles the overlay and sets the overflow of the body to hidden to prevent
 * scrolling.
 */
burgerButton.addEventListener("click", () => {
  const isOverlayVisible = overlay.style.display === "block";
  overlay.style.display = isOverlayVisible ? "none" : "block";
  document.body.style.overflow = isOverlayVisible ? "auto" : "hidden";
});

/* Variables for the header buttons */
var aboutButtons = document.querySelectorAll(".about-button");
var getInvolvedButtons = document.querySelectorAll(".getinvolved-button");
var mapButtons = document.querySelectorAll(".map-button");
var galleryButtons = document.querySelectorAll(".gallery-button");

/* Contstants for sections */
const homepage = document.querySelector(".homepage-container");
const aboutContent = document.querySelector(".about-main-container");
const getInvolved = document.querySelector(".getinvolved");
const gallery = document.querySelector(".gallery-parent-container");
const headerContainer = document.querySelector(".header-container");
const mapContainer = document.querySelector(".map-container");
const faqContent = document.querySelector(".faq-container");

/**
 * This event listener is called when the user clicks the about button and hides
 * the homepage and shows the about page.
 */
aboutButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    homepage.classList.add("hidden");
    aboutContent.classList.remove("hidden");
    getInvolved.classList.add("hidden");
    mapContainer.classList.add("hidden");
    gallery.classList.add("hidden");
    faqContent.classList.add("hidden");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    headerContainer.style.position = "relative";
  });
});

/**
 * This event listener is called when the user clicks the get involved button
 * and hides the homepage and shows the get involved page.
 */
getInvolvedButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    homepage.classList.add("hidden");
    getInvolved.classList.remove("hidden");
    aboutContent.classList.add("hidden");
    mapContainer.classList.add("hidden");
    gallery.classList.add("hidden");
    faqContent.classList.add("hidden");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    headerContainer.style.position = "relative";
  });
});

/**
 * This event listener is called when the user clicks the map button and hides
 * the homepage and shows the map page.
 */
mapButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    homepage.classList.add("hidden");
    getInvolved.classList.add("hidden");
    aboutContent.classList.add("hidden");
    gallery.classList.add("hidden");
    mapContainer.classList.remove("hidden");
    faqContent.classList.add("hidden");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    headerContainer.style.position = "relative";
  });
});

/**
 * This event listener is called when the user clicks the gallery button and hides
 * the homepage and shows the gallery page.
 */
galleryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    homepage.classList.add("hidden");
    getInvolved.classList.add("hidden");
    aboutContent.classList.add("hidden");
    mapContainer.classList.add("hidden");
    gallery.classList.remove("hidden");
    faqContent.classList.add("hidden")
    Gallery.render();
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    headerContainer.style.position = "relative";
  });
});

/* Book Burial Time */
const bookBurialButton = document.querySelector(".book-burial-button");
const bookBurialOverlay = document.querySelector(".book-burial-container");

/**
 * This event listener is called when the user clicks the book burial button
 * and it shows or hides the book burial overlay.
 */
bookBurialButton.addEventListener("click", () => {
  if (bookBurialOverlay.style.display === "block") {
    bookBurialOverlay.style.display = "none";
  } else {
    bookBurialOverlay.style.display = "block";
  }
});


/* About - Start */
/**
 * This function hides the about content when the faq button is clicked
 * Author: Riley O'Keefe
 */
function hideAboutContent() {
  const faqButton = document.getElementById("faq-button");
  const aboutContent = document.querySelector(".about-main-container");
  faqButton.addEventListener("click", () => {
    faqContent.classList.remove("hidden");
    aboutContent.classList.add("hidden");
  });
}

/**
 * This function shows about content when about back button is clicked
 * Author: Riley O'Keefe
 */
function showAboutContent() {
  const aboutButton = document.getElementById("back-button");
  const aboutContent = document.querySelector(".about-main-container");
  aboutButton.addEventListener("click", () => {
    faqContent.classList.add("hidden");
    aboutContent.classList.remove("hidden");
  });
}

/**
 * This code is for the faq questions and hides/shows each panel when clicked
 * var accordion: the question clicked
 * var i: index of the question clicked
 * Author: Riley O'Keefe
 */
var acc = document.getElementsByClassName("accordion");
var i;
/* Loop through all the questions and add an event listener to each */
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // toggle between adding and removing the active tab
    this.classList.toggle("active");

    // toggle between hiding and showing the active panel
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/**
 * This code takes the question asked by the user and handles a form submission
 * by using the fetch API to make a POST request to a Google Apps Script. If the
 * request is succesful a message is then shown.
 * Riley O'Keefe has the information on the Google Apps Script and where the questions are sent.
 * Author: Riley O'Keefe
 */
//scriptURL is the URL of the Google Apps Script
const scriptURL =
  "https://script.google.com/macros/s/AKfycbx5TF5aAW5ElVEHYEs6IBTwJk4duccv4jfD5lekOrJ-szqaJz8kBTB_Rg3g0yfCJwct/exec";
//form is the form that the user fills out
const form = document.forms["submit-to-google-sheet"];
//message is the message that is shown when the form is submitted
const message = document.getElementById("message");
//when the form is submitted, the fetch API is used to make a POST request to the Google Apps Script
form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents the form from submitting normally
  fetch(scriptURL, { method: "POST", body: new FormData(form) }) 
    .then((response) => {
      message.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        message.innerHTML = "";
      }, 5000);
      form.reset();
    })
    //if there is an error, an error message is shown in the console
    .catch((error) => console.error("Error!", error.message));
});
/* End About script */

/* Start Get Involved */

/* Declare all variables at the start */
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

/**
 * A function that validates that an input field is not empty
 * 
 * @param {*} input - The section of input being validated
 * @param {*} fieldName - String of the section of input being validated to put before the error
 * @returns {false | true} - Returns false when there is an error, true when there is not
 */
function validateContents(input, fieldName) {
  if (input.value.trim() === "") {
      showError(input, fieldName + " cannot be empty.");
      return false;
  }
  return true;
}

/**
 * A function that validates that a phone number is 10 digits
 * 
 * @param {*} phone - Phone number input
 * @returns {true | false}} - Returns true if test passed, false when failed
 */
function validatePhoneNumber(phone) {
  var phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

/**
 * A function that validates that an email is valid
 * 
 * @param {*} email - Email input
 * @returns {true | false}} - Returns true if test passed, false when failed
 */
function validateEmail(email) {
  var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

/**
 * A function that validates that a date is not before the current date
 * 
 * @param {*} date - The section of input for the date
 * @param {*} fieldName - String of the date being validated to put before the error
 * @returns {false | true} - Returns false when there is an error, true when there is not
 */
function validateDate(date, fieldName) {
  if (date.value === "") {
    showError(date, "Please select a " + fieldName + ".");
    return false;
  }
  var currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  var selectedDate = new Date(date.value + "T00:00:00");

  if (selectedDate < currentDate) {
    showError(date, fieldName + " cannot be before the current date.");
    return false;
  }
  return true;
}

/**
 * A function that displays appropriate error message when validation fails
 * 
 * @param {*} input - The section of input with an error
 * @param {*} message - text to be displayed in the error message
 */
function showError(input, message) {
  var errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;
  input.parentNode.insertBefore(errorMessage, input.nextSibling);
}

/**
 * A function that removes error messages after they are fixed
 */
function removeErrorMessages() {
  var errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (errorMessage) {
    errorMessage.parentNode.removeChild(errorMessage);
  });
}

/* Event listener to show the application form */
document.getElementById('apply-button').addEventListener('click', function () {
  volAppForm.classList.toggle('hidden');
});

/* Event listener to show the donation widget */
document.getElementById('donate-button').addEventListener('click', function() {
  donorboxContainer.classList.toggle('hidden');
});

/* Event listener to close the donation widget */
document.getElementById('close-button').addEventListener('click', function() {
  donorboxContainer.classList.toggle('hidden');
});

/* Event listener to validate the application contents and submit the application */
document.getElementById('submit-button').addEventListener('click', function (event) {
  event.preventDefault();
  var pass = true;
  removeErrorMessages();

  /* Input validation */
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

/* End Get Involved */

/* Map Scripts - Start */
/**
 * This function is called by the Visit and Talking Trees buttons.  The button
 * that is pressed replaces the contents of the current map page with the
 * section related to the button.
 * 
 * @param {*} id ref to either the Visit or Talking Trees button
 */
function goToMapSubs(id) {
 // Short forms of getting id elements due to more than 1 call
  const mapVisit = document.getElementById("mapVisit"),
    mapTT = document.getElementById("mapTT");
  document.getElementById("mapMain").style.display = "none";
  /* 
  If visit button pressed, show visit page and hide contents of talking
  trees.
  */
  if (id === "visitBtn") {
    mapVisit.style.display = "block"
    mapTT.style.display = "none";
    if (isHuntingSzn()) {
      getEmbed(0); // send falsy value for isSafe variable
    } else {
      document.getElementById("visitBtn").innerHTML = "Get Directions"
      getEmbed(1); // send truthy value for isSafe variable
    }
  }
  /* 
  If talking trees button pressed, show talking trees page and hide
  contents of visit.
  */
  if (id === "tTBtn") {
    mapTT.style.display = "block"
    mapVisit.style.display = "none";
  }
}

/**
 * This function is called by the map button to return to the main map page.
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
 */
let isHuntingSzn = () => {
  const currDate = new Date(), endOfSzn = new Date();
    
  /*
  For testing outside of hunting season, uncomment the line below setting
  the date and time to August 1st.  The second button on the page will say
  Get Directions and the page will load the embed.
  */
  // currDate.setMonth(7); currDate.setDate(1);
  
  // Set endOfSzn as Jan 15
  endOfSzn.setMonth(0); endOfSzn.setDate(15);
  /* 
  If the current month is before Sept and after Jan 15, safe to visit
  Else it is hunting season 
  */
  if (currDate.getMonth() < 8 && currDate.getMonth() >= endOfSzn.getMonth()) {
    // Checks to see if it is the first 15 days of January
    if (currDate.getMonth() === endOfSzn.getMonth() &&
      endOfSzn.getDate() >= currDate.getDate()) {
      return true;
    }
    return false;
  } else {
    return true;
  }
}

/**
 * This function is called by the goToMapSubs function in the visitBtn
 * section.  If it is hunting season the site will display a message
 * saying to wait until after hunting season is over.  If it is not
 * hunting season, then the site will load a Google Maps embed for
 * desktop and mobile that will provide directions to the conservation.
 * 
 * @param {*} num 0 (false) if not safe and 1 (true) if it is.
 */
function getEmbed(num) {
  let isSafe = num; // load isSafe with truthy or falsy value
  // Short form of getting id element due to more than 1 call
  const insertVisitSection = document.getElementById("insertVisitSection");

  if (isSafe) {
    insertVisitSection.innerHTML =
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
  } else {
    insertVisitSection.innerHTML =
      `
      <h1>Planning a visit?</h1>
      <br><br><br><br><br><br><br><br>
      <div class="mapBreaks">
        <br><br><br>
      </div>      
      <h3>It is currently hunting season.</h3>
        <p>
          We highly advise that you wait to visit between January 16th and August
          31st.
          <br>
          We hope to see you on the trail then.
        </p>
      <br><br><br><br><br><br><br><br>
      <div class="mapBreaks">
        <br><br><br>
      </div>
      `;
  }
}

/**
 * This Event Listener checks to see if it is not hunting season when the page
 * loads, if it is not, the second button on the map page displays as
 * "Get Directions".  If it is hunting season, the button is unchanged
 * and displays "Planning to Visit?"
 */
document.addEventListener("DOMContentLoaded", function () {
  if (!isHuntingSzn()) {
    document.getElementById("visitBtn").innerHTML = "Get Directions";
  }
});

/**
 * This function resets the map when one of the two map header buttons
 * is clicked.
 */
function resetMap() {
  const mapMain = document.getElementById("mapMain");
  if (mapMain.style.display === "none") {
    mapMain.style.display = "block";
    document.getElementById("mapVisit").style.display = "none";
    document.getElementById("mapTT").style.display = "none";
  }
}

/**
 * This Event Listener calls to reset the map page when the map button in the
 * mobile header is clicked.
 */
document.getElementsByClassName("map-button")[0].addEventListener('click', () => {
  resetMap();
});

/**
 * This Event Listener calls to reset the map page when the map button in the
 * desktop header is clicked.
 */
document.getElementsByClassName("map-button")[1].addEventListener('click', () => {
  resetMap();
});
/* Map Scripts - End */

/* Gallery - Start */
/* Author: John Wanamaker & Cloudinary */
const Gallery = cloudinary.galleryWidget({
  container: ".gallery-container",
  //cloud name is a unique ID associated with a cloudinary account
  cloudName: "dxmmwd2wz",
  aspectRatio: "20:9",
  //must tag photo in cloudinary to "rvd" to display in gallery
  mediaAssets: [
    { tag: "rvd" },
    //use this tag below if you want to incorperate videos
    // {tag: "rvd", mediaType: 'video'},
  ],

  //comment out these two lines for a different view with small pictures on the side
  carouselStyle: "indicators",
  carouselLocation: "bottom",
});

//create the upload widget
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

//allows the widget to open when the user clicks the button
document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);
