/* eslint-disable no-undef */
// Mid-page consultation banner — dark slab matching the live site's "Free 30-min consultation" call-out.

const ConsultationBanner = ({ onBook }) => (
  <section style={{ padding: "0 clamp(20px, 4vw, 48px)", margin: "16px 0 96px" }}>
    <div
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        background: "var(--sba-ink)",
        color: "var(--sba-cream)",
        borderRadius: 28,
        padding: "clamp(40px, 6vw, 72px)",
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
        gap: 48,
        alignItems: "center",
      }}
      className="banner-grid"
    >
      {/* Subtle ring motif */}
      <img
        src={window.__resources.logoMark}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-6%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 360,
          opacity: 0.09,
          pointerEvents: "none",
          filter: "brightness(1.4)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--sba-copper-soft)",
          }}
        >
          Free 20-minute consultation
        </span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(30px, 3.8vw, 46px)",
            lineHeight: 1.08,
            letterSpacing: "-0.022em",
            color: "var(--sba-cream)",
            margin: "16px 0 18px",
            textWrap: "balance",
          }}
        >
          Bring your last return. <br />
          We'll tell you what your previous accountant missed.
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "rgba(250, 249, 245, 0.78)",
            maxWidth: 520,
            margin: "0 0 32px",
          }}
        >
          No phone tree, no sales script. You'll talk to an IPA-certified accountant — the same one who'd
          handle your file if you decide to switch.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button size="lg" variant="onDark" onClick={onBook}>
            Book a chat <Icon name="arrow" size={14} />
          </Button>
          <a
            href="tel:1300915491"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "13px 22px",
              borderRadius: 999,
              border: "1px solid rgba(250, 249, 245, 0.25)",
              color: "var(--sba-cream)",
              textDecoration: "none",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 15,
            }}
          >
            <Icon name="phone" size={15} />
            1300 915 491
          </a>
        </div>
      </div>

      {/* Right column — proof grid */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          background: "rgba(250, 249, 245, 0.18)",
          borderRadius: 16,
          overflow: "hidden",
        }}
        className="banner-stats"
      >
        {[
          { n: "20 min", l: "Free first call" },
          { n: "Same day", l: "Callback, every time" },
          { n: "$0", l: "Until you sign off" },
          { n: "EN · 中文", l: "Bilingual service" },
        ].map((s) => (
          <div
            key={s.l}
            style={{
              background: "rgba(31, 30, 29, 0.6)",
              padding: "22px 20px",
              backdropFilter: "blur(4px)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 26,
                color: "var(--sba-copper-soft)",
                letterSpacing: "-0.012em",
                lineHeight: 1.05,
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(250, 249, 245, 0.7)",
                marginTop: 6,
                lineHeight: 1.3,
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 860px) {
        .banner-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      }
    `}</style>
  </section>
);

window.ConsultationBanner = ConsultationBanner;
