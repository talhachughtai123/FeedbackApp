import React from 'react'


function Header(props) {
  return (
    <>
    <header>
    <div className='container'>
        <h2>{props.text}</h2>
    </div>
    </header>
    </>
  )
}
Header.defaultProps = {
    text: 'Feedback UI',
}


export default Header
