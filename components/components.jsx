/* eslint-disable no-undef */
// Shared primitives for the SBA website UI kit.

const Logo = ({ size = 28, showWordmark = true, dark = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <img
      src={window.__resources.logoMark}
      alt="Smart Business Accounting"
      style={{ width: size, height: size, display: "block" }}
    />
    {showWordmark && (
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: size * 0.62,
          letterSpacing: "-0.01em",
          color: dark ? "var(--sba-cream)" : "var(--sba-ink)",
          lineHeight: 1,
        }}
      >
        Smart Business Accounting
      </span>
    )}
  </div>
);

const Button = ({ children, variant = "primary", size = "md", as = "button", href, onClick, ...rest }) => {
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    border: "1px solid transparent",
    borderRadius: 999,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition:
      "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };
  const sizes = {
    sm: { padding: "7px 14px", fontSize: 13 },
    md: { padding: "10px 18px", fontSize: 14 },
    lg: { padding: "13px 22px", fontSize: 15 },
  };
  const variants = {
    primary: { background: "var(--sba-copper)", color: "#fff" },
    secondary: { background: "transparent", color: "var(--sba-ink)", borderColor: "var(--sba-ink)" },
    quiet: { background: "transparent", color: "var(--sba-copper-darker)", padding: "0", border: "none" },
    onDark: { background: "var(--sba-cream)", color: "var(--sba-ink)" },
  };
  const Comp = as === "a" ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      style={{ ...base, ...sizes[size], ...variants[variant] }}
      onMouseEnter={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = "var(--sba-copper-deep)";
          e.currentTarget.style.boxShadow = "var(--shadow-2)";
        } else if (variant === "secondary") {
          e.currentTarget.style.background = "var(--bg-alt)";
        } else if (variant === "quiet") {
          e.currentTarget.style.textDecoration = "underline";
          e.currentTarget.style.textUnderlineOffset = "4px";
        } else if (variant === "onDark") {
          e.currentTarget.style.background = "#fff";
        }
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, base, sizes[size], variants[variant]);
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
};

const Pill = ({ children, tone = "brand" }) => {
  const tones = {
    brand: { background: "var(--sba-copper-wash)", color: "var(--sba-copper-darker)" },
    success: { background: "var(--sba-success-bg)", color: "var(--sba-success)" },
    info: { background: "var(--sba-info-bg)", color: "var(--sba-info)" },
    warn: { background: "var(--sba-warn-bg)", color: "var(--sba-warn)" },
    quiet: { background: "transparent", color: "var(--sba-ink-2)", border: "1px solid var(--border)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        borderRadius: 999,
        fontSize: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        ...tones[tone],
      }}
    >
      {children}
    </span>
  );
};

const Eyebrow = ({ children }) => (
  <div
    style={{
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--sba-copper)",
    }}
  >
    {children}
  </div>
);

const Container = ({ children, max = "wide", style = {}, ...rest }) => {
  const maxes = { narrow: 720, content: 960, wide: 1180 };
  return (
    <div
      style={{
        maxWidth: maxes[max],
        margin: "0 auto",
        padding: "0 clamp(20px, 4vw, 48px)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

// Lucide-equivalent inline icons.
const Icon = ({ name, size = 18, stroke = 1.5, color = "currentColor" }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const paths = {
    user: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></>,
    briefcase: <><path d="M3 9h18M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9M3 9l3-6h12l3 6"/></>,
    workflow: <><path d="M12 20h9M3 20h6M3 4h18M7 4v16M17 4v16"/></>,
    trend: <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></>,
    arrow: <><path d="M5 12h14M13 5l7 7-7 7"/></>,
    check: <><path d="M20 6L9 17l-5-5"/></>,
    chat: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
    document: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    menu: <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    close: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    minus: <><line x1="5" y1="12" x2="19" y2="12"/></>,
    globe: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
  };
  return <svg {...common}>{paths[name] || null}</svg>;
};

// Form primitives — shared across BookModal, Callback form, calculators.
const Field = ({ label, children, hint }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
    <label style={{
      fontFamily: "var(--font-sans)",
      fontSize: 11.5,
      color: "var(--sba-ink-3)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      fontWeight: 500,
    }}>{label}</label>
    {children}
    {hint && <span style={{ fontSize: 12, color: "var(--sba-ink-3)" }}>{hint}</span>}
  </div>
);

const inputStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  padding: "11px 14px",
  border: "1px solid var(--border-strong)",
  background: "var(--sba-paper)",
  borderRadius: 10,
  color: "var(--sba-ink)",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
};

Object.assign(window, { Logo, Button, Pill, Eyebrow, Container, Icon, Field, inputStyle });
