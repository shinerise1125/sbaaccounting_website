/* eslint-disable no-undef */
// "Our Advantages" feature panel — mirrors the live site's section.
// Big serif statement, dark feature card on the right with stacked advantages.

const ADVANTAGES = [
  {
    icon: "workflow",
    h: "System integration",
    b: "Xero, MYOB, QuickBooks — we set them up, link them to your bank feeds, and migrate the historical data without losing your sanity.",
  },
  {
    icon: "trend",
    h: "Workflow optimisation",
    b: "We map your invoicing, payroll, and BAS workflow end-to-end and rip out the busywork. Most clients save 4–6 hours a week.",
  },
  {
    icon: "document",
    h: "Tax planning",
    b: "Before EOFY, not after. We model your year and find the legal levers — concessional super, prepayments, instant asset write-offs — that actually move the needle.",
  },
  {
    icon: "chat",
    h: "Financial analysis",
    b: "Quarterly reports written in plain English. You'll know what's earning, what's leaking, and what to do about it before the next quarter starts.",
  },
];

const Advantages = ({ onBook }) => (
  <section id="advantages" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
    <Container max="wide">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
          gap: 64,
          alignItems: "start",
        }}
        className="adv-grid"
      >
        {/* Left — intro */}
        <div style={{ position: "sticky", top: 110 }} className="adv-intro">
          <Eyebrow>Why work with us</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(34px, 4.4vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.024em",
              color: "var(--sba-ink)",
              margin: "14px 0 22px",
              textWrap: "balance",
            }}
          >
            Most accountants file paperwork. <br />
            <span style={{ fontStyle: "italic", color: "var(--sba-copper-darker)" }}>
              We change the numbers.
            </span>
          </h2>
          <p
            style={{
              fontSize: 17.5,
              lineHeight: 1.6,
              color: "var(--sba-ink-2)",
              margin: "0 0 28px",
              maxWidth: 460,
            }}
          >
            Compliance is the floor. Once your lodgements are clean, we look for the four things that
            actually grow a small business — and we tell you what to do, in writing.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button size="md" onClick={onBook}>
              Book a free 20-min chat <Icon name="arrow" size={14} />
            </Button>
            <Button size="md" variant="quiet">See a sample report</Button>
          </div>
        </div>

        {/* Right — stacked advantage rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {ADVANTAGES.map((a, i) => (
            <div
              key={a.h}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: 22,
                padding: "30px 0",
                borderTop: i === 0 ? "1px solid var(--border-strong)" : "1px solid var(--border)",
                borderBottom: i === ADVANTAGES.length - 1 ? "1px solid var(--border-strong)" : "none",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "var(--sba-copper-wash)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--sba-copper-darker)",
                }}
              >
                <Icon name={a.icon} size={24} />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 12,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--sba-copper)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
                    {a.h}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "var(--sba-ink-2)",
                    margin: 0,
                    maxWidth: 540,
                  }}
                >
                  {a.b}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
    <style>{`
      @media (max-width: 920px) {
        .adv-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        .adv-intro { position: static !important; }
      }
    `}</style>
  </section>
);

window.Advantages = Advantages;
