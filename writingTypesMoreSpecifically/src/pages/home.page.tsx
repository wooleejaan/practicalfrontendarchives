import UseChildren from "../components/UseChildren";
import { handleClickButton, handleClickDiv } from "../examples/event.example";

export default function Home() {
  return (
    <div>
      <h1>event types</h1>
      <br />
      <br />
      <button onClick={handleClickButton}>button event</button>
      <div onClick={handleClickDiv}>div event</div>
      <br />
      <br />
      <UseChildren color="red">
        <div>자식 요소입니다.</div>
      </UseChildren>
    </div>
  );
}
