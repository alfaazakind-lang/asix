// ============ SPLASH ============
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splashScreen');
    const main = document.getElementById('mainSite');

    setTimeout(() => {
        splash.classList.add('hide');
        main.style.display = 'block';
        setTimeout(() => splash.style.display = 'none', 500);
    }, 3000);

    renderPlans();
    initScrollAnim();
    initSmoothScroll();
});

// ============ PLANS ============
const WHATSAPP = '916291349239';

const plans = [
    {
        name: 'Silver',
        icon: 'fas fa-credit-card',
        limit: '₹1,50,000',
        popular: false,
        features: [
            'Credit limit up to ₹1.5 Lakh',
            '1% cashback on all spends',
            'No extra charges applicable',
            'EMI conversion on purchases',
            'Basic purchase protection',
            '24/7 customer support'
        ]
    },
    {
        name: 'Gold',
        icon: 'fas fa-gem',
        limit: '₹3,00,000',
        popular: true,
        features: [
            'Credit limit up to ₹3 Lakh',
            '2% cashback on all spends',
            'No extra charges applicable',
            'Fuel surcharge waiver',
            'Domestic lounge access (4/yr)',
            'Priority customer support'
        ]
    },
    {
        name: 'Platinum',
        icon: 'fas fa-crown',
        limit: '₹5,00,000',
        popular: false,
        features: [
            'Credit limit up to ₹5 Lakh',
            '3% cashback on all spends',
            'No extra charges applicable',
            'International lounge access',
            'Comprehensive travel insurance',
            'Dedicated relationship manager'
        ]
    },
    {
        name: 'Signature',
        icon: 'fas fa-star',
        limit: '₹10,00,000',
        popular: false,
        features: [
            'Credit limit up to ₹10 Lakh',
            '5% cashback on premium spends',
            'No extra charges applicable',
            'Unlimited lounge access',
            'Premium travel & medical insurance',
            'Exclusive invite-only events'
        ]
    }
];

function renderPlans() {
    const container = document.getElementById('planCards');
    container.innerHTML = plans.map((plan, i) => `
        <div class="col-lg-3 col-md-6 fade-up" style="transition-delay:${i * 0.1}s">
            <div class="plan-card ${plan.popular ? 'popular' : ''}">
                ${plan.popular ? '<div class="popular-badge">MOST POPULAR</div>' : ''}
                <div class="plan-icon"><i class="${plan.icon}"></i></div>
                <div class="plan-name">${plan.name}</div>
                <div class="plan-limit">${plan.limit}</div>
                <div class="plan-tag">Existing Card Holders</div>
                <ul class="plan-features">
                    ${plan.features.map(f => `<li><i class="fas fa-check"></i>${f}</li>`).join('')}
                </ul>
                <a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I want to increase my Axis Bank credit card limit to ${plan.limit} under ${plan.name} Plan`)}"
                   class="plan-btn" target="_blank">
                    <i class="fas fa-arrow-up me-1"></i> Increase Limit
                </a>
            </div>
        </div>
    `).join('');
}

// ============ SCROLL ANIMATION ============
function initScrollAnim() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('show');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up, .plan-card, .step-box, .benefit-box').forEach(el => {
        if (!el.classList.contains('fade-up')) el.classList.add('fade-up');
        observer.observe(el);
    });
}

// ============ SMOOTH SCROLL ============
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const t = document.querySelector(this.getAttribute('href'));
            if (t) {
                t.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const nav = document.getElementById('mainNav');
                if (nav && nav.classList.contains('show')) {
                    new bootstrap.Collapse(nav).hide();
                }
            }
        });
    });
}
