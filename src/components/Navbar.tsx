export default function Navbar() {
  return (
    <section className="navbar-section">
      <div className="navbar-container">
        <div className="navbar-links">
          <h3 className="navbar-item">Capaz te interesa</h3>
          <a
            className="navbar-item withHover"
            href="https://manucabral.github.io/algebrador/"
          >
            Algebrador
          </a>
          <a className="navbar-item withHover" href="https://github.com/manucabral/contaracter">
            Repositorio
          </a>
        </div>
      </div>
    </section>
  );
}
