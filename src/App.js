import { useState, useEffect } from "react";
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Slider from "./Slider.js";
import Produtos from "./Produtos.js";
import Title from "./Title.js";
import Footer from "./Footer.js";
import "./css/style.css";

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loadMore, setLoadMore] = useState(
     "https://j2eg5wqgoe.execute-api.us-east-1.amazonaws.com/api/v1/advertisers"
  );
  
  
  const getAllProducts = async () => {
    const res = await fetch(loadMore);
    const dados = await res.json();

    let produtos = dados.results_pagination.data;

    let produtosLista = produtos.map((item) => {
      return item;
    });

    console.log("A quantiade de items de um array " + produtosLista.length);

    setAllProducts([...allProducts, produtosLista]);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(allProducts[0]);

  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <Title />

      <section className="produtos-box">
        <div className="container">
          {allProducts[0] &&
            allProducts[0].map((item, index) => {
              return (
                <Produtos
                  keys={index}
                  nome={item.name}
                  imagem={item.image_url}
                  commission={item.commission_description}
                />
              );
            })}
        </div>
      </section>
      <Title />
      <Footer />
    </>
  );
};

export default App;

