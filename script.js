// انیمیشن ورود متن هدر
const heroTexts = document.querySelectorAll('.hero h1, .hero h2, .hero p, .hero .btn');
heroTexts.forEach((el, i) => {
    setTimeout(() => {
        el.style.transition = 'all 0.8s ease-out';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
    }, i * 300);
});

// انیمیشن کارت‌ها هنگام اسکرول
const cards = document.querySelectorAll('.card, .project');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom){
            card.style.transform = 'translateY(0) scale(1)';
            card.style.opacity = '1';
        } else{
            card.style.transform = 'translateY(50px) scale(0.95)';
            card.style.opacity = '0';
        }
    });
});

// فرم تماس
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('درخواست شما ارسال شد! ایمیل: fm.khaani@gmail.com');
});