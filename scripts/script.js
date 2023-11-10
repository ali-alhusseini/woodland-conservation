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

        donateButton.addEventListener('click', () => {
            donationBox.classList.remove('hidden');
            volunteerOpportunities.classList.add('hidden');
        });

        volunteerButton.addEventListener('click', () => {
            donationBox.classList.add('hidden');
            volunteerOpportunities.classList.remove('hidden');
        });
