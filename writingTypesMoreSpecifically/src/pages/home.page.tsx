import { handleClickButton, handleClickDiv } from "../examples/event.example";

export default function Home() {
  return (
    <div>
      <h1>event types</h1>
      <br />
      <br />
      <button onClick={handleClickButton}>button event</button>
      <div onClick={handleClickDiv}>div event</div>
    </div>
  );
}
