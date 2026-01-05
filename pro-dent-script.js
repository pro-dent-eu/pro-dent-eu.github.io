// Scroll Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;
        const element = document.getElementById(tabName);
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            
            // Update active button
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    });
});

// Update active nav button on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.tab-content');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === current) {
            btn.classList.add('active');
        }
    });
});

// Auto-scrolling Gallery
let currentSlide = 0;
const galleryTrack = document.getElementById('galleryTrack');
const galleryItems = document.querySelectorAll('.gallery-item');
const totalSlides = galleryItems.length;

function updateGallery() {
    const offset = -currentSlide * 100;
    galleryTrack.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateGallery();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateGallery();
}

document.getElementById('galleryNext').addEventListener('click', nextSlide);
document.getElementById('galleryPrev').addEventListener('click', prevSlide);

// Auto-scroll gallery every 5 seconds
setInterval(nextSlide, 5000);

// Generate Random Pricing Table
const services = [
    'Konsultacja',
    'Leczenie próchnicy (1 ząb)',
    'Czyszczenie profesjonalne',
    'Czyszczenie kamienia tartarowego',
    'Fluożowanie zębów',
    'Wybielanie zębów (jedna sesja)',
    'Korona sztuczna (1 szt)',
    'Most protetyczny (1 ząb)',
    'Implant zęba',
    'Aparat ortodontyczny (wycena)',
];

function generatePricingTable() {
    const pricingBody = document.getElementById('pricingBody');
    pricingBody.innerHTML = '';
    
    services.forEach(service => {
        const price = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${service}</td>
            <td>${price} PLN</td>
        `;
        pricingBody.appendChild(row);
    });
}

// Generate pricing table on page load
generatePricingTable();

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
    document.getElementById('contactForm').reset();
});
