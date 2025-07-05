import { useState } from "react";
import styles from "./Data.module.css";

export function Data() {
  const [amount, setamount] = useState("");
  const [amount1, setamount1] = useState("");
  const [amount2, setamount2] = useState("");
  const [amount3, setamount3] = useState("");
  const [amount4, setamount4] = useState("");
  const [amount5, setamount5] = useState("");
  const [amount6, setamount6] = useState("");
  const [amount7, setamount7] = useState("");
  const [amount8, setamount8] = useState("");
  const [amount9, setamount9] = useState("");
  const [amount10, setamount10] = useState("");
  const [amount11, setamount11] = useState("");
  const [amount12, setamount12] = useState("");
  const [amount13, setamount13] = useState("");
  const [amount14, setamount14] = useState("");
  const [amount15, setamount15] = useState("");
  const [amount16, setamount16] = useState("");
  function handleclick() {}
  return (
    <div className={styles.Data}>
      <div className={styles.firstheading}>
        <h2>CLICK THE OFFER AND BUY</h2>
      </div>

      <div className={styles.Div1}>
        <div className={styles.slab1}>
          {" "}
          <button
            className={styles.databutton}
            value={amount}
            onClick={(amount) => setamount("SENT 20/= Till:8341270")}
          >
            250MBs 24HRS
          </button>
          <p className={styles.amountdisp}>{amount}</p>
        </div>
        <div className={styles.slab1}>
          {" "}
          <button
            className={styles.databutton}
            value={amount}
            onClick={(amount1) => setamount1("SENT 19/= Till:8341270")}
          >
            1GB 1HR
          </button>
          <p className={styles.amountdisp}>{amount1}</p>
        </div>
        <div className={styles.slab1}>
          <button
            className={styles.databutton}
            value={amount}
            onClick={(amount2) => setamount2("SENT 19/= Till:8341270")}
          >
            1GB 24HRS
          </button>
          <p className={styles.amountdisp}>{amount2}</p>
        </div>
      </div>
      <div className={styles.Div2}>
        <div className={styles.slab2}>
          {" "}
          <button
            className={styles.databutton}
            value={amount3}
            onClick={(amount3) => setamount3("SENT 19/= Till:8341270")}
          >
            1.5GB 3HRS
          </button>
          <p className={styles.amountdisp}>{amount3}</p>
        </div>
        <div className={styles.slab2}>
          <button
            className={styles.databutton}
            value={amount5}
            onClick={(amount5) => setamount5("SENT 19/= Till:8341270")}
          >
            1.25GB 30DAYS
          </button>
          <p className={styles.amountdisp}>{amount5}</p>
        </div>
        <div className={styles.slab2}>
          <button
            className={styles.databutton}
            value={amount6}
            onClick={(amount6) => setamount6("SENT 19/= Till:8341270")}
          >
            2.5GB 7DAYS
          </button>
          <p className={styles.amountdisp}>{amount6}</p>
        </div>
      </div>
      <div className={styles.Div3}>
        <div className={styles.slab3}>
          {" "}
          <button
            className={styles.databutton}
            value={amount4}
            onClick={(amount4) => setamount4("SENT 19/= Till:8341270")}
          >
            1.25GB TILNIGHT
          </button>
          <p className={styles.amountdisp}>{amount4}</p>
        </div>
        <div className={styles.slab3}>
          <button
            className={styles.databutton}
            value={amount7}
            onClick={(amount7) => setamount7("SENT 19/= Till:8341270")}
          >
            20MINS 3HRS
          </button>
          <p className={styles.amountdisp}>{amount7}</p>
        </div>
        <div className={styles.slab3}>
          {" "}
          <button
            className={styles.databutton}
            value={amount8}
            onClick={(amount8) => setamount8("SENT 19/= Till:8341270")}
          >
            20MINS 24HRS
          </button>
          <p className={styles.amountdisp}>{amount8}</p>
        </div>
      </div>
      <div className={styles.Div4}>
        <div className={styles.slab4}>
          {" "}
          <button
            className={styles.databutton}
            value={amount9}
            onClick={(amount9) => setamount9("SENT 19/= Till:8341270")}
          >
            300MINS 30DAYS
          </button>
          <p className={styles.amountdisp}>{amount9}</p>
        </div>
        <div className={styles.slab4}>
          {" "}
          <button
            className={styles.databutton}
            value={amount10}
            onClick={(amount10) => setamount10("SENT 19/= Till:8341270")}
          >
            800MINS 30DAYS
          </button>
          <p className={styles.amountdisp}>{amount10}</p>
        </div>
        <div className={styles.slab4}>
          {" "}
          <button
            className={styles.databutton}
            value={amount11}
            onClick={(amount11) => setamount11("SENT 19/= Till:8341270")}
          >
            20SMS 24HRS
          </button>
          <p className={styles.amountdisp}>{amount11}</p>
        </div>
      </div>
      <div className={styles.Div5}>
        <div className={styles.slab5}>
          <button
            className={styles.databutton}
            value={amount12}
            onClick={(amount12) => setamount12("SENT 19/= Till:8341270")}
          >
            200SMS 24HRS
          </button>
          <p className={styles.amountdisp}>{amount12}</p>
        </div>
        <div className={styles.slab5}>
          {" "}
          <button
            className={styles.databutton}
            value={amount13}
            onClick={(amount13) => setamount13("SENT 19/= Till:8341270")}
          >
            100SMS 7DAYS
          </button>
          <p className={styles.amountdisp}>{amount13}</p>
        </div>
        <div className={styles.slab5}>
          {" "}
          <button
            className={styles.databutton}
            value={amount14}
            onClick={(amount14) => setamount14("SENT 19/= Till:8341270")}
          >
            1000SMS 7DAYS
          </button>
          <p className={styles.amountdisp}>{amount14}</p>
        </div>
      </div>
      <div className={styles.Div6}>
        <div className={styles.slab6}>
          {" "}
          <button
            className={styles.databutton}
            value={amount}
            onClick={(amount15) => setamount15("SENT 19/= Till:8341270")}
          >
            1500SMS 30DAYS
          </button>
          <p className={styles.amountdisp}>{amount15}</p>
        </div>
        <div className={styles.slab6}>
          {" "}
          <button
            className={styles.databutton}
            value={amount16}
            onClick={(amount16) => setamount16("SENT 19/= Till:8341270")}
          >
            3500SMS 30DAYS
          </button>
          <p className={styles.amountdisp}>{amount16}</p>
        </div>
      </div>
    </div>
  );
}
