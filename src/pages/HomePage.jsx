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
    const fetchServices = async() => {
        const response = await fetch('https://exam.avavion.ru/api/services');
        
        const data = await response.json();

        setItems(data.data);
    }

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <div className="container">

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
                                filteredProducts.map((service) => {
                                    return (
                                        <div class="" key={service.id}>
                                            <img src={service.image_url} alt="" />
                                            <h2>{service.name}</h2>
                                            <p>{service.content}</p>
                        
                                            <NavLink to={`/services/${service.id}`} >Перейти</NavLink>
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