/* eslint-disable no-undef */
const BookModal = ({ open, onClose }) => {
  const [submitted, setSubmitted] = React.useState(false);
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(31, 30, 29, 0.4)",
        backdropFilter: "blur(4px)",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "fadeIn 220ms var(--ease-out)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--sba-cream)",
          borderRadius: 24,
          padding: 32,
          maxWidth: 520,
          width: "100%",
          boxShadow: "var(--shadow-4)",
          animation: "slideUp 280ms var(--ease-out)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "var(--sba-ink-3)",
          }}
        >
          <Icon name="close" size={20} />
        </button>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <div style={{ width: 56, height: 56, borderRadius: 999, background: "var(--sba-success-bg)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <Icon name="check" size={28} color="var(--sba-success)" />
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 26, fontWeight: 500, color: "var(--sba-ink)", margin: "0 0 8px" }}>We'll be in touch.</h3>
            <p style={{ fontSize: 15, color: "var(--sba-ink-2)", margin: 0, lineHeight: 1.5 }}>
              One of our accountants will ring you back today or tomorrow morning. No phone tree.
            </p>
            <div style={{ marginTop: 24 }}>
              <Button variant="secondary" onClick={onClose}>Close</Button>
            </div>
          </div>
        ) : (
          <>
            <Eyebrow>Free 20-minute call</Eyebrow>
            <h3 style={{
              fontFamily: "var(--font-serif)",
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: "-0.012em",
              color: "var(--sba-ink)",
              margin: "10px 0 6px",
            }}>Tell us a bit about you.</h3>
            <p style={{ fontSize: 14.5, color: "var(--sba-ink-2)", margin: "0 0 22px", lineHeight: 1.5 }}>
              We'll read this before our call so we don't waste your time. No phone tree, no sales script.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); console.log("submitted"); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Field label="Your name"><input style={inputStyle} placeholder="Jamie Liu" required /></Field>
              <Field label="Email"><input style={inputStyle} type="email" placeholder="you@business.com.au" required /></Field>
              <Field label="What do you need help with?">
                <select style={inputStyle} defaultValue="">
                  <option value="" disabled>Pick one…</option>
                  <option>Individual tax return</option>
                  <option>BAS / business tax</option>
                  <option>Business setup or consulting</option>
                  <option>Bookkeeping</option>
                  <option>Not sure yet</option>
                </select>
              </Field>
              <Field label="Anything we should read first? (optional)">
                <textarea style={{ ...inputStyle, minHeight: 84, fontFamily: "var(--font-sans)", resize: "vertical" }} placeholder="Last year's return, a question, a deadline you're worried about…" />
              </Field>
              <Button size="lg" type="submit">Send request →</Button>
            </form>
          </>
        )}
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
};
window.BookModal = BookModal;
