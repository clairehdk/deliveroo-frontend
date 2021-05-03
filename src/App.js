import "./App.css";

// Import des images
import logo from "./assets/img/logo.png";

// Import des packages
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  // Récupère les datas
  const [data, setData] = useState({});
  // Gère la page en fonction de son état de chargement
  const [isLoading, setIsLoading] = useState(true);

  // Création d'une variable pour récupérer les datas

  useEffect(() => {
    const fetchData = async () => {
      try {
        // On crée une variable dans laquelle on stocke les données recues du serveur créé sur le back, et on attend que toutes les données soient récupérées avant d'effectuer la suite
        const response = await axios.get("http://localhost:3200/");
        console.log(response.data);
        // On push les données du serveur dans notre objet data
        setData(response.data);
        // Si on a bien recu nos datas, alors le loading passe à false
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Si nous n'avons pas recu les données, alors on affichera un texte d'attente

  return isLoading ? (
    <span>Still Loading</span>
  ) : (
    <div>
      <Header
        logo={logo}
        title={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      <div class="main-section">
        <div className="container">
          <div className="meals">
            <div>
              {data.categories.map((category, index) => {
                return <Content name={category.name} meals={category.meals} />;
              })}
            </div>
            <div>
              <h1>Panier</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
