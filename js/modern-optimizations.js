// Modern JavaScript optimizations for Raghad Company Website
// Replaces legacy JavaScript with modern, efficient code

// Modern event listener with passive option for better performance
document.addEventListener('DOMContentLoaded', function() {
    // Optimize scroll events with passive listeners
    let ticking = false;

    function updateScrollPosition() {
        // Your scroll handling code here
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, {
        passive: true
    });

    // Optimize resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Handle resize
        }, 250);
    }, {
        passive: true
    });

    // Modern intersection observer for lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Modern fetch API for AJAX requests
    function makeRequest(url, options = {}) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
    }

    // Optimize form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Use modern fetch instead of XMLHttpRequest
            fetch(form.action, {
                method: 'POST',
                body: formData
            }).then(response => {
                if (response.ok) {
                    // Handle success
                    console.log('Form submitted successfully');
                } else {
                    throw new Error('Form submission failed');
                }
            }).catch(error => {
                console.error('Error:', error);
            });
        });
    });

    // Modern CSS custom properties for dynamic styling
    function updateTheme() {
        const root = document.documentElement;
        const theme = localStorage.getItem('theme') || 'light';
        root.style.setProperty('--theme-color', theme === 'dark' ? '#333' : '#fff');
    }

    updateTheme();

    // Optimize animations with requestAnimationFrame
    function animateElement(element, duration, callback) {
        const start = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            callback(progress);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    // Modern error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        // Send error to analytics if needed
    });

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registered');
        }).catch(function(error) {
            console.log('ServiceWorker registration failed');
        });
    }
});

// Modern module pattern
const RaghadCompany = {
    init: function() {
        this.bindEvents();
        this.optimizeImages();
    },

    bindEvents: function() {
        // Modern event delegation
        document.addEventListener('click', function(e) {
            if (e.target.matches('.btn-primary')) {
                // Handle primary button clicks
            }
        });
    },

    optimizeImages: function() {
        // Use modern image optimization techniques
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.loading) {
                img.loading = 'lazy';
            }
        });
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', RaghadCompany.init.bind(RaghadCompany));
} else {
    RaghadCompany.init();
}