import styled from '@emotion/styled'


let FooterWrapper = styled.footer`
    background-color: rgb(10,35,68);
    border-top: 1px solid #ddd;
    padding: 20px 0;
    text-align: center;
    font-size: 12px;
    color: #777;
    position: absolute;
    bottom: 0;
    width: 100%;
`


export default function Footer() {

    return (
        <FooterWrapper>
            <p>Copyright ⓒ 2022 koios</p>
        </FooterWrapper>
    )
}