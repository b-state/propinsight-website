// Web Component for Footer
// Used across all pages for consistency

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
                                <li><a href="/cookie-policy.html">Cookie-Policy</a></li>
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

// Register the custom element
customElements.define('site-footer', SiteFooter);
