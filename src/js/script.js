const langLinks = document.querySelectorAll('.lang');

langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // e.preventDefault(); 
        langLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});