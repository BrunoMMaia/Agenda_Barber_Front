import React from 'react';
import { Container } from './styled';
 
const Home: React.FC = () => {
  return (
    <Container>
        <div className="logo"> 
            
                <img src="/assets/logoJean.png" />
            
        </div>
        <div className="menu">
            <nav className="menu-nav">
                <ul>
                    <li>
                        <a href="#home">Inicio</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#footer">Contato</a>
                    </li>
                </ul>
            </nav>
        </div>      
        <div className="orcamento">
            <a href='https://wa.me/+554199197701?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento.'>
                <img src="/assets/whats.png" />
            
            Faça seu <br/>Orçamento!
            </a>
        </div>
    </Container>
  );
}

export default Home;