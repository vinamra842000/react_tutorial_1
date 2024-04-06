import React from 'react'

const Footer = ({length}) => {
    const today = new Date();
  return (
    <footer>
        <p>created by &copy; Vinamra Bhavsar {today.getFullYear()}</p>
        <p>{length} List {length === 1 ? "Item" : "Items"}</p>
    </footer>
  )
}

export default Footer