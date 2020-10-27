import React from 'react';
import './Card.css'
const imageSize ={width:'120px',heigh:'120px'};
const Card =({name, email, id})=>{
    return (
        <div className="card">
        <img src={`https://robohash.org/${id}`} alt="photo" style={imageSize}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    )
}

export default Card;