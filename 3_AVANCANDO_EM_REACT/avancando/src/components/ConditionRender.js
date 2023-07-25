import React, { useState } from 'react'

function ConditionRender() {

    const [x] = useState(false)
    const [name,setName] = useState('Bruno')

    return (
        <div>
            <h3> isso será exibido ?</h3>
            {x && <div> se x for true sim</div>}
            {!x && <div> se x for false não </div>}

            <h3> if ternário </h3>

            {name==='Gustavo' ? (<p> Nome é Gustavo </p>) : (<p> nome não é Gustavo, click no botão para alterar para Gustavo </p>)}
             
            <button onClick={() => setName('Gustavo')}> Alterar para Gustavo</button>
        </div>
    )
}

export default ConditionRender