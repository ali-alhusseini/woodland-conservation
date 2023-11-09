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
