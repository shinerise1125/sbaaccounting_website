/* eslint-disable no-undef */
const SERVICES = [
  {
    id: "individual",
    icon: "user",
    name: "Individual tax",
    desc: "Returns, planning, share trading, and investment property — including every deduction you're entitled to.",
    items: ["Tax returns", "Tax planning", "Investment property", "Share trading", "Capital gains"],
    price: "from $190",
  },
  {
    id: "business",
    icon: "briefcase",
    name: "Business tax",
    desc: "Quarterly BAS, PAYGI, TPAR, and company or trust returns — lodged on time, every time.",
    items: ["Activity statements (BAS)", "PAYGI lodgements", "TPAR reporting", "Company & trust returns"],
    price: "from $420 / quarter",
  },
  {
    id: "consulting",
    icon: "workflow",
    name: "Business consulting",
    desc: "From structure setup to system integration — practical advice that pays for itself.",
    items: ["Business structure", "ASIC agent services", "Workflow optimisation", "System integration"],
    price: "fixed-fee projects",
  },
  {
    id: "accounting",
    icon: "trend",
    name: "Business accounting",
    desc: "Bookkeeping through to financial modelling. Numbers you can actually use to make decisions.",
    items: ["Bookkeeping", "Financial reporting", "Financial analysis", "Financial modelling"],
    price: "from $360 / month",
  },
];

const ServiceTile = ({ s }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={`#${s.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--sba-paper)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        padding: 30,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        textDecoration: "none",
        color: "inherit",
        boxShadow: hover ? "var(--shadow-3)" : "var(--shadow-1)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
        minHeight: 320,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 999,
            background: "var(--sba-copper-wash)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--sba-copper-darker)",
          }}
        >
          <Icon name={s.icon} size={22} />
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            color: "var(--sba-ink-3)",
            letterSpacing: "0.02em",
          }}
        >
          {s.price}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 25,
          fontWeight: 500,
          letterSpacing: "-0.012em",
          color: "var(--sba-ink)",
          margin: 0,
        }}
      >
        {s.name}
      </h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--sba-ink-2)", margin: 0 }}>{s.desc}</p>

      <ul style={{ listStyle: "none", padding: 0, margin: "auto 0 0", display: "flex", flexDirection: "column", gap: 7 }}>
        {s.items.slice(0, 4).map((it) => (
          <li
            key={it}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13.5,
              color: "var(--sba-ink-2)",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: 999,
                background: "var(--sba-copper)",
                flexShrink: 0,
              }}
            />
            {it}
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          color: "var(--sba-copper-darker)",
          fontSize: 13.5,
          fontWeight: 500,
          marginTop: 6,
          paddingTop: 14,
          borderTop: "1px solid var(--border)",
        }}
      >
        Learn more
        <Icon name="arrow" size={14} color="var(--sba-copper-darker)" />
      </div>
    </a>
  );
};

const Services = () => (
  <section id="services" style={{ padding: "104px 0", background: "var(--bg-alt)" }}>
    <Container max="wide">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          gap: 24,
          marginBottom: 48,
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: 620 }}>
          <Eyebrow>What we do</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(34px, 4.4vw, 52px)",
              lineHeight: 1.06,
              letterSpacing: "-0.024em",
              color: "var(--sba-ink)",
              margin: "14px 0 0",
              textWrap: "balance",
            }}
          >
            Four pillars. One firm. <br />
            <span style={{ color: "var(--sba-ink-3)" }}>No surprises on the invoice.</span>
          </h2>
        </div>
        <p style={{ maxWidth: 360, fontSize: 16, lineHeight: 1.55, color: "var(--sba-ink-2)", margin: 0 }}>
          We work with sole traders, growing businesses, and individuals with investment portfolios. Most engagements start with a free 20-minute call.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {SERVICES.map((s) => (
          <ServiceTile key={s.id} s={s} />
        ))}
      </div>
    </Container>
  </section>
);

window.Services = Services;
