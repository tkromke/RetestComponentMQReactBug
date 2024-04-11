import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <header className={styles.ciTestGamingInner}>
      <div className={styles.boardParent}>
        <b className={styles.board}>board</b>
        <div className={styles.frameWrapper}>
          <div className={styles.productsParent}>
            <div className={styles.products}>Products</div>
            <div className={styles.appsGames}>{`Apps & Games`}</div>
            <div className={styles.features}>features</div>
            <div className={styles.support}>Support</div>
            <div className={styles.about}>about</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
