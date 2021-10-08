import React from 'react';
import { Link } from 'react-router-dom';
import TagManager from 'react-gtm-module'


const tagManagerArgs = {
    gtmId: 'GTM_ID_SOBREEE>'
  }
  
  TagManager.initialize(tagManagerArgs)

  
const Sobre = () => {
    return (
        <div>
            <h1>Sobre</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default Sobre;