# Nexus Interactive — Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/4ca869eb-2cf2-4437-90f7-c695ebfc5134/deploy-status)](https://app.netlify.com/projects/nexusinteractive/deploys)

Modern agency website for Nexus Interactive. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools. Deployed on Netlify.

---

## File Structure

```
nexus-interactive-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles + CSS variables
├── js/
│   └── main.js             # JavaScript (nav, modal, forms, animations)
├── images/
│   ├── logo.svg            # Horizontal lockup (nav + footer)
│   ├── logo-mark.svg       # Square icon (avatar, app icon, favicon source)
└── README.md               # This file
```

---

## Deployment — Netlify

The site is connected to Netlify. Any push to the linked branch automatically triggers a new deploy.

### Trigger a Manual Redeploy
1. Log in to [app.netlify.com](https://app.netlify.com)
2. Open the **Nexus Interactive** site
3. Go to **Deploys** → **Trigger deploy** → **Deploy site**

### Update the Live Site
Edit any file locally, then push to the connected Git branch. Netlify picks it up automatically — no manual upload needed.

If you're editing files directly without Git, drag and drop the updated project folder onto the Netlify deploy zone under **Deploys**.

### Custom Domain
The domain is managed under **Site Settings → Domain Management**. If you ever need to update DNS records (e.g. for email), do it through your domain registrar — not Netlify — unless you're using Netlify DNS.

### HTTPS
Netlify provisions and auto-renews a free Let's Encrypt SSL certificate. No action needed.

---

## Before Going Live — Required Setup

### 1. Connect the Audit Request Form

All "Request a Free Audit", "Start a Project", and "Let's Talk" buttons open a modal form. Submissions go to Formspree.

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and set the destination to `ali.a@nexusint.dev`
3. Copy the form ID (format: `xyzabcde`)
4. In `index.html`, replace `YOUR_FORM_ID` in the audit form action:

```html
<form id="auditForm" action="https://formspree.io/f/YOUR_FORM_ID" ...>
```

### 2. Connect the Newsletter Subscribe Forms

There are two subscribe forms — one in the Insights section and one in the strip above the CTA. Recommended: use a separate Formspree form for subscribers so audit leads and newsletter signups stay in different lists.

```html
<!-- Insights section -->
<form id="insightsSubscribeForm" action="https://formspree.io/f/YOUR_FORM_ID" ...>

<!-- Subscribe strip -->
<form id="stripSubscribeForm" action="https://formspree.io/f/YOUR_FORM_ID" ...>
```

### 3. Add a Favicon

Convert `assets/logo-mark.svg` to PNG at [realfavicongenerator.net](https://realfavicongenerator.net), drop the output files into `assets/`, then add to the `<head>` in `index.html`:

```html
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
```

### 4. Add Google Analytics

Before the closing `</body>` tag in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

## Customization

### Colors

All colors are CSS variables at the top of `css/styles.css`:

```css
:root {
    --primary: #0055FF;        /* Main blue — buttons, highlights */
    --primary-light: #3378FF;  /* Hover state */
    --accent: #00D4FF;         /* Cyan — logo dot, em text, node glow */
    --dark: #080C1A;           /* Section backgrounds */
    --darker: #040710;         /* Page background */
}
```

The logo uses hardcoded hex values. If you change `--primary` or `--accent`, also update the inline SVG in `index.html` (nav and footer logos) and the files in `assets/`.

### Logo

The logo is an inline SVG embedded in the nav and footer. The standalone files in `assets/` are for external use — social profiles, email signatures, print materials, etc.

To use an image file instead of inline SVG:

```html
<!-- Replace the <svg>...</svg> block in the nav with: -->
<img src="assets/logo.svg" alt="Nexus Interactive" height="34" class="logo">
```

### Case Studies

Edit the `.case-card` blocks in the `#work` section of `index.html`:

```html
<article class="case-card">
    <div class="case-meta">
        <span class="case-tag">Category · Type</span>
        <span class="case-year">2025</span>
    </div>
    <h3>Client Name</h3>
    <p class="case-problem"><strong>The Problem:</strong> ...</p>
    <p class="case-solution"><strong>The Solution:</strong> ...</p>
    <div class="case-stack">
        <span>Tech</span><span>Stack</span><span>Tags</span>
    </div>
</article>
```

The first card (`.case-featured`) spans the full width and includes a `.case-impact` block with three metrics. Use it for your strongest project.

### Blog / Insights Articles

The three `.insight-card` elements in `#insights` currently show "Coming soon →". When an article is ready, swap the placeholder for a real link:

```html
<!-- Before -->
<span class="insight-cta">Coming soon →</span>

<!-- After -->
<a href="https://your-blog-url.com/slug" class="insight-cta" target="_blank" rel="noopener">Read article →</a>
```

### Contact Details

```html
<!-- CTA section -->
<a href="tel:+16122088187">Or call +1 (612) 208-8187</a>

<!-- Footer -->
<a href="mailto:ali.a@nexusint.dev">ali.a@nexusint.dev</a>
<a href="tel:+16122088187">+1 (612) 208-8187</a>
```

---

## Features

- Fully responsive — mobile, tablet, desktop
- SVG logo mark — scales perfectly at all sizes, no raster assets needed
- Audit request modal — multi-field form with validation, budget selector, loading state, success screen
- Newsletter subscribe — two forms (insights section + pre-CTA strip), both with inline validation
- Spam protection — honeypot field on all Formspree forms
- Scroll reveal animations — elements fade in on viewport entry
- Active nav link highlighting — updates on scroll
- Mobile hamburger menu — full-screen overlay
- Reduced motion support — all animations disabled when user prefers it
- Tech stack marquee — scrolling ticker of technologies
- Case studies with problem / solution / impact structure
- Niche landing sections — community orgs, e-commerce, startups
- Referral & partnerships section
- Insights / blog teaser with subscribe form
- SEO meta tags — description, keywords

---

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| Primary | `#0055FF` | Buttons, active states, borders |
| Primary Light | `#3378FF` | Hover states |
| Accent | `#00D4FF` | Logo dot, `em` text, center node glow |
| Text | `#EDF0FA` | Primary text, N strokes in logo |
| Background | `#040710` | Page background |
| Surface | `rgba(255,255,255,0.04)` | Cards and panels |

---

## Contact

ali.a@nexusint.dev · +1 (612) 208-8187

© 2026 Nexus Interactive LLC. All rights reserved.