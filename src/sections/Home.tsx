import typing from "../assets/typing.svg";
import counter from "../assets/counter.svg";

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-header">
          <div className="home-title">
            <h1 className="home-title__text">
              {" "}
              Contador de caracteres y palabras{" "}
            </h1>
            <img className="home-title__icon" src={counter} alt="typing" />
          </div>
          <p className="home__description">
            Perfecto y util para tus comentarios en Twiiter o otras aplicaciones
            donde tienen un limite máximo de caracteres.
          </p>
        </div>
      </div>
    </section>
  );
}
