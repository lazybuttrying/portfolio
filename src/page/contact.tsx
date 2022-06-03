import { Main } from "../layout/component/main";
import styled from "@emotion/styled";

let P = styled.p`
  color: white;
`;

export default function Contact() {
  return (
    <Main>
      <section>
        <h3>
          Who am I? <br /> Where am I?
        </h3>
        <P>
          여러 환경에 대한 경험을 쌓고 있습니다 <br />
          하나의 뚜렷한 직업으로 설명하기 힘들지만 <br />전 과정을 알고자 하는
          마음으로
        </P>
      </section>
      <section>
        <h3>History</h3>
      </section>
    </Main>
  );
}
