import { useEffect, useState } from "react";

function App() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const url = "https://lanciweb.github.io/demo/api/actors/";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Lista attori:", data);
        setActors(data);
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati:", error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1>Attori</h1>
        <div className="card-container">
          {actors.map((actor) => (
            <div key={actor.name} className="card">
              <img src={actor.image} alt={actor.name} className="card-image" />
              <h3>{actor.name}</h3>
              <p><strong>Nato:</strong> {actor.birth_year}</p>
              <p><strong>Nazionalità:</strong> {actor.nationality}</p>
              <p>{actor.bio}</p>
              <p><strong>Riconoscimenti:</strong> {actor.awards}</p>
            </div>
          ))}
        </div>

      </div>

    </>
  )
}

export default App