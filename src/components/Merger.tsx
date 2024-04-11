import { FunctionComponent } from "react";
import styles from "./Merger.module.css";

const Merger: FunctionComponent = () => {
  return (
    <div className={styles.merger}>
      <div className={styles.actionButtons}>
        <button className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-1@2x.png" />
          <b className={styles.viewAll}>View All</b>
        </button>
        <button className={styles.buttonItems}>
          <img
            className={styles.buttonItemsChild}
            alt=""
            src="/rectangle-1-1.svg"
          />
          <b className={styles.playNow}>Play now</b>
        </button>
      </div>
    </div>
  );
};

export default Merger;
