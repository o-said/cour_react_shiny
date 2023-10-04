import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(Link)`
	padding: 15 px;
    color: #8186a0;
    text-decoration = none;
    font-size = 18 px;
    ${(props) => 
        props.$isFullLink &&
    `color:white; border-radius: 30px; background-color: #5843E4;`}
`

function Header() {
    return (
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/Survey">Questionnaire</StyledLink>
            <StyledLink to ="/freelances ">Profils</StyledLink>
        </nav>
    );
}

export default Header;
