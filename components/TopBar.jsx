/* eslint-disable no-undef */
// Slim utility bar above the main nav — phone, hours, language switch.
const TopBar = ({ lang, setLang }) => {
  const labels =
    lang === "zh"
      ? { hours: "周一至周五 · 9:00–17:30 AEST", phone: "1300 915 491", langOther: "EN" }
      : { hours: "Mon–Fri · 9:00–17:30 AEST", phone: "1300 915 491", langOther: "中文" };

  return (
    <div
      style={{
        background: "var(--sba-ink)",
        color: "rgba(250, 249, 245, 0.85)",
        fontFamily: "var(--font-sans)",
        fontSize: 12.5,
        position: "relative",
        zIndex: 31,
      }}
    >
      <Container
        max="wide"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "9px clamp(20px, 4vw, 48px)",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
          <a
            href={`tel:${labels.phone.replace(/\s/g, "")}`}
            style={{
              color: "var(--sba-cream)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              fontWeight: 500,
            }}
          >
            <Icon name="phone" size={13} color="var(--sba-copper-soft)" />
            {labels.phone}
          </a>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, opacity: 0.75 }}>
            <Icon name="clock" size={13} />
            {labels.hours}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span style={{ opacity: 0.6, display: "none" }} className="topbar-cert">
            IPA · TPB registered
          </span>
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            style={{
              background: "transparent",
              border: "1px solid rgba(250, 249, 245, 0.2)",
              color: "var(--sba-cream)",
              padding: "3px 10px",
              borderRadius: 999,
              cursor: "pointer",
              fontSize: 12,
              fontFamily: "inherit",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
            title="Switch language"
          >
            <Icon name="globe" size={12} />
            {labels.langOther}
          </button>
        </div>
      </Container>
      <style>{`
        @media (min-width: 700px) { .topbar-cert { display: inline-flex !important; } }
        @media (max-width: 540px) { .topbar-hours { display: none; } }
      `}</style>
    </div>
  );
};
window.TopBar = TopBar;
