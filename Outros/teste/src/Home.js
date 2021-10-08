import React from 'react';
import { Link } from 'react-router-dom';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM_ID_HOMEEEEE>'
}

TagManager.initialize(tagManagerArgs)

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;