const burger = document.querySelector('.burger');
const body = document.querySelector('.body');

/* Start About script*/
/*hideContent hides the about content when the faq button is clicked*/
function hideAboutContent() {
   let about = document.getElementsByClassName("about-container")[0]
   let faq = document.getElementsByClassName("faq-container")[0]
   if (faq.style.display === "none" || faq.style.display === ""){
    faq.style.display = "block"
    about.style.display = "none"
   } else {
    faq.style.display = "none"
   }
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
/* End About script */

/* Start Get Involved */
const donateButton = document.getElementById('donate-button');
        const volunteerButton = document.getElementById('volunteer-button');
        const donationBox = document.querySelector('.donation-box');
        const volunteerOpportunities = document.querySelector('.vol-box');

const donateButton = document.getElementById("donate-button");
const volunteerButton = document.getElementById("volunteer-button");
const donationBox = document.querySelector(".donation-box");
const volunteerOpportunities = document.querySelector(".vol-box");


donateButton.addEventListener("click", () => {
  donationBox.classList.remove("hidden");
  volunteerOpportunities.classList.add("hidden");
});


        volunteerButton.addEventListener('click', () => {
            donationBox.classList.add('hidden');
            volunteerOpportunities.classList.remove('hidden');
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
