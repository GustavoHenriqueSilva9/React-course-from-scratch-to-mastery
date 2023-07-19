
const Challenge = () => {

    const sumOfValues = (x, y) => {
        const sum = x + y;

        console.log(`soma dos valores ${x} e ${y} é ${sum}`);
    }
    return (
        <div>
            <p>Soma dos valores 2 e 3 = {2 + 3}</p>

            <button onClick={() => sumOfValues(2,3)}>Soma dos valores e impressão no console</button>
        </div>
    )

}

export default Challenge;