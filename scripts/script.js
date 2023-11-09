const burger = document.querySelector('.burger');
const body = document.querySelector('.body');

/*
* Start About script
* Author: Riley O'Keefe
*/
/*hideContent hides the about content when the faq button is clicked*/

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
