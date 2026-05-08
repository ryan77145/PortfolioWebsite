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

function loadGA(withCookies) {
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
        'storage': withCookies ? 'granted' : 'none',
        'client_storage': withCookies ? 'granted' : 'none'
    });
}

function checkCookie() {
    const banner = document.querySelector(".cookieBanner");
    if (document.cookie.includes("cookieConsent=yes")) {
        banner.style.display = "none";
        loadGA(true);
    } else if (document.cookie.includes("cookieConsent=no")) {
        banner.style.display = "none";
        loadGA(false);
    } else {
        banner.style.display = "block";
        loadGA(false);
    }
}

window.onload = function() {
    checkCookie();
    const acceptbtn = document.querySelector("#accept");
    const banner = document.querySelector(".cookieBanner");
    acceptbtn.onclick = function() {
        document.cookie = "cookieConsent=yes; max-age=31536000; path=/";
        banner.style.display = "none";
        loadGA(true);
    }
    const declinebtn = document.querySelector("#decline");
    declinebtn.onclick = function() {
        document.cookie = "cookieConsent=no; max-age=31536000; path=/";
        banner.style.display = "none";
        loadGA(false);
    }
    const preferences = document.querySelector(".cookiePreferences");
    const prefbtn = document.querySelector("#preferences");
    prefbtn.onclick = function() {
        preferences.style.display = "block";
    }
    const closebtn = document.querySelector("#close");
    closebtn.onclick = function() {
        preferences.style.display = "none";
    }
    const savebtn = document.querySelector("#save");
    const analyticsCheckbox = document.querySelector(".analytics");
    savebtn.onclick = function() {
        if (analyticsCheckbox.checked) {
            document.cookie = "cookieConsent=yes; max-age=31536000; path=/";
            loadGA(true);
        } else {
            document.cookie = "cookieConsent=no; max-age=31536000; path=/";
            loadGA(false);
        }
        preferences.style.display = "none";
    }
    const consentPreferences = document.querySelector("#consentPreferences");
    consentPreferences.onclick = function() {
        preferences.style.display = "block";
    }
}
