import styled from '@emotion/styled'
import { Link } from 'react-router-dom'


let NavWrapper = styled.nav`
`

let Ul = styled.ul`
    display: flex;
    list-style: none;
    gap:10px;
    line-height: 3em;

`

let Li = styled(Link)`
    text-decoration: none;
    font-size: 1em;
    &:link {
        color:white;
    }
    &:visited {
        color : rgb(235, 83, 45);
    }
`

export default function Nav() {

    return (
        <NavWrapper>
            <Ul>
                <Li to="/home">Home</Li>
                <Li to="/about">About</Li>
                <Li to="/contact">Contact</Li>
            </Ul>
        </NavWrapper>
    )
}