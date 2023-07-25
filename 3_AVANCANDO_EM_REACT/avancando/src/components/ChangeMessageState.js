import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    
const message = ["oi","olá","oi, tudo bem ?"]

  return (
    <div>
        <button onClick={() => handleMessage(message[0])}> Mudar a Frase Exibida</button>
        <button onClick={() => handleMessage(message[1])}> Mudar a Frase Exibida</button>
        <button onClick={() => handleMessage(message[2])}> Mudar a Frase Exibida</button>
    </div>
  )
}

export default ChangeMessageState