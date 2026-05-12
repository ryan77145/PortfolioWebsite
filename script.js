//GA Tracking
function initTracking() {
    const domain = window.location.hostname;
    document.addEventListener("click", function(e) {
        const link = e.target.closest("a");
        const button = e.target.closest("button");
        if (link) {
            const href = link.getAttribute("href");
            if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
            const isExternal = href.startsWith("http") && !href.includes(domain);
            if (isExternal) {
                gtag("event", "external_link_click", {
                    link_url: href,
                    link_text: link.innerText.trim() || "(no text)"
                });
            } else {
                gtag("event", "internal_link_click", {
                    link_url: href,
                    link_text: link.innerText.trim() || "(no text)"
                });
            }
        }
        if (button) {
            gtag("event", "button_click", {
                button_id: button.id || "(no id)",
                button_text: button.innerText.trim() || "(no text)"
            });
        }
    });
}

window.onload = function() {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-ED4J0PBTKM";
    script.async = true;
    script.onload = function() {
        initTracking();
    };
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-ED4J0PBTKM', {
        'anonymize_ip': true,
        'storage': 'none',
        'client_storage': 'none'
    });
}

//Hamburger Menu JS
//Hamburger Menu JS
const toggleButton = document.getElementsByClassName('toggle-button')[0];

if (toggleButton) {
    const navBarLinks = document.getElementsByClassName('navlinks')[0];
    const title = document.getElementsByClassName('title')[0];

    toggleButton.addEventListener('click', () => {
        navBarLinks.classList.toggle('active');
        title.classList.toggle('active');
    });
}

//Contact Form JS

const contactForm = document.getElementById('contact');

if (contactForm) {
    const banner = document.getElementsByClassName('formsubmittedbanner')[0];
    const close = document.getElementsByClassName('closebtn')[0];

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        const response = await fetch('https://www.ryanshill.com/api/contact', {
            method: 'POST',
            body: new URLSearchParams(formData)
        });

        if (response.ok) {
            banner.classList.toggle('active');
        }
    });

    close.addEventListener('click', () => {
        banner.classList.toggle('active');
    });
}


