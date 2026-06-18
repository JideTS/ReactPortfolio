import { Link } from 'react-router-dom';

import { FooterIcon } from './icons';

const resumeFile = '/CV_EN_FR_Jide_Tidjani-Serpos.pdf';

const footerLinks = [
  { label: 'Resume', type: 'resume', href: resumeFile, download: true },
  { label: 'LinkedIn', type: 'linkedin', href: 'https://www.linkedin.com/in/jidetidjaniserpos', external: true },
  { label: 'GitHub', type: 'github', href: 'https://www.github.com/jidets', external: true },
  { label: 'WhatsApp', type: 'whatsapp', href: 'https://wa.me/15146033859', external: true },
  { label: 'jide@tidjani-serpos.com', type: 'email', href: 'mailto:jide@tidjani-serpos.com' },
  { label: '+1 (514) 603-3859', type: 'phone', href: 'tel:+15146033859' },
];

export const Footer = () => (
  <footer className="footer">
    <nav className="footer-links" aria-label="Contact links">
      {footerLinks.map((item) => {
        const props = item.external ? { target: '_blank', rel: 'noreferrer' } : {};

        return item.download ? (
          <a key={item.label} href={item.href} download className="footer-link">
            <FooterIcon type={item.type} className="footer-icon" />
            <span>{item.label}</span>
          </a>
        ) : (
          <a key={item.label} href={item.href} className="footer-link" {...props}>
            <FooterIcon type={item.type} className="footer-icon" />
            <span>{item.label}</span>
          </a>
        );
      })}
      <Link className="footer-link visually-hidden" to="/">
        Back to top
      </Link>
    </nav>
  </footer>
);