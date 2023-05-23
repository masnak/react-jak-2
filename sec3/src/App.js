import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <h1>test</h1>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={() => setText("")}>Clear</button>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

export default App;
