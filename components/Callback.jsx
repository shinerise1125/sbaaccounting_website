/* eslint-disable no-undef */
// "Request a Call Back" — split form section near footer, matches live site.

const Callback = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", phone: "", email: "", topic: "", when: "today" });

  return (
    <section id="contact" style={{ padding: "104px 0", background: "var(--bg-alt)" }}>
      <Container max="wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
            gap: 56,
            alignItems: "start",
          }}
          className="cb-grid"
        >
          {/* Left — copy + contact details */}
          <div>
            <Eyebrow>Request a call back</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.06,
                letterSpacing: "-0.024em",
                color: "var(--sba-ink)",
                margin: "14px 0 18px",
                textWrap: "balance",
              }}
            >
              Tell us when's good. <br />
              <span style={{ color: "var(--sba-ink-3)" }}>We'll ring you back.</span>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--sba-ink-2)",
                maxWidth: 480,
                margin: "0 0 36px",
              }}
            >
              Send us a quick note and we'll call you back the same day — or the next morning if it's after
              5:30pm. The first 20 minutes are on us.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                paddingTop: 28,
                borderTop: "1px solid var(--border-strong)",
              }}
            >
              {[
                { icon: "phone", l: "Phone", v: "1300 915 491", h: "tel:1300915491" },
                { icon: "mail", l: "Email", v: "hello@smartbusinessaccounting.com.au", h: "mailto:hello@smartbusinessaccounting.com.au" },
                { icon: "clock", l: "Hours", v: "Mon–Fri · 9:00–17:30 AEST", h: null },
              ].map((c) => (
                <a
                  key={c.l}
                  href={c.h || undefined}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "44px 1fr",
                    gap: 16,
                    alignItems: "center",
                    color: "inherit",
                    textDecoration: "none",
                    cursor: c.h ? "pointer" : "default",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      background: "var(--sba-paper)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--sba-copper-darker)",
                    }}
                  >
                    <Icon name={c.icon} size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11.5, color: "var(--sba-ink-3)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>
                      {c.l}
                    </div>
                    <div style={{ fontSize: 15.5, color: "var(--sba-ink)", marginTop: 2, fontWeight: 500 }}>
                      {c.v}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form card */}
          <div
            style={{
              background: "var(--sba-paper)",
              border: "1px solid var(--border)",
              borderRadius: 22,
              padding: "clamp(28px, 4vw, 44px)",
              boxShadow: "var(--shadow-2)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 999,
                    background: "var(--sba-success-bg)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon name="check" size={28} color="var(--sba-success)" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 28,
                    fontWeight: 500,
                    color: "var(--sba-ink)",
                    margin: "0 0 10px",
                  }}
                >
                  Got it — we'll ring you back.
                </h3>
                <p style={{ fontSize: 15, color: "var(--sba-ink-2)", margin: 0, lineHeight: 1.55 }}>
                  Expect a call from a real accountant (no call centre) {form.when === "today" ? "this afternoon" : "in the morning"}.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="cb-row">
                  <Field label="Your name">
                    <input
                      style={inputStyle}
                      placeholder="Jamie Liu"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      style={inputStyle}
                      placeholder="04xx xxx xxx"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </Field>
                </div>
                <Field label="Email">
                  <input
                    style={inputStyle}
                    type="email"
                    placeholder="you@business.com.au"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </Field>
                <Field label="What's it about?">
                  <select
                    style={inputStyle}
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  >
                    <option value="">Pick one…</option>
                    <option>Individual tax return</option>
                    <option>BAS / business tax</option>
                    <option>Business setup or consulting</option>
                    <option>Bookkeeping or accounting</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>

                <Field label="Best time to call">
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                    {[
                      { id: "today", l: "Today" },
                      { id: "tomorrow_am", l: "Tomorrow AM" },
                      { id: "tomorrow_pm", l: "Tomorrow PM" },
                    ].map((opt) => {
                      const active = form.when === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setForm({ ...form, when: opt.id })}
                          style={{
                            padding: "11px 8px",
                            fontFamily: "var(--font-sans)",
                            fontSize: 13.5,
                            fontWeight: 500,
                            borderRadius: 10,
                            border: active
                              ? "1px solid var(--sba-copper)"
                              : "1px solid var(--border-strong)",
                            background: active ? "var(--sba-copper-wash)" : "var(--sba-paper)",
                            color: active ? "var(--sba-copper-darker)" : "var(--sba-ink-2)",
                            cursor: "pointer",
                            transition: "background var(--dur-fast) var(--ease-out)",
                          }}
                        >
                          {opt.l}
                        </button>
                      );
                    })}
                  </div>
                </Field>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginTop: 6 }}>
                  <span style={{ fontSize: 12.5, color: "var(--sba-ink-3)", maxWidth: 280 }}>
                    By submitting you consent to a call back from SBA. We never share your details.
                  </span>
                  <Button size="lg" type="submit">
                    Request call back <Icon name="arrow" size={14} />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 920px) {
          .cb-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 540px) {
          .cb-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

window.Callback = Callback;
