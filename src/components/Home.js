import React from 'react';
import {Link} from 'react-router-dom';

//  je crée des btn pour faire le changement de pages= redirection avec lien

function Home() {
   
    return (
    <div>       
        <h1>Accueil</h1>
       <button>
        <Link to="/Series">Séries</Link>
       </button>
       <button>
       <Link to="/Movies">Movies</Link>
       </button>


    </div>
    )
  }

export default Home