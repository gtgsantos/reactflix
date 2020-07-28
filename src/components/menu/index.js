import React from 'react';
import Logo from './../../assets/imagem/LogoMain.png'
import './Menu.css'
// import ButtonLink from './../ButtonLink'
import Button from './../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img class="Logo" src={Logo} alt="MagoFlix logo"/>
            </a>

            {/* <ButtonLink href="/" className="ButtonLink">Novo vídeo</ButtonLink> */}
            <Button as="a" href="/" className="ButtonLink">Novo vídeo</Button>
        </nav>
    )
}

export default Menu;