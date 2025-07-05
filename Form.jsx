import styles from "./Form.module.css";
export function Form() {
  return (
    <div>
      <form className={styles.Form}>
        {/* <div className={styles.Nav}>k</div> */}
      </form>
      <div className={styles.firstslab}>
        <button className={styles.button1}>
          <h4>CLICK AND GRAB AN OFFER</h4>
        </button>
        <button className={styles.button2}>
          <h4>Hurry grab the offers</h4>
        </button>
      </div>

      <div className={styles.secondslab}>
        <button className={styles.button3}>
          <h3>BUY GOODS TILL NUMBER</h3>
        </button>
        <button className={styles.button4}>
          <h3>TILL:8341270</h3>
        </button>
      </div>
    </div>
  );
}
