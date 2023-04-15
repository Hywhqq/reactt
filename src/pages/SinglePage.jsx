import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const SinglePage = () => {

    const params = useParams();

    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://flowers.avavion.ru/api/products/${params.id}`)
        .then((response) => response.json())
        .then((data) => setService(data.data));
    }, []);

    return (
        <div class="singlepage">
            <div key={service.id} class="singepage">
                <img src={service.preview_image} alt="" />
                <h2>{service.name}</h2>
                <h4>{service.text}</h4>
                <p>{service.price} P</p>
                <NavLink to={`/`} >Назад</NavLink>
            </div>
        </div>
    );
}

export default SinglePage
