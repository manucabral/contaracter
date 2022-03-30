import counter from "../assets/counter.svg";

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-header">
          <div className="home-title">
            <h1 className="home-title__text">
              Contador de caracteres y palabras
            </h1>
            <img className="home-title__icon" src={counter} alt="counter" />
          </div>
          <p className="home__description">
            Perfecto y útil para tus comentarios en Twitter o en otras aplicaciones
            donde tienen un limite máximo de caracteres ya sea para un título o para un comentario.
          </p>
        </div>
      </div>
    </section>
  );
}
