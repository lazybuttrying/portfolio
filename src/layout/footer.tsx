import styled from "@emotion/styled";

let FooterWrapper = styled.footer`
  padding: 20px 0;
  text-align: center;
  font-size: 12px;
  color: #777;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>Copyright ⓒ 2022 koios</p>
    </FooterWrapper>
  );
}
