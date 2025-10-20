document.addEventListener('DOMContentLoaded', () => {

    // --- Product Contact Form Logic (contact-product.html) ---
    const productContactForm = document.getElementById('productContactForm');

    if (productContactForm) {
        // 1. Get Product Name from URL and pre-fill the form
        const urlParams = new URLSearchParams(window.location.search);
        const productName = urlParams.get('item');
        
        const productNameDisplay = document.getElementById('product-name-display');
        const productNameInput = document.getElementById('product-name-input');

        if (productName) {
            // Display the product name to the user
            productNameDisplay.textContent = productName;
            // Set the hidden field value so it gets submitted
            productNameInput.value = productName;
        } else {
            productNameDisplay.textContent = "General Inquiry";
            productNameInput.value = "General Product Inquiry";
        }
        
        // 2. No client-side submission logic needed; Formspree handles the form POST.
    }
    
    // --- Custom Print Form Logic (custom.html) ---
    // No client-side submission logic needed; Formspree handles the form POST.

    // --- Smooth Scrolling for internal links (on index.html) ---
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is an internal anchor on the current page
            if (this.hostname === location.hostname && this.pathname === location.pathname && this.hash.length > 0) {
                 e.preventDefault();
                 document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});