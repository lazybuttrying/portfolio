import styled from '@emotion/styled'
import Nav from './component/nav'


let HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
`
let Logo = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Tiro+Kannada&display=swap');
    font-family: 'Tiro Kannada', serif;
`

export default function Header() {

    return (
        <HeaderWrapper>
            <Logo>koios</Logo>
            <Nav/>
        </HeaderWrapper>
    )
}