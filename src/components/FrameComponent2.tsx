import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.ciTestGamingInner}>
      <section className={styles.chooseYourFavoriteGamesParent}>
        <h1 className={styles.chooseYourFavoriteContainer}>
          <span>{`choose your `}</span>favorite
          <span> games</span>
        </h1>
        <div className={styles.offerSneakPeeksAndPreviewsWrapper}>
          <div className={styles.offerSneakPeeks}>
            Offer sneak peeks and previews of upcoming games, including
            trailers, screenshots, and information about release.
          </div>
        </div>
      </section>
    </section>
  );
};

export default FrameComponent2;
