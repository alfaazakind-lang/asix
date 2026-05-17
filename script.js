// ============ SPLASH SCREEN ============
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splashScreen');
    const mainSite = document.getElementById('mainSite');

    setTimeout(() => {
        splash.classList.add('hide');
        mainSite.style.display = 'block';
        setTimeout(() => splash.style.display = 'none', 600);
    }, 3000);

    // ============ RENDER PLANS ============
    renderPlans();

    // ============ SCROLL ANIMATIONS ============
    initScrollAnimations();

    // ============ NAVBAR SCROLL ============
    initNavbarScroll();

    // ============ SMOOTH SCROLL ============
    initSmoothScroll();
});

// ============ PLANS DATA ============
const plans = [
    {
        name: 'Silver Plan',
        icon: 'fas fa-credit-card',
        limit: '₹1,50,000',
        popular: false,
        features: [
            'Credit limit up to ₹1.5 Lakh',
            '1% cashback on all spends',
            'No extra charges',
            'EMI conversion available',
            'Basic travel insurance',
            '24/7 customer support'
        ]
    },
    {
        name: 'Gold Plan',
        icon: 'fas fa-gem',
        limit: '₹3,00,000',
        popular: true,
        features: [
            'Credit limit up to ₹3 Lakh',
            '2% cashback on all spends',
            'No extra charges',
            'Fuel surcharge waiver',
            'Domestic lounge access (4/yr)',
            'Priority customer support'
        ]
    },
    {
        name: 'Platinum Plan',
        icon: 'fas fa-crown',
        limit: '₹5,00,000',
        popular: false,
        features: [
            'Credit limit up to ₹5 Lakh',
            '3% cashback on all spends',
            'No extra charges',
            'International lounge access',
            'Comprehensive travel insurance',
            'Dedicated relationship manager'
        ]
    },
    {
        name: 'Signature Plan',
        icon: 'fas fa-star',
        limit: '₹10,00,000',
        popular: false,
        features: [
            'Credit limit up to ₹10 Lakh',
            '5% cashback on premium spends',
            'No extra charges',
            'Unlimited lounge access worldwide',
            'Premium travel & medical insurance',
            'Exclusive invite-only events'
        ]
    }
];

// ============ RENDER PLAN CARDS ============
function renderPlans() {
    const container = document.getElementById('planCards');
    container.innerHTML = plans.map((plan, idx) => `
        <div class="col-lg-3 col-md-6 fade-in" style="transition-delay: ${idx * 0.1}s">
            <div class="plan-card ${plan.popular ? 'popular' : ''}">
                ${plan.popular ? '<div class="popular-tag">POPULAR</div>' : ''}
                <div class="plan-icon"><i class="${plan.icon}"></i></div>
                <div class="plan-name">${plan.name}</div>
                <div class="plan-limit">${plan.limit}</div>
                <div class="plan-tag">For Existing Card Holders</div>
                <ul class="plan-features">
                    ${plan.features.map(f => `<li><i class="fas fa-check-circle"></i>${f}</li>`).join('')}
                </ul>
                <a href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20increase%20my%20credit%20limit%20to%20${encodeURIComponent(plan.limit)}%20under%20${encodeURIComponent(plan.name)}" 
                   class="plan-btn" target="_blank">
                    <i class="fas fa-arrow-up"></i> Increase Limit
                </a>
            </div>
        </div>
    `).join('');
}

// ============ SCROLL ANIMATIONS ============
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all fade-in elements and cards
    document.querySelectorAll('.fade-in, .plan-card, .step-card, .benefit-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ============ NAVBAR SCROLL EFFECT ============
function initNavbarScroll() {
    const navbar = document.querySelector('.axis-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============ SMOOTH SCROLL ============
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile nav
                const navCollapse = document.getElementById('navMenu');
                if (navCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navCollapse).hide();
                }
            }
        });
    });
}
