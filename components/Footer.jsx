/* eslint-disable no-undef */
const Footer = () => (
  <footer style={{ background: "var(--sba-ink)", color: "var(--sba-cream)", padding: "80px 0 32px" }}>
    <Container max="wide">
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40 }} className="footer-grid">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <img src={window.__resources.logoMark} style={{ width: 30, height: 30 }} alt="" />
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--sba-cream)" }}>
              Smart Business Accounting
            </span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(250, 249, 245, 0.7)", margin: "0 0 22px", maxWidth: 340 }}>
            An IPA-certified accounting practice serving Australian individuals, property investors, and growing
            businesses — in English and 中文.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            <a href="tel:1300915491" style={footerLink}>
              <Icon name="phone" size={14} /> 1300 915 491
            </a>
            <a href="mailto:hello@smartbusinessaccounting.com.au" style={footerLink}>
              <Icon name="mail" size={14} /> hello@smartbusinessaccounting.com.au
            </a>
          </div>
        </div>

        <FooterCol title="Services" links={["Individual tax", "Business tax", "Business consulting", "Business accounting"]} />
        <FooterCol title="Tools" links={["Share trading P&L", "Capital gain estimator", "Tax checklist", "Rental income template"]} />
        <FooterCol title="Firm" links={["About us", "News", "Careers", "Contact"]} />
      </div>

      <div
        style={{
          marginTop: 56,
          paddingTop: 24,
          borderTop: "1px solid rgba(250, 249, 245, 0.15)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          fontSize: 12.5,
          color: "rgba(250, 249, 245, 0.55)",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          Smart Business Accounting is an IPA-certified accounting practice. Liability limited by a scheme
          approved under Professional Standards Legislation.
        </div>
        <div>© {new Date().getFullYear()} Smart Business Accounting</div>
      </div>
    </Container>
    <style>{`
      @media (max-width: 860px) {
        .footer-grid { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 540px) {
        .footer-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </footer>
);

const FooterCol = ({ title, links }) => (
  <div>
    <div
      style={{
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(250, 249, 245, 0.5)",
        marginBottom: 16,
        fontWeight: 500,
      }}
    >
      {title}
    </div>
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
      {links.map((l) => (
        <li key={l}>
          <a href="#" style={footerLink}>{l}</a>
        </li>
      ))}
    </ul>
  </div>
);

const footerLink = {
  fontSize: 14,
  color: "rgba(250, 249, 245, 0.82)",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};

window.Footer = Footer;
