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

    </>
  )
}

export default App