import React from "react";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <div
          class="footer-section"
          style={{
            gridColumn: "span ",
          }}
        >
          <h2 class="logo">Gelato</h2>
        </div>
        <div class="footer-section flex logo-section justify-end end-justification">
          <h2 class="logo mr-2">Find Gelato On: </h2>

          <img
            className="contactlogo mt-1"
            src="data:image/png;base64,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"
            alt="App Store"
          />
        </div>
      </div>
      <div className="footer-container-2">
        <div
          class="footer-section"
          style={{
            gridColumn: "span 2",
          }}
        >
          <p className="logo-content">
            Gelato has created the world's largest network for local production
            and distribution of customized products. Together we bring
            creativity to life - and into business.
          </p>
          <button class="get-started">Get started</button>
          <div class="app-links">
            <img src="app-store-badge.png" alt="App Store" class="app-store" />
            <img
              src="google-play-badge.png"
              alt="Google Play"
              class="google-play"
            />
          </div>
        </div>
        <div className="links">
          <div class="footer-section">
            <h3>Print on demand</h3>
            <ul>
              <li>What is print on demand?</li>
              <li>Product catalog</li>
              <li>Shipping and delivery</li>
              <li>Dropshipping products</li>
              <li>Pro sellers</li>
              <li>White label products</li>
              <li>Returns policy</li>
              <li>Global, yet local</li>
              <li>Sustainability</li>
              <li>Support</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Integrations</h3>
            <ul>
              <li>Shopify</li>
              <li>Etsy</li>
              <li>WooCommerce</li>
              <li>Wix</li>
              <li>Squarespace</li>
              <li>BigCommerce</li>
              <li>API</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Start selling</h3>
            <ul>
              <li>Embroidery</li>
              <li>Print on demand t-shirts</li>
              <li>Print on demand hoodies</li>
              <li>Print on demand posters</li>
              <li>Print on demand canvas</li>
              <li>Print on demand calendars</li>
              <li>Print on demand mugs</li>
              <li>Custom products</li>
              <li>Custom clothing</li>
              <li>Custom merchandise</li>
              <li>Custom phone cases</li>
              <li>Print on demand Europe</li>
              <li>Print on demand UK</li>
              <li>Print on demand France</li>
              <li>Print on demand Canada</li>
              <li>Merch maker</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Company</h3>
            <ul>
              <li>GelatoConnect</li>
              <li>About Gelato</li>
              <li>Leadership team</li>
              <li>Board & investors</li>
              <li>Newsroom</li>
              <li>Blog</li>
              <li>Customer Stories</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Affiliates program</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="legal-links">
          <a href="#">Contact us</a>
          <a href="#">Legal</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookie policy</a>
          <a href="#">API terms</a>
          <a href="#">Sitemap</a>
        </div>
        <div class="language-select">
          <select>
            <option>English (India)</option>
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
