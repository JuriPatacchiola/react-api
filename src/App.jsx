import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [actresses, setActresses] = useState([])
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

    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((response) => {
      setActresses(response.data);
      console.log("Lista attrici", response.data)

    }).catch((error) => {
      console.error("Errore nel recupero delle attrici:", error);
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

      <div className="container2">
        <h1>Attrici</h1>
        <div className="card-container">
          {actresses.map((actress) => (
            <div key={actress.name} className="card">
              <img src={actress.image} alt={actress.name} className="card-image" />
              <h3>{actress.name}</h3>
              <p><strong>Nato:</strong> {actress.birth_year}</p>
              <p><strong>Nazionalità:</strong> {actress.nationality}</p>
              <p>{actress.bio}</p>
              <p><strong>Riconoscimenti:</strong> {actress.awards}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default App