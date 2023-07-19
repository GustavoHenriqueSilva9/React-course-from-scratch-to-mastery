import { useState } from 'react';

const ManageData = () => {
    let statelessNumber = 5;

    const [numberx, setNumber] = useState(15);
    return (
        <div>
            <div>
                <h3>Stateless Number</h3>

                <p>Value: {statelessNumber}</p>

                <button onClick={statelessNumber = 15}> add Number </button>
            </div>

            <div>
                <h3>Number with State</h3>

                <p>Value: {numberx}</p>

                <button onClick={() => {setNumber(30)}}>add Number</button>
            </div>
        </div>


    )

}

export default ManageData;