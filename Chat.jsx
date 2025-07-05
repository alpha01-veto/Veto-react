import { useState } from "react";
import styles from "./Chat.module.css";
export function Chat() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  function handlesubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo("");
  }
  return (
    <div>
      <form className={styles.Chat} onSubmit={handlesubmit}>
        <input
          className={styles.Input}
          onChange={(e) => settodo(e.target.value)}
          value={todo}
          placeholder="Message us"
          type="text"
        />
        <button type="submit">Sent</button>
        <div className={styles.Messages}>
          {todos.map((item) => (
            <h2>{item}</h2>
          ))}
        </div>
      </form>
    </div>
  );
}
