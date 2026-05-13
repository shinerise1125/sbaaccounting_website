/* eslint-disable no-undef */
const POSTS = [
  {
    tag: "Super",
    date: "Apr 12, 2026",
    title: "What changed in FY26 super contribution caps",
    excerpt: "The concessional cap moved up to $32,500. Here's how to use it without tripping the Division 293 wire.",
    read: "4 min",
  },
  {
    tag: "Property",
    date: "Mar 28, 2026",
    title: "Depreciation on new apartments: when it's worth the report",
    excerpt: "A $440 quantity surveyor report can return $4–8k in year one. We work through the maths.",
    read: "6 min",
  },
  {
    tag: "Business",
    date: "Mar 04, 2026",
    title: "Setting up a discretionary trust: a plain-English walkthrough",
    excerpt: "Asset protection, income splitting, and the bits the boilerplate templates always forget.",
    read: "9 min",
  },
];

const News = () => (
  <section id="news" style={{ padding: "104px 0", background: "var(--bg-alt)" }}>
    <Container max="wide">
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          marginBottom: 40,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ maxWidth: 580 }}>
          <Eyebrow>News & insights</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.06,
              letterSpacing: "-0.024em",
              color: "var(--sba-ink)",
              margin: "14px 0 0",
              textWrap: "balance",
            }}
          >
            What we've been writing about.
          </h2>
        </div>
        <Button variant="quiet">
          Read all posts <Icon name="arrow" size={14} color="var(--sba-copper-darker)" />
        </Button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {POSTS.map((p, i) => (
          <NewsCard key={p.title} p={p} featured={i === 0} />
        ))}
      </div>
    </Container>
  </section>
);

const NewsCard = ({ p, featured }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--sba-paper)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        padding: 28,
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        minHeight: 280,
        boxShadow: hover ? "var(--shadow-3)" : "var(--shadow-1)",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Pill tone="brand">{p.tag}</Pill>
        <span style={{ fontSize: 12.5, color: "var(--sba-ink-3)" }}>{p.date}</span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 23,
          fontWeight: 500,
          letterSpacing: "-0.012em",
          color: "var(--sba-ink)",
          margin: 0,
          lineHeight: 1.25,
          textWrap: "balance",
        }}
      >
        {p.title}
      </h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--sba-ink-2)", margin: 0 }}>
        {p.excerpt}
      </p>
      <div
        style={{
          marginTop: "auto",
          paddingTop: 14,
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 13,
          color: "var(--sba-ink-3)",
        }}
      >
        <span>{p.read} read</span>
        <span style={{ color: "var(--sba-copper-darker)", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
          Read <Icon name="arrow" size={13} color="var(--sba-copper-darker)" />
        </span>
      </div>
    </a>
  );
};

window.News = News;
