import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
export function Nav() {
  return (
    <div className={styles.Nav}>
      <div>
        <button className={styles.icon}>
          <Link to="/Home">
            <>H</>
          </Link>
        </button>
        <p className={styles.navbutton}>Home</p>
      </div>
      <div>
        <button className={styles.icon}>
          <Link to="/Data">D</Link>
        </button>
        <p className={styles.navbutton}>Data offers</p>
      </div>
      <div>
        <button className={styles.icon}>
          <Link to="/Chat">C</Link>
        </button>
        <p className={styles.navbutton}>Chat</p>
      </div>
    </div>
  );
}
