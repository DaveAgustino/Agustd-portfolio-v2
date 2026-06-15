import React from 'react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const Contact: React.FC = () => {
  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 11h2v2h-2zM13 9h2v2h-2zM9 13h2v2H9z" fill="var(--red)"/>
    </svg>
  );

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Badge label="Let's Connect" icon={badgeIcon} className="reveal" />
        </div>
        <h2 className="display reveal">
          Let's build something
          <br />
          exceptional together.
        </h2>
        <p className="contact-sub reveal">
          Have a project in mind? Let's talk about how I can help bring your vision to life with clean code and premium design.
        </p>
        <div className="contact-actions reveal">
          <Button href="mailto:caacoydave@gmail.com" variant="red-solid">
            Send Email
          </Button>
          <Button href="https://t.me/daveagustincaacoy" target="_blank" rel="noopener noreferrer" variant="dark">
            Telegram
          </Button>
        </div>

        <a 
          href="https://t.me/daveagustincaacoy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-qr-card reveal reveal-delay-1"
        >
          <div className="contact-qr-wrapper">
            <img src="/images/telegram_qr.png" alt="Telegram QR Code" className="contact-qr-img" />
          </div>
          <span className="contact-qr-handle">@daveagustincaacoy</span>
        </a>

        <div className="contact-links reveal">
          <a href="https://github.com/DaveAgustino" target="_blank" rel="noopener noreferrer" className="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/davecaacoy/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="https://www.behance.net/daveagcaacoy" target="_blank" rel="noopener noreferrer" className="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.2 5.062h3.33c1.66 0 2.5.7 2.5 1.83a1.8 1.8 0 0 1-1.45 1.67v.06a1.92 1.92 0 0 1 1.7 1.92c0 1.3-.9 2.02-2.75 2.02H8.2V5.062zm4.83 1.83c0-.52-.39-.75-1.15-.75h-1.6v1.47h1.6c.76 0 1.15-.24 1.15-.72zm.2 3.56c0-.58-.44-.84-1.25-.84h-1.25v1.68h1.25c.81 0 1.25-.26 1.25-.84zM19.83 9.5c.08.8-.6 1.2-1.48 1.2-.64 0-1.1-.26-1.25-.72h-1.07c.26 1.07 1.2 1.7 2.33 1.7 1.62 0 2.6-1.14 2.6-2.75 0-1.64-1-2.8-2.55-2.8-1.59 0-2.43 1.15-2.43 2.75v.62h3.85zm-3.8-1.12c.1-.74.6-1.1 1.33-1.1.76 0 1.28.37 1.39 1.1h-2.72zM15.5 5.18h3.42V6H15.5v-.82z"/></svg>
            Behance
          </a>
          <a href="https://x.com/daveagustin_" target="_blank" rel="noopener noreferrer" className="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            Twitter / X
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;

