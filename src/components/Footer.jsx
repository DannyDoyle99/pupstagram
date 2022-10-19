import React from 'react'
import Logo from '../images/Pupstagram.png'

const Footer = () => {
  return (
    <footer className="text-center p-4">© 2022 Copyright: Daniel Doyle
    <img src={Logo} className="container mx-auto h-16 w-48 m-5"></img>
    </footer>
  )
}

export default Footer