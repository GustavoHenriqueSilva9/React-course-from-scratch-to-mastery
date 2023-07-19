
const Events = () => {

    const handleMyEvent = (events) => {

        console.log('Eventos: ', events);

        console.log('Ativou o evento');
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1> Posso renderizar isso</h1>
        } else {
            return <h1> Posso render isso aqui também</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique</button>

                <button onClick={() => { console.log('Clicou aqui mesmo'); }}>Clique aqui</button>

                <button onClick={() => { //Com uma funcão dentro, começa deixar o código bagunçado, o ideal seria dividir com uma funções fora a lógica.
                    if (true) {
                        console.log('Clicou aqui porque pedi com educação');
                    }
                }}>Por favor clique aqui</button>
            </div>
            {renderSomething(true)/* Como eu quero que já execute assim que for carregado eu ja coloco o '()' junto a função*/}
            {renderSomething(false)}
        </div>
    )

}

export default Events;