// Optimized JavaScript for Raghad Company Website
// This file prevents long main-thread tasks and improves performance

// Task scheduler to break up long tasks
class TaskScheduler {
    constructor() {
        this.tasks = [];
        this.isRunning = false;
    }

    addTask(task, priority = 'normal') {
        this.tasks.push({
            task,
            priority,
            timestamp: Date.now()
        });
        this.schedule();
    }

    schedule() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.processTasks();
    }

    async processTasks() {
        const startTime = performance.now();
        const maxExecutionTime = 5; // 5ms max per frame

        while (this.tasks.length > 0 && (performance.now() - startTime) < maxExecutionTime) {
            const task = this.tasks.shift();
            try {
                await task.task();
            } catch (error) {
                console.error('Task execution error:', error);
            }
        }

        if (this.tasks.length > 0) {
            // Use requestIdleCallback if available, otherwise setTimeout
            if (window.requestIdleCallback) {
                requestIdleCallback(() => {
                    this.isRunning = false;
                    this.schedule();
                });
            } else {
                setTimeout(() => {
                    this.isRunning = false;
                    this.schedule();
                }, 0);
            }
        } else {
            this.isRunning = false;
        }
    }
}

// Global task scheduler
const taskScheduler = new TaskScheduler();

// Optimized DOM manipulation
function optimizedDOMUpdate(selector, updateFunction) {
    taskScheduler.addTask(async () => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            updateFunction(element);
        });
    });
}

// Optimized event listeners with passive options
function addOptimizedEventListener(element, event, handler, options = {}) {
    const optimizedOptions = {
        passive: true,
        ...options
    };

    element.addEventListener(event, handler, optimizedOptions);
}

// Optimized scroll handler
let scrollTimeout;

function optimizedScrollHandler() {
    if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = requestAnimationFrame(() => {
        // Handle scroll-related updates
        const scrollY = window.scrollY;

        // Update navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 100);
        }

        // Update progress bar
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min((scrollY / scrollHeight) * 100, 100);
            progressBar.style.width = progress + '%';
        }
    });
}

// Optimized resize handler
let resizeTimeout;

function optimizedResizeHandler() {
    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => {
        // Handle resize-related updates
        const viewportWidth = window.innerWidth;

        // Update mobile menu visibility
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu && viewportWidth > 768) {
            mobileMenu.classList.remove('active');
        }

        // Update responsive images
        const responsiveImages = document.querySelectorAll('img[data-src]');
        responsiveImages.forEach(img => {
            const src = img.getAttribute('data-src');
            if (src && !img.src) {
                img.src = src;
            }
        });
    }, 250);
}

// Optimized animation frame handler
function optimizedAnimationFrame(callback) {
    let animationId;

    function animate() {
        callback();
        animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    };
}

// Optimized intersection observer
function createOptimizedObserver(callback, options = {}) {
    const defaultOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerOptions = {
        ...defaultOptions,
        ...options
    };

    return new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                taskScheduler.addTask(() => callback(entry));
            }
        });
    }, observerOptions);
}

// Optimized lazy loading
function initOptimizedLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = createOptimizedObserver((entry) => {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
    });

    images.forEach(img => imageObserver.observe(img));
}

// Optimized form handling
function initOptimizedFormHandling() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            taskScheduler.addTask(async () => {
                const formData = new FormData(this);
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                // Show loading state
                submitBtn.textContent = 'جاري الإرسال...';
                submitBtn.disabled = true;

                try {
                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    // Show success message
                    showOptimizedNotification('تم إرسال الرسالة بنجاح!', 'success');

                    // Reset form
                    this.reset();
                } catch (error) {
                    showOptimizedNotification('حدث خطأ في الإرسال', 'error');
                } finally {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            });
        });
    });
}

// Optimized notification system
function showOptimizedNotification(message, type = 'info') {
    taskScheduler.addTask(() => {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '5px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            backgroundColor: getNotificationColor(type)
        });

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 5000);
    });
}

function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || colors.info;
}

// Initialize optimized components
document.addEventListener('DOMContentLoaded', function() {
    // Add optimized event listeners
    addOptimizedEventListener(window, 'scroll', optimizedScrollHandler);
    addOptimizedEventListener(window, 'resize', optimizedResizeHandler);

    // Initialize optimized components
    initOptimizedLazyLoading();
    initOptimizedFormHandling();

    // Initialize intersection observers for animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = createOptimizedObserver((entry) => {
        entry.target.classList.add('visible');
    });

    fadeElements.forEach(el => fadeObserver.observe(el));
});

// Performance monitoring
function monitorPerformance() {
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'longtask') {
                    console.warn('Long task detected:', entry.duration + 'ms');
                }
            });
        });

        observer.observe({
            entryTypes: ['longtask']
        });
    }
}

// Initialize performance monitoring
monitorPerformance();