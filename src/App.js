import "./App.css";

// Import des images
import logo from "./assets/img/logo.png";
import loading from "./assets/img/loading.svg";

// Import des packages
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Loading from "./components/Loading";
import Panier from "./components/Panier";

function App() {
  // Récupère les datas
  const [data, setData] = useState({});
  // Gère la page en fonction de son état de chargement
  const [isLoading, setIsLoading] = useState(true);
  // Gestion du panier
  const [basket, setBasket] = useState([]);
  // Gestion du compteur dans le panier
  const [counter, setCounter] = useState([1]);
  //
  const [selected, isSelected] = useState(false);

  // Création d'une fonction qui permet de récupérer les informations d'un item pour le mettre dans le panier
  const handleBasket = (title, price) => {
    if (basket.indexOf(title) === -1) {
      const newBasket = [...basket];
      newBasket.push({ title: title, price: price });
      setBasket(newBasket);
    }
  };

  // Création de fonctions pour gérer le compteur
  const handleMinus = (index) => {
    const newCounter = [...counter];
    newCounter[index]--;
    setCounter(newCounter);
  };

  const handlePlus = (index) => {
    const newCounter = [...counter];
    newCounter[index]++;
    setCounter(newCounter);
  };

  // Création d'une fonction pour récupérer les datas

  useEffect(() => {
    const fetchData = async () => {
      try {
        // On crée une fonction dans laquelle on stocke les données recues du serveur créé sur le back, et on attend que toutes les données soient récupérées avant d'effectuer la suite
        const response = await axios.get(
          "https://deliveroo-project.herokuapp.com"
        );
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
    <Loading img={loading} />
  ) : (
    <div>
      <Header
        logo={logo}
        title={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      <div className="main-section">
        <div className="container">
          <div className="meals">
            <div>
              {data.categories.map((category, index) => {
                return (
                  <Content
                    key={index}
                    name={category.name}
                    meals={category.meals}
                    basket={handleBasket}
                    selected={selected}
                  />
                );
              })}
            </div>
            <Panier
              basket={basket}
              plus={handlePlus}
              minus={handleMinus}
              counter={counter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
