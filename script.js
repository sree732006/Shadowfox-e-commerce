
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;

    if (username && email) {
        alert(`Thank you, ${username}! Your message has been sent.`);
        this.reset(); 
    } else {
        alert('Please fill in both fields.');
    }
});
