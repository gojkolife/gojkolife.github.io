export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <p className="label">( Contact )</p>
      <h2 className="footer-title">
        Let’s make
        <br />
        <em>something together.</em>
      </h2>
      <div className="footer-links">
        {/* TODO: replace with real email and Instagram */}
        <a href="mailto:hello@example.com">hello@example.com</a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
      </div>
      <div className="footer-base label">
        <span>© {new Date().getFullYear()} Gojkolife</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
