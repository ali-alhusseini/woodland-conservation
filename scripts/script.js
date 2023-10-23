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