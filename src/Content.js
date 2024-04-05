import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Vinamra', 'Bob', 'Kevin'];
        const num = Math.floor(Math.random() * 3);
        return names[num];
    }
    const handleClick = () => {
        console.log("You clicked.")
    }
    const handleClick2 = (name) => {
        console.log(`${name} clicked!`)
    }
    const handleClick3 = (e) => {
        console.log(e.target)
    }
    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click It!</button>
            <button onClick={() => {handleClick2('Vinamra')}}>Click It!</button>
            <button onClick={(e) => {handleClick3(e)}}>Click It!</button>
        </main>
    )
}

export default Content