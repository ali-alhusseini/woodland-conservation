/* Header - Start */
const burgerButton = document.querySelector('.burger-button button');
const overlay = document.querySelector('#overlay');

burgerButton.addEventListener('click', () => {
    const isOverlayVisible = overlay.style.display === 'block';
    overlay.style.display = isOverlayVisible ? 'none' : 'block';
    document.body.style.overflow = isOverlayVisible ? 'auto' : 'hidden';
});
/* Header - End */

/* Start About */

/* hideContent hides the about content when the faq button is clicked */
function hideAboutContent() {
    const faqButton = document.getElementById('faq-button')
    const aboutContent = document.querySelector('.about-container')
    const faqContent = document.querySelector('.faq-container')
    faqButton.addEventListener('click', () => {
             faqContent.classList.remove('hidden');
             aboutContent.classList.add('hidden')
         });
}

/* shows about content when about back button is clicked */
function showAboutContent() {
    const aboutButton = document.getElementById("back-button")
    const aboutContent = document.querySelector('.about-container')
    const faqContent = document.querySelector('.faq-container')
    aboutButton.addEventListener('click', () => {
        faqContent.classList.add('hidden')
        aboutContent.classList.remove('hidden')
    });
}

// Code obtained from W3 schools
// link: https://www.w3schools.com/howto/howto_js_accordion.asp
/* This code is for the faq questions and hides/shows each panel when clicked */
var acc = document.getElementsByClassName("accordion")
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // toggle between adding and removing the active tab
        this.classList.toggle("active")

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling
        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }
    });
}

    const scriptURL = 'https://script.google.com/macros/s/AKfycbx5TF5aAW5ElVEHYEs6IBTwJk4duccv4jfD5lekOrJ-szqaJz8kBTB_Rg3g0yfCJwct/exec'
    const form = document.forms['submit-to-google-sheet']
    const message = document.getElementById("message")
  
    // form.addEventListener('submit', e => {
    //     e.preventDefault()
    //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //       .then(response => console.log('Success!', response))
    //       .catch(error => console.error('Error!', error.message))
    //   })
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          message.innerHTML = "Message sent successfully!"
          setTimeout(function() {
            message.innerHTML= ""
          }, 5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
/* End About script */

/* code for hiding and showing content when nav menu buttons are clicked */
function showContent() {
  const aboutButton = document.getElementById('aboutButton')
  const aboutContent = document.querySelector('.about-container')
  const getInvolvedButton = document.getElementById('getInvolvedButton')
  const getInvolved = document.querySelector('.getinvolved')
  const faqContent = document.querySelector('.faq-container')
  const allContent = [aboutContent, getInvolved, faqContent]
  aboutButton.addEventListener('click', () => {
          aboutContent.classList.remove('hidden');
          getInvolved.classList.add('hidden')
        });
  getInvolvedButton.addEventListener('click', () => {
          getInvolved.classList.remove('hidden')
          aboutContent.classList.add('hidden');
          faqContent.classList.add('hidden')
        });
    }

/* Start Get Involved */
const donateButton = document.getElementById("donate-button");
const volunteerButton = document.getElementById("volunteer-button");
const donationBox = document.querySelector(".donation-box");
const volunteerOpportunities = document.querySelector(".vol-box");

donateButton.addEventListener("click", () => {
  donationBox.classList.remove("hidden");
  volunteerOpportunities.classList.add("hidden");
});

volunteerButton.addEventListener("click", () => {
  donationBox.classList.add("hidden");
  volunteerOpportunities.classList.remove("hidden");
});

// Get a reference to the button and the form
const applyButton = document.getElementById("apply-button");
const volunteerForm = document.getElementById("vol-app");

// Add a click event listener to the button
applyButton.addEventListener("click", function (event) {
  // Prevent the default behavior of the anchor tag
  event.preventDefault();

  // Toggle the visibility of the form
  if (volunteerForm.style.display === "none") {
    volunteerForm.style.display = "block";
  } else {
    volunteerForm.style.display = "none";
  }
});


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
      document.getElementById("mapLost").style.display = "block"

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
      document.getElementById("mapTT").style.display = "block"

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