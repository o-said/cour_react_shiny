import react from 'react'
import styled from 'styled-components'

const CardLabel = styled.span`
color: #5843e4;
font-size: 22 px;
font-weight: bold;`

const CardImage = styled.img`
	height: 80 px ;
    width: 80 px;
    border-radius;
`


function Card({ label, title = "Mon titre par défaut ", picture}) {
return (
    <div style={{ display: 'flex',flexDirection: 'column', padding: 15 }} >
    <span>{label}</span>
    <img src={picture} alt= "freelance" height={80} width={80} />
    <span>{title}</span>
    <CardLabel>{label}</CardLabel>
    <CardImage src={picture} alt="freelance " />
	</div>
	)

}
Card.prototypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string,
}
Card.defaultProps = {
    title = 'Mon titre par défaut', 
}

export default Card