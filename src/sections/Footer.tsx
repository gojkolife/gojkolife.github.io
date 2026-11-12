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
        <a href="mailto:kristijan.gojkovic@outlook.com">kristijan.gojkovic@outlook.com</a>
        <a href="https://www.instagram.com/gojkolife/" target="_blank" rel="noreferrer">Instagram @gojkolife</a>
      </div>
      <div className="footer-base label">
        <span>© {new Date().getFullYear()} Gojkolife</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
