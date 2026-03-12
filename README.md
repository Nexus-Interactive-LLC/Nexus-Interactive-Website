# Nexus Interactive - Website

Modern, professional website for Nexus Interactive web development agency.

## 📁 File Structure

```
nexus-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # JavaScript functionality
├── assets/            # For images, fonts, etc. (currently empty)
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Open Locally
1. Open `index.html` in your web browser
2. The website will work immediately with all styles and functionality

### Option 2: Deploy to Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire `nexus-website` folder
3. Your site will be live in seconds with a free subdomain
4. You can add a custom domain in Netlify settings

### Option 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your project (upload folder or connect to GitHub)
3. Deploy with one click
4. Add custom domain in project settings

### Option 4: GitHub Pages
1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `username.github.io/repository-name`

### Option 5: Traditional Web Hosting
1. Get hosting from providers like:
   - Hostinger
   - Bluehost
   - SiteGround
   - HostGator
2. Upload files via FTP or hosting control panel
3. Configure your domain name

## ✏️ Customization

### Update Contact Information
Edit `index.html` and find these lines to update:

```html
<!-- Email -->
<a href="mailto:hello@nexusinteractive.com">hello@nexusinteractive.com</a>

<!-- Phone -->
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

### Change Colors
Edit `css/style.css` at the top where CSS variables are defined:

```css
:root {
    --primary: #0066FF;        /* Main brand color */
    --primary-dark: #0052CC;   /* Darker shade */
    --accent: #00E5FF;         /* Accent color */
    /* ... */
}
```

### Add Your Logo
1. Place your logo file in the `assets/` folder
2. In `index.html`, replace the text logo:

```html
<!-- Replace this: -->
<div class="logo">Nexus Interactive</div>

<!-- With this: -->
<img src="assets/logo.png" alt="Nexus Interactive" class="logo">
```

### Add Analytics
Before the closing `</body>` tag in `index.html`, add:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern animations and transitions
- ✅ Smooth scrolling navigation
- ✅ SEO optimized with meta tags
- ✅ Fast loading and performance optimized
- ✅ Cross-browser compatible
- ✅ Accessibility features included
- ✅ Clean, maintainable code structure

## 🎨 Services Included

1. Web Design
2. Web Development
3. Mobile App Development
4. Performance Optimization
5. SEO & Analytics
6. Maintenance & Support
7. E-commerce Solutions
8. UI/UX Design
9. Custom Dashboards

## 📧 Support

For questions or customization help, contact: hello@nexusinteractive.com

## 📄 License

© 2024 Nexus Interactive. All rights reserved.
