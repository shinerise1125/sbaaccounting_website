/* eslint-disable no-undef */
const Hero = ({ onBook, onCalc, lang }) => {
  const t =
    lang === "zh"
      ? {
          eyebrow: "IPA 认证 · 服务全澳",
          h1a: "税务、BAS、记账 ——",
          h1b: "都妥了。",
          lede: "为澳大利亚 400+ 家中小企业和个人提供清晰、专业的会计服务。让我们处理报税细节，您专注本业。",
          cta: "免费聊 20 分钟",
          alt: "查看服务",
          tag1: "IPA 认证",
          tag2: "中英文服务",
          tag3: "固定收费",
        }
      : {
          eyebrow: "IPA-certified · Serving all of Australia",
          h1a: "Tax, BAS, and bookkeeping —",
          h1b: "sorted.",
          lede: "Plain-English accounting for 400+ Australian businesses and individuals. We handle the lodgements so you can get back to the work that actually pays.",
          cta: "Book a free 20-min chat",
          alt: "See our services",
          tag1: "IPA certified",
          tag2: "English + 中文",
          tag3: "Fixed-fee quotes",
        };

  return (
    <section
      id="top"
      style={{
        position: "relative",
        paddingTop: 96,
        paddingBottom: 120,
        overflow: "hidden",
      }}
    >
      {/* Oversized brand ring as a quiet motif */}
      <img
        src={window.__resources.logoMark}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-9%",
          top: "5%",
          width: "min(680px, 62vw)",
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />
      <Container max="wide">
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.85fr)", gap: 64, alignItems: "center" }} className="hero-grid">
          {/* Left column */}
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(44px, 6.4vw, 84px)",
                lineHeight: 1.02,
                letterSpacing: "-0.024em",
                color: "var(--sba-ink)",
                margin: "18px 0 22px",
                textWrap: "balance",
              }}
            >
              {t.h1a}{" "}
              <span style={{ fontStyle: "italic", color: "var(--sba-copper-darker)" }}>{t.h1b}</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 19.5,
                lineHeight: 1.55,
                color: "var(--sba-ink-2)",
                maxWidth: 560,
                margin: 0,
              }}
            >
              {t.lede}
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
              <Button size="lg" onClick={onBook}>
                {t.cta}
                <Icon name="arrow" size={15} />
              </Button>
              <Button size="lg" variant="secondary" onClick={onCalc}>{t.alt}</Button>
            </div>
            <div
              style={{
                display: "flex",
                gap: 24,
                marginTop: 44,
                flexWrap: "wrap",
                color: "var(--sba-ink-3)",
                fontSize: 13.5,
              }}
            >
              {[t.tag1, t.tag2, t.tag3].map((tag) => (
                <span key={tag} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                  <Icon name="check" size={14} color="var(--sba-success)" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — proof card */}
          <div className="hero-proof">
            <ProofCard lang={lang} />
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 920px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-proof { max-width: 460px; }
        }
      `}</style>
    </section>
  );
};

const ProofCard = ({ lang }) => {
  const stats =
    lang === "zh"
      ? [
          { n: "400+", l: "服务中的企业" },
          { n: "12 年", l: "执业经验" },
          { n: "100%", l: "按时申报率" },
        ]
      : [
          { n: "400+", l: "Businesses served" },
          { n: "12 yrs", l: "In practice" },
          { n: "100%", l: "On-time lodgement" },
        ];
  const quote =
    lang === "zh"
      ? "“他们读完去年的报表才给我们打电话。然后两周内把以前会计漏掉的 $7,400 退税追回来了。”"
      : "“They read our last return before the first call. Two weeks later they'd clawed back $7,400 in deductions our last accountant missed.”";
  const author = lang === "zh" ? "— Priya N., 配送业主, Geelong" : "— Priya N., logistics SME, Geelong";

  return (
    <div
      style={{
        position: "relative",
        background: "var(--sba-paper)",
        border: "1px solid var(--border)",
        borderRadius: 24,
        padding: 28,
        boxShadow: "var(--shadow-3)",
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          alignItems: "center",
          gap: 8,
          padding: "6px 12px",
          borderRadius: 999,
          background: "var(--sba-success-bg)",
          color: "var(--sba-success)",
          fontSize: 12.5,
          fontWeight: 500,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: 999,
            background: "var(--sba-success)",
            display: "inline-block",
          }}
        />
        {lang === "zh" ? "本周接受新客户" : "Taking new clients this week"}
      </div>

      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 22,
          lineHeight: 1.35,
          letterSpacing: "-0.012em",
          color: "var(--sba-ink)",
          margin: 0,
          textWrap: "pretty",
        }}
      >
        {quote}
      </p>
      <div style={{ fontSize: 13, color: "var(--sba-ink-3)" }}>{author}</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          paddingTop: 22,
          borderTop: "1px solid var(--border)",
        }}
      >
        {stats.map((s) => (
          <div key={s.l}>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 26,
                color: "var(--sba-copper-darker)",
                letterSpacing: "-0.012em",
                lineHeight: 1.05,
              }}
            >
              {s.n}
            </div>
            <div style={{ fontSize: 12.5, color: "var(--sba-ink-3)", marginTop: 4, lineHeight: 1.3 }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

window.Hero = Hero;
