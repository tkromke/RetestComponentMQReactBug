import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.letYourMindExploreNewWorlWrapper}>
        <b className={styles.letYourMindContainer}>
          <span>{`Let your mind `}</span>explore
          <span> new world</span>
        </b>
      </div>
      <div className={styles.callToAction}>
        <div className={styles.buttons}>
          <div className={styles.superDuperGamingExperienceWrapper}>
            <div className={styles.superDuperGaming}>
              Super duper gaming experience you gonna love so much. WOW! Amazing
            </div>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-1@2x.png"
              />
              <b className={styles.buyNow}>Buy now</b>
            </button>
            <button className={styles.buttonItems}>
              <img
                className={styles.buttonItemsChild}
                alt=""
                src="/rectangle-1.svg"
              />
              <b className={styles.playNow}>Play now</b>
            </button>
          </div>
        </div>
        <div className={styles.testimonialsDisplayWrapper}>
          <div className={styles.testimonialsDisplay}>
            <div className={styles.customerCards}>
              <div className={styles.customerAvatarsWrapper}>
                <b className={styles.customerAvatars}>300+</b>
              </div>
              <div className={styles.uniqueStyle}>Unique style</div>
            </div>
            <div className={styles.customerCards1}>
              <div className={styles.wrapper}>
                <b className={styles.b}>200+</b>
              </div>
              <div className={styles.projectFinished}>Project finished</div>
            </div>
            <div className={styles.customerCards2}>
              <div className={styles.container}>
                <b className={styles.b1}>500+</b>
              </div>
              <div className={styles.happyCustomer}>Happy customer</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/group-11@2x.png"
      />
    </section>
  );
};

export default FrameComponent1;
