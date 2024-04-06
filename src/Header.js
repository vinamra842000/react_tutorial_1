import React from 'react'

const Header = (props) => {
  return (
    <header style={{
        color:'red'
    }}>
        <h1>{props.title}</h1>
    </header>
  )
}

//default props
Header.defaultProps = {
  title : "Default Title"
}

export default Header