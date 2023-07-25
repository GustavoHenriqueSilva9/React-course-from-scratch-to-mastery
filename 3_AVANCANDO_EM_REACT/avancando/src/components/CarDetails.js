import React from "react";

const CarDetails = ({ brand, km, newCar, color }) => {
    return (
        <div>

            <ul>
                <h3> Nome do Carro: </h3>
                <li> Marca: {brand}</li>
                <li> KM: {km}</li>
                <li> Cor: {color}</li>
                <li> Carro novo: {newCar ? 'sim' : 'não'}</li>
            </ul>
        </div>
    )
}

export default CarDetails;