import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
        <h1> Titulo do container </h1>
        
        {children}

        <p>Valor do conteúdo: {myValue}</p>

    </div>
  )
}

export default Container