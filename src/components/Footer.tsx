import { version } from "react";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <h3 className="footer__subtitle">
          All rights reserved &copy; 2020 - {new Date().getFullYear()} |{" "}
          <a
            className="footer__link"
            href="https://github.com/manucabral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Manuel Cabral
          </a>
        </h3>
        <h3 className="footer__subtitle">
          App Version 1.0.0 | Powered by{" "}
          <a
            className="footer__link"
            href="https://www.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React JS {version}
          </a>
        </h3>
      </div>
    </footer>
  );
}
