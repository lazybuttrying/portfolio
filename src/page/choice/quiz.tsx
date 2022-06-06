import { Form } from "../../layout/component/form";
import { LinkWrapper as Link } from "../../layout/component/list";

export default function Quiz() {
  return (
    <Form>
      <h3>Welcome to Quiz</h3>
      <h5>
        It can be also a test <br /> just help your choice
      </h5>

      <Link to="food">
        <h4>오늘의 점심식사는?</h4>
      </Link>
    </Form>
  );
}
