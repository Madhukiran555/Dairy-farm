
    document.addEventListener('DOMContentLoaded', function() {
        // current page is profile page
        if (window.location.pathname.includes('profile.html')) {
          const profileTrigger = document.getElementById('profileTrigger');
          if (profileTrigger) {
            profileTrigger.classList.add('active-profile');
            
            //pulse effect for 3 seconds on page load
            const avatar = profileTrigger.querySelector('.avatar');
            avatar.classList.add('pulse');
            setTimeout(() => avatar.classList.remove('pulse'), 9000);
          }
        }
      });