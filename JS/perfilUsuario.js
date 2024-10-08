document.addEventListener('DOMContentLoaded', function() {
   
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {

        window.location.href = 'homePage.html'
    });

    // Favorite button toggle
    const favoriteButton = document.querySelector('.favorite-button');
    favoriteButton.addEventListener('click', function() {
        this.querySelector('i').classList.toggle('bi-heart');
        this.querySelector('i').classList.toggle('bi-heart-fill');
    });

    // Chat button functionality
    const chatButton = document.querySelector('.chat-button');
    chatButton.addEventListener('click', function() {
        console.log('redirecionando para whatsapp')
    });

    // Call button functionality
    const callButton = document.querySelector('.call-button');
    callButton.addEventListener('click', function() {
        console.log('redirecionando para ligação')
    });

    // Bottom navigation functionality
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});