import React from "react"
import { Link } from "gatsby"
import './layout.css';

export default function Layout({ includeFooter = true, children }) {
    return (
        <div className="Layout">
          <header>
            <h1 className="Layout__site-title">
              <Link to="/" className="Layout__site-title-link">Miles Henrichs</Link>
            </h1>
          </header>
          <div className="Layout__content">
            {children}
          </div>
          {includeFooter && 
            <footer>
              <div className="footer-content">
                <p><i>Thanks for reading!</i> <span role="img" aria-label="smiley face">😄</span></p>
              </div>
            </footer>}
        </div>
    );
}