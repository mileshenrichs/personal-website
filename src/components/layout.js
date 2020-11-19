import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import './layout.css';

export default function Layout({ includeFooter = true, children }) {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )

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
                <p><i>Having a big footer like this makes the site feel a bit more official. <br />Eventually I’ll find something useful to put here.</i> 😄</p>
              </div>
            </footer>}
        </div>
    )
}