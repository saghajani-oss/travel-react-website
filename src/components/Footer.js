import "./Footer.css"
import React from "react";

export default function Footer() {
    return (
      <div className="footer">
        <div className="top">
          <div>
            <h2>Trippy</h2>
            <p>Choose your favourite destination.</p>
          </div>
          <div>
            <a href="/">
              <i className="uil uil-facebook"></i>
            </a>
            <a href="/">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="/">
              <i className="uil uil-behance"></i>
            </a>
            <a href="/">
              <i className="uil uil-twitter"></i>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Services</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>
    );
}