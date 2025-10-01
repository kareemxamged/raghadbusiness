<?php
/**
 * Default Template File
 * Raghad Company Website
 * 
 * This file serves as the default template for the Raghad Company website.
 * It handles the main page display and includes necessary functionality.
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Set page title
$page_title = 'Raghad Company - Business Solutions in Gulf Markets';

// Include header
get_header();
?>

<main id="main" class="site-main">
    <div class="container">
        <div class="content-wrapper">
            
            <!-- Hero Section -->
            <section class="hero-section">
                <div class="hero-content">
                    <h1 class="hero-title">Raghad</h1>
                    <h2 class="hero-subtitle">Unleash your business potential in the major Gulf markets</h2>
                    <p class="hero-description">Years of experience in the Gulf markets at your fingertips.</p>
                    
                    <div class="hero-buttons">
                        <a href="#services" class="btn btn-primary">Our Services</a>
                        <a href="#contact" class="btn btn-secondary">Get Started</a>
                    </div>
                </div>
                
                <div class="hero-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero-image.jpg" alt="Raghad Business Solutions" />
                </div>
            </section>

            <!-- Vision Section -->
            <section class="vision-section" id="vision">
                <div class="vision-content">
                    <h2>Our Vision?</h2>
                    <p>We aim to be the leading business establishment partner in the Gulf region, providing comprehensive solutions that enable companies to thrive in these dynamic markets.</p>
                    
                    <div class="vision-features">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <h3>Guaranteed Establishment</h3>
                            <p>Open your business bank account once your company is ready to operate; or you get your money back</p>
                        </div>
                        
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-rocket"></i>
                            </div>
                            <h3>Rapid Results</h3>
                            <p>Fast-track your business setup with our streamlined processes and expert guidance</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section class="services-section" id="services">
                <div class="services-header">
                    <h2>Our Services</h2>
                    <p>Years of experience in the Gulf markets at your fingertips.</p>
                </div>
                
                <div class="services-grid">
                    <div class="service-item">
                        <div class="service-icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <h3>Company Formation</h3>
                        <p>Complete business setup services across major Gulf markets</p>
                    </div>
                    
                    <div class="service-item">
                        <div class="service-icon">
                            <i class="fas fa-file-contract"></i>
                        </div>
                        <h3>Legal Documentation</h3>
                        <p>Comprehensive legal support and documentation services</p>
                    </div>
                    
                    <div class="service-item">
                        <div class="service-icon">
                            <i class="fas fa-university"></i>
                        </div>
                        <h3>Bank Account Opening</h3>
                        <p>Assistance with business bank account setup and management</p>
                    </div>
                    
                    <div class="service-item">
                        <div class="service-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h3>Business Consulting</h3>
                        <p>Strategic guidance for market entry and expansion</p>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us Section -->
            <section class="why-choose-section">
                <div class="why-choose-content">
                    <h2>Why Raghad Business?</h2>
                    <p>Join the 3000+ successful companies established by Raghad and expand their business horizons with us</p>
                    
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-number">3000+</div>
                            <div class="stat-label">Companies Established</div>
                        </div>
                        
                        <div class="stat-item">
                            <div class="stat-number">15+</div>
                            <div class="stat-label">Years Experience</div>
                        </div>
                        
                        <div class="stat-item">
                            <div class="stat-number">6</div>
                            <div class="stat-label">Gulf Markets</div>
                        </div>
                        
                        <div class="stat-item">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section class="contact-section" id="contact">
                <div class="contact-content">
                    <h2>Get Started Today</h2>
                    <p>Ready to establish your business in the Gulf markets? Contact us for a consultation.</p>
                    
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+966 54 698 7943</span>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>info@raghad10.com</span>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Gulf Region</span>
                        </div>
                    </div>
                    
                    <div class="contact-buttons">
                        <a href="tel:+966XXXXXXXXX" class="btn btn-primary">Call Now</a>
                        <a href="mailto:info@raghad10.com" class="btn btn-secondary">Email Us</a>
                    </div>
                </div>
            </section>

        </div>
    </div>
</main>

<?php
// Include footer
get_footer();
?>
