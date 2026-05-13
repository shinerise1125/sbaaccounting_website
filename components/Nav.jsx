/* eslint-disable no-undef */
const Nav = ({ lang, onBook }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labels =
    lang === "zh"
      ? { services: "服务", advantages: "为何选择我们", tools: "工具", news: "资讯", contact: "联系", cta: "免费咨询 →" }
      : { services: "Services", advantages: "Why us", tools: "Tools", news: "News", contact: "Contact", cta: "Book a chat →" };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: scrolled ? "rgba(250, 249, 245, 0.82)" : "var(--bg)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      }}
    >
      <Container
        max="wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px clamp(20px, 4vw, 48px)",
        }}
      >
        <a href="/" style={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
          <Logo size={32} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 30 }} className="nav-desktop">
          <a href="#services"   style={navLinkStyle}>{labels.services}</a>
          <a href="#advantages" style={navLinkStyle}>{labels.advantages}</a>
          <a href="/tools"      style={navLinkStyle}>{labels.tools}</a>
          <a href="#news"       style={navLinkStyle}>{labels.news}</a>
          <a href="#contact"    style={navLinkStyle}>{labels.contact}</a>
          <Button size="sm" onClick={onBook}>{labels.cta}</Button>
        </nav>
        <button
          className="nav-mobile-trigger"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: 8,
            cursor: "pointer",
            color: "var(--sba-ink)",
          }}
          aria-label="Menu"
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </Container>

      {open && (
        <div
          style={{
            background: "var(--sba-cream)",
            borderTop: "1px solid var(--border)",
            padding: "18px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <a href="#services"   style={{ ...navLinkStyle, fontSize: 16 }} onClick={() => setOpen(false)}>{labels.services}</a>
          <a href="#advantages" style={{ ...navLinkStyle, fontSize: 16 }} onClick={() => setOpen(false)}>{labels.advantages}</a>
          <a href="/tools"      style={{ ...navLinkStyle, fontSize: 16 }} onClick={() => setOpen(false)}>{labels.tools}</a>
          <a href="#news"       style={{ ...navLinkStyle, fontSize: 16 }} onClick={() => setOpen(false)}>{labels.news}</a>
          <a href="#contact"    style={{ ...navLinkStyle, fontSize: 16 }} onClick={() => setOpen(false)}>{labels.contact}</a>
          <Button size="md" onClick={() => { onBook(); setOpen(false); }}>{labels.cta}</Button>
        </div>
      )}

      <style>{`
        @media (max-width: 920px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-trigger { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
};

const navLinkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  fontWeight: 500,
  color: "var(--sba-ink-2)",
  textDecoration: "none",
  letterSpacing: "-0.005em",
};

window.Nav = Nav;
