import React, { useState } from 'react';
import { siteConfig } from '../teamConfig';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2200);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2200);
    }
  };

  const emailList = siteConfig.contactEmails && siteConfig.contactEmails.length > 0
    ? siteConfig.contactEmails
    : [siteConfig.contactEmail];

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-card-outer">
          <div className="contact-left">
            <div className="section-pre-label">GET IN TOUCH // INBOX</div>
            <h2 id="contact-heading" className="contact-title">
              Have something in mind?
            </h2>
            <p className="contact-text">
              Want to collaborate, build something together, or talk about an idea? Drop us a message.
            </p>
          </div>

          <div className="contact-right">
            <div className="contact-box">
              <span className="contact-channel-label">DIRECT DISPATCH CHANNELS</span>
              
              <div className="contact-emails-list">
                {emailList.map((email, idx) => {
                  const isCopied = copiedEmail === email;

                  return (
                    <div key={email} className="contact-email-row">
                      <div className="contact-email-meta">
                        <span className="contact-email-tag">
                          {idx === 0 ? 'PRIMARY' : idx === 1 ? 'SECONDARY' : idx === 2 ? 'TERTIARY' : 'DIRECT'}
                        </span>
                        <a
                          href={`mailto:${email}`}
                          className="contact-email-link"
                          title={`Send email to ${email}`}
                        >
                          <span className="email-text">{email}</span>
                          <span className="email-arrow" aria-hidden="true">↗</span>
                        </a>
                      </div>

                      <button
                        type="button"
                        className={`copy-btn ${isCopied ? 'copied' : ''}`}
                        onClick={() => handleCopyEmail(email)}
                        aria-live="polite"
                        aria-label={`Copy ${email} to clipboard`}
                      >
                        {isCopied ? (
                          <>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="contact-response-note">
                <span className="response-dot"></span>
                <span>Direct team inboxes • Checked daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
