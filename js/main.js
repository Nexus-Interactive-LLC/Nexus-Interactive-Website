// ================================
// Audit Modal
// ================================
const auditModal = document.getElementById('auditModal');
const modalClose = document.getElementById('modalClose');
const successClose = document.getElementById('successClose');
const auditForm = document.getElementById('auditForm');
const modalBody = document.getElementById('modalBody');
const modalSuccess = document.getElementById('modalSuccess');

function openAuditModal(e) {
    if (e) e.preventDefault();
    auditModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Reset to form view each time
    modalBody.hidden = false;
    modalSuccess.hidden = true;
    // Reset form
    auditForm.reset();
    clearErrors();
}

function closeAuditModal() {
    auditModal.classList.remove('open');
    document.body.style.overflow = '';
}

// Expose globally so inline onclick= works
window.openAuditModal = openAuditModal;

modalClose?.addEventListener('click', closeAuditModal);
successClose?.addEventListener('click', closeAuditModal);

// Close on backdrop click
auditModal?.addEventListener('click', (e) => {
    if (e.target === auditModal) closeAuditModal();
});

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && auditModal.classList.contains('open')) closeAuditModal();
});

// ================================
// Form Validation & Submission
// ================================
function clearErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}

function setError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) input.classList.add('error');
    if (error) error.textContent = message;
}

function validateForm() {
    clearErrors();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const projectType = document.getElementById('projectType');
    const message = document.getElementById('message');

    if (!name?.value.trim()) {
        setError('name', 'nameError', 'Please enter your name.');
        valid = false;
    }

    const emailVal = email?.value.trim();
    if (!emailVal) {
        setError('email', 'emailError', 'Please enter your email address.');
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        setError('email', 'emailError', 'Please enter a valid email address.');
        valid = false;
    }

    if (!projectType?.value) {
        setError('projectType', 'projectTypeError', 'Please select a project type.');
        valid = false;
    }

    if (!message?.value.trim()) {
        setError('message', 'messageError', 'Please tell us a bit about your project.');
        valid = false;
    }

    return valid;
}

auditForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const submitBtn = document.getElementById('submitBtn');
    const submitText = submitBtn.querySelector('.submit-text');
    const submitSpinner = submitBtn.querySelector('.submit-spinner');

    // Loading state
    submitBtn.disabled = true;
    submitText.hidden = true;
    submitSpinner.hidden = false;

    try {
        const formData = new FormData(auditForm);
        const response = await fetch(auditForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // Show success
            modalBody.hidden = true;
            modalSuccess.hidden = false;
        } else {
            const data = await response.json();
            const msg = data?.errors?.map(err => err.message).join(', ')
                || 'Something went wrong. Please try emailing us directly.';
            alert(msg);
        }
    } catch {
        alert('Network error — please email us directly at ali.a@nexusint.dev');
    } finally {
        submitBtn.disabled = false;
        submitText.hidden = false;
        submitSpinner.hidden = true;
    }
});

// ================================
// Mobile Menu Toggle
// ================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ================================
// Smooth Scrolling
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ================================
// Nav: Scroll State + Active Links
// ================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // Scroll class for nav
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, { passive: true });

// ================================
// Scroll Reveal Animation
// ================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger children slightly
            entry.target.style.transitionDelay = `${(i % 4) * 80}ms`;
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll(
    '.case-card, .niche-card, .service-card, .step, .insight-card, .stat-card'
).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// ================================
// Reduce motion
// ================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animationDuration = '0.01ms';
        el.style.transitionDuration = '0.01ms';
    });
}

console.log('Nexus Interactive — nexusint.dev');

// ================================
// Subscribe Forms
// ================================
async function handleSubscribe(formId, emailId, msgId) {
    const form = document.getElementById(formId);
    const emailInput = document.getElementById(emailId);
    const msg = document.getElementById(msgId);
    const btn = form?.querySelector('.subscribe-btn');
    if (!form || !emailInput || !msg) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        msg.textContent = '';
        msg.className = 'subscribe-msg';
        emailInput.classList.remove('error');

        const email = emailInput.value.trim();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailInput.classList.add('error');
            msg.textContent = 'Please enter a valid email address.';
            msg.classList.add('error-msg');
            return;
        }

        btn.disabled = true;
        btn.textContent = 'Subscribing...';

        try {
            const data = new FormData(form);
            const res = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                emailInput.value = '';
                msg.textContent = '✓ You\'re subscribed. Talk soon.';
                msg.classList.add('success');
                btn.textContent = 'Subscribed ✓';
            } else {
                throw new Error();
            }
        } catch {
            msg.textContent = 'Something went wrong — try emailing us directly.';
            msg.classList.add('error-msg');
            btn.disabled = false;
            btn.textContent = 'Subscribe';
        }
    });
}

handleSubscribe('insightsSubscribeForm', 'insightsEmail', 'insightsMsg');
handleSubscribe('stripSubscribeForm', 'stripEmail', 'stripMsg');