import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FeedbackPage from "./FeedbackPage";



const HomePage = () => {

    const [items, setItems] = useState([]);


    

    const [query, setQuery] = useState([]);
  

    const onChangeQuery = (event) => {
        setQuery(event.target.value.toLowerCase());
    }
    const filteredProducts = items.filter((item) => item.name.toLowerCase().includes(query));
    const fetchProducts = async() => {
        const response = await fetch('https://flowers.avavion.ru/api/products');
        
        const data = await response.json();

        setItems(data.data);
    }
    

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
            
        <div className="container">
            <header>
            <img src="src/assets/logo.webp" Class="logo"></img>
            
            </header>
            
            <section id="catalog" className="box">
                <div className="catalog_container container">
                    <div className="catalog_header">
                        <h1>Каталог</h1>
                    {/* поиск */}
                        <div className="search-box">
                            <div className="search-box-img image-box">
                            </div>
                            <input 
                            value={query}
                            onChange={(e) => onChangeQuery(e)}
                            type="text" 
                            placeholder="Поиск..." 
                            className="search-box_input" />
                        </div>
                        {/* поиск */}
                    </div>
                    <div className="services">
                   
                        {
                             filteredProducts.length ? 
                             (
                                filteredProducts.map((products) => {
                                    return (
                                        <div class="" key={products.id}>
                                            <img src={products.preview_image} alt="" />
                                            <h2>{products.name}</h2>
                                            <h4>{products.text}</h4>
                                            <p>{products.price}</p>
                                            
                        
                                            <NavLink to={`/products/${products.id}`} >Перейти</NavLink>
                                        </div>
                                    );
                                })
                             ):
                             <h2>По вашему запросу {query} ничего не найдено</h2>
                        }
                        
                    </div>
                </div>
            </section>

            <section id="feedback" className="feedback">
                <FeedbackPage />
            </section>
        </div>
    )
}

export default HomePage;