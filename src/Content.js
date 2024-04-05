// useState Hook
import { useState } from "react";

const Content = () => {
    // Like getter Setter
    const[name, setName] = useState('Vinamra'); // Default Value Vinamra Pass
    const[count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Vinamra', 'Bob', 'Kevin'];
        const num = Math.floor(Math.random() * 3);
        // return names[num];
        setName(names[num]) // Set Name as current state
    }
    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        console.log(count)
    }
    // const handleClick2 = (name) => {
    //     console.log(`${name} clicked!`)
    // }
    const handleClick3 = (e) => {
        console.log(e.target)
    }
    return (
        <main>
            <p>
                Hello {name}! {/*current State value*/}
            </p>
            <p>
                {count}
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Change Count</button>
            <button onClick={(e) => {handleClick3(e)}}>Click It!</button>
        </main>
    )
}

export default Content