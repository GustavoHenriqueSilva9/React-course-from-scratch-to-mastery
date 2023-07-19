const TemplateExpression = () => {

    const name = 'Gustavo';
    const data = {
        age: 21,
        job: 'programmer'
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem ?</h1>
            <p>Sua profissão é: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log('Console log dentro do return')}</p>
        </div>
    )


}

export default TemplateExpression;