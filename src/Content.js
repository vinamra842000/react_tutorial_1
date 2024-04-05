import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Vinamra', 'Bob', 'Kevin'];
        const num = Math.floor(Math.random() * 3);
        return names[num];
    }
    return (
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
        </main>
    )
}

export default Content