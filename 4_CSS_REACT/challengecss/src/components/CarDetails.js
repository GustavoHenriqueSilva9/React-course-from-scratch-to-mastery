import React from 'react'
import style from '../components/CarDetails.module.css'
const CarDetails = ({ cars }) => {
  return (
    <>
      <ul className={style.card}>
        <div>CarDetails</div>
        <li className={style.list_item}> Carro {cars.car}</li>
        <li>Marca: {cars.brand}</li>
        <li>Potencia {cars.potencia}</li>
      </ul>


    </>
  )
}

export default CarDetails