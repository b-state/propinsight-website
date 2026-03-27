// Web Components for Header and Footer
// Used across all pages for consistency

class SiteHeader extends HTMLElement {
    connectedCallback() {
        // Check if we're on the homepage for smooth scrolling behavior
        const isHomepage = window.location.pathname === '/' ||
                          window.location.pathname === '/index.html' ||
                          window.location.pathname.endsWith('/index.html');

        // On homepage: use data-href for smooth scroll, on other pages: use direct links
        const funktionenLink = isHomepage ? 'href="#" class="menu-link" data-href="#section-services"' : 'href="index.html#section-services" class="menu-link"';
        const preiseLink = isHomepage ? 'href="#" class="menu-link" data-href="#section-pricing"' : 'href="index.html#section-pricing" class="menu-link"';
        const faqsLink = isHomepage ? 'href="#" class="menu-link" data-href="#section-faqs"' : 'href="index.html#section-faqs" class="menu-link"';

        this.innerHTML = `
    <header id="header" class="transparent-header">
        <div id="header-wrap">
            <div class="container">
                <div class="header-row">

                    <!-- Logo -->
                    <div id="logo" class="col-lg-2 me-lg-auto">
                        <a href="index.html" class="w-auto">
                            <img class="logo-default" src="demos/saas-2/images/logo.png" alt="propinsight Logo">
                            <img class="logo-sticky" src="demos/saas-2/images/logo-dark.png" alt="propinsight Logo">
                        </a>
                    </div>

                    <div class="header-misc ms-auto col-lg-2 justify-content-lg-end">
                        <a href="https://app.propinsight.de" class="button button-border button-rounded rounded border-contrast-500 mx-0"
                           style="--cnvs-btn-fontsize: 1.125rem"><i
                                class="bi-person-fill d-none d-md-inline-block me-2 fs-6"></i>Login</a>
                    </div>

                    <div class="primary-menu-trigger">
                        <button class="cnvs-hamburger" type="button" title="Open Mobile Menu">
                            <span class="cnvs-hamburger-box"><span class="cnvs-hamburger-inner"></span></span>
                        </button>
                    </div>

                    <!-- Primary Navigation -->
                    <nav class="primary-menu with-arrows">

                        <ul class="one-page-menu menu-container" data-easing="easeInOutExpo" data-speed="1250"
                            data-offset="65">
                            <li class="menu-item">
                                <a ${funktionenLink}>
                                    <div>Funktionen</div>
                                </a>
                            </li>

                            <li class="menu-item">
                                <a ${preiseLink}>
                                    <div>Preise</div>
                                </a>
                            </li>
                            <li class="menu-item">
                                <a ${faqsLink}>
                                    <div>FAQs</div>
                                </a>
                            </li>

                        </ul>

                    </nav>

                </div>
            </div>
        </div>
        <div class="header-wrap-clone"></div>
    </header>
        `;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer id="footer" class="bg-white border-0">
        <div class="container">

            <!-- Footer Widgets -->
            <div class="footer-widgets-wrap">
                <div class="row gx-4 gy-5">

                    <div class="col-lg-3 col-6">

                        <div class="widget widget_links widget-li-noicon">

                            <h4 class="fw-bolder text-contrast-1000 text-smaller text-uppercase mb-4">Das Produkt</h4>

                            <ul>
                                <li><a href="https://propinsight.notion.site/Dokumentation-09ca343f5b7b8365aef581aa29727ce2?source=copy_link">Dokumentation</a></li>
                                <li><a href="mailto:hallo@propinsight.de?subject=Feedback%20Propinsight">Feedback</a></li>
                            </ul>

                        </div>

                    </div>

                    <div class="col-lg-3 col-6">

                        <div class="widget widget_links widget-li-noicon">

                            <h4 class="fw-bolder text-contrast-1000 text-smaller text-uppercase mb-4">Formalien</h4>

                            <ul>
                                <li><a href="/impressum.html">Impressum</a></li>
                                <li><a href="/datenschutz.html">Datenschutz</a></li>
<!--                                <li><a href="#">AGB</a></li>-->
                            </ul>

                        </div>

                    </div>

                    <div class="col-lg-3 col-6">

                        <div class="widget">

                            <h4 class="fw-bolder text-contrast-1000 text-smaller text-uppercase mb-4">Kontakt</h4>

                            <ul class="list-unstyled">
                                <li class="mb-3"><a class="text-dark" href="tel:+4917656782345"><i
                                        class="me-3 color bi-telephone-fill"></i>0176 56782345</a></li>
                                <li class="mb-3"><a class="text-dark" href="mailto:hallo@propinsight.de"><i
                                        class="me-3 color bi-envelope-fill"></i>hallo@propinsight.de</a></li>
                            </ul>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </footer>
        `;
    }
}

// Register the custom elements
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
