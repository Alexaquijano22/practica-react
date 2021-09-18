import React from "react";
import { inhabitants } from "./data/inhabitants";
import './index.css';

const Inhabitants = () => {
    return (
        <>
        
            {inhabitants.map((inhabitant, i) => {
                return (
                    <div className="card">
                        <h1>ID: {inhabitant.id}</h1>
                        <h2>Nombre: {inhabitant.name}</h2>
                        <img width="100px" height="100px" src={inhabitant.thumbnail} alt="" />
                        <p>Edad: {inhabitant.age}</p>
                        <p>Peso: {inhabitant.weight}</p>
                        <p>Altura: {inhabitant.height}</p>
                        <p>Color de cabello: {inhabitant.hair_color}</p>
                        <p><strong>Profesiones: </strong></p>
                        {inhabitant.professions.map((profession, i) => {
                            return (
                                <p>{profession}</p>
                            )
                        })}
                        <p><strong>Amigos: </strong></p>
                        {inhabitant.friends.map((friend, i) => {
                            return (
                                <p>{friend}</p>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}

export default Inhabitants;