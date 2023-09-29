import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Survey/42">Questionnaire</Link>
            <Link to ="/results" >Results</Link>
            <Link to ="/Freelances">Freelances</Link>
        </nav>
    );
}

export default Header;
