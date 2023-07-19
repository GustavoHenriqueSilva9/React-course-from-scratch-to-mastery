//Arquivo de estilo

import MyComponent from "./MyComponent"

const FirstComponent = () =>{
//Essa função faz isso

    /*
        Comentário multi line
    */

    return(
        <div>
            {/* Comentario dentro do return*/}
            <p className="teste_classe">Meu primeiro componente</p>
            <MyComponent />
        </div>
    )
}

export default FirstComponent