# ryanshill.com — Personal Portfolio & Business Site

A fully hand-coded, multi-page personal portfolio and business website. Built from scratch with HTML, CSS, JavaScript, and Node.js. Deployed as a static site on Vercel with a serverless Node.js API for contact form handling.

Live: [ryanshill.com](https://www.ryanshill.com)  
GitHub: [github.com/ryan77145/RyanShillPortfolioWebsite](https://github.com/ryan77145/RyanShillPortfolioWebsite)

---

## Features

- Image-based card homepage layout linking to all major sections
- Hamburger navigation menu for mobile with JavaScript toggle
- Functional contact form with serverless email delivery via Nodemailer and Gmail
- Success banner displayed on form submission without page reload
- Google Analytics 4 loaded asynchronously with IP anonymization and no cookie storage
- Custom GA event tracking for internal links, external links, and button clicks
- Security headers configured via `vercel.json`: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Clean URLs and trailing slash enforcement via Vercel config
- `robots.txt` and `sitemap.xml` for SEO
- Open Graph meta tags on all pages
- Canonical URLs on all pages
- Responsive design with breakpoints at 480px, 580px, and 800px
- CSS custom properties for a consistent color system

---

## Pages

**index.html** — Homepage with image-based navigation cards linking to About, Portfolio, Business, and Contact.

**aboutme.html** — Developer bio, photo, and a link to the certifications page.

**certifications.html** — freeCodeCamp Responsive Web Design, ISC² CC, DOD Cyber Sentinel Challenge, and TestOut PC Pro / Network Pro certifications.

**projects/index.html** — Portfolio page displaying freeCodeCamp certification projects in a two-column card layout with embedded iframes and full-view links.

**contact.html** — Contact form with name, email, phone, preferred contact method checkboxes, and a comments textarea. Submits to the serverless API endpoint.

---

## File Structure

```
/
├── index.html               # Homepage
├── aboutme.html             # About page
├── certifications.html      # Certifications page
├── contact.html             # Contact page
├── styles.css               # Shared stylesheet
├── script.js                # Hamburger nav, GA tracking, contact form submission
├── server.js                # Express server (local development)
├── contact.js               # Serverless API function (Vercel deployment)
├── package.json
├── vercel.json              # Routing, headers, redirects, clean URLs
├── robots.txt
├── sitemap.xml
├── projects/
│   └── index.html           # Portfolio page
└── Assets/
    └── ...
```

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic structure, Open Graph, SEO meta tags |
| CSS3 | Custom properties, Flexbox, CSS Grid, responsive breakpoints |
| JavaScript (ES6) | Hamburger nav, async form submission, GA event tracking |
| Node.js / Express | Local development server |
| Nodemailer | Contact form email delivery via Gmail |
| Vercel | Static hosting, serverless functions, security headers |
| Google Analytics 4 | Privacy-respecting analytics, no cookies, anonymized IP |

---

## Environment Variables

Required for contact form email delivery:

```
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_app_password
```

---

## About

Built and maintained by **Ryan Shill**.  
[ryanshill.com](https://www.ryanshill.com)
