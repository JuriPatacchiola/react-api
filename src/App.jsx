import { useEffect } from "react";


function App() {
  useEffect(() => {
    // const url = "https://lanciweb.github.io/demo/api/actresses/";
    const url = "https://lanciweb.github.io/demo/api/actors/";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Lista attori:", data);
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
