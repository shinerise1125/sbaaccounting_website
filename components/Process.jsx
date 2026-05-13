/* eslint-disable no-undef */
const STEPS = [
  {
    n: "01",
    h: "Send us your last return",
    b: "Or just your bookkeeping. We'll read it before our call so we don't waste your time.",
  },
  {
    n: "02",
    h: "Free 20-minute call",
    b: "We'll flag the obvious wins, the obvious risks, and quote a fixed fee. No obligation.",
  },
  {
    n: "03",
    h: "We do the work",
    b: "You stay informed. We lodge on time. You get a copy of everything we send to the ATO.",
  },
];

const Process = () => (
  <section style={{ padding: "104px 0" }}>
    <Container max="wide">
      <div style={{ maxWidth: 680, marginBottom: 56 }}>
        <Eyebrow>How we work</Eyebrow>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.06,
            letterSpacing: "-0.024em",
            color: "var(--sba-ink)",
            margin: "14px 0 16px",
            textWrap: "balance",
          }}
        >
          A real conversation, then the work.
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--sba-ink-2)", margin: 0 }}>
          No portal logins, no chatbots. You'll work with the same accountant from your first call to your
          final lodgement.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
        }}
      >
        {STEPS.map((s) => (
          <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--sba-copper)",
                  letterSpacing: "0.04em",
                }}
              >
                {s.n}
              </div>
              <div style={{ flex: 1, height: 1, background: "var(--border-strong)" }} />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: "-0.012em",
                color: "var(--sba-ink)",
                margin: 0,
              }}
            >
              {s.h}
            </h3>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--sba-ink-2)", margin: 0 }}>
              {s.b}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

window.Process = Process;
