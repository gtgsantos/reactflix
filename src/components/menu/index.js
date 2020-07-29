import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './../../assets/imagem/LogoMain.png'
import './Menu.css'
// import ButtonLink from './../ButtonLink'
import Button from './../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img class="Logo" src={Logo} alt="MagoFlix logo"/>
            </Link>

            {/* <ButtonLink href="/" className="ButtonLink">Novo vídeo</ButtonLink> */}
            <Button as={Link} to="/cadastro/video" className="ButtonLink">Novo vídeo</Button>
        </nav>
    )
}

export default Menu;