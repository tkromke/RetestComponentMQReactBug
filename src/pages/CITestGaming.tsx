import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import VisualGallery from "../components/VisualGallery";
import TeamMemberGrid from "../components/TeamMemberGrid";
import QuoteBlock from "../components/QuoteBlock";
import GroupComponent from "../components/GroupComponent";
import LayerHandler from "../components/LayerHandler";
import styles from "./CITestGaming.module.css";

const CITestGaming: FunctionComponent = () => {
  return (
    <div className={styles.ciTestGaming}>
      <div className={styles.headerContent} />
      <div className={styles.headerContent1} />
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
      <section className={styles.visualContent}>
        <img className={styles.artboard11} alt="" src="/artboard-1-1@2x.png" />
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame@2x.png"
        />
        <img
          className={styles.visualContentChild}
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
        <div className={styles.designShape} />
      </section>
      <div className={styles.menuColumnPair}>
        <FrameComponent1 />
      </div>
      <img className={styles.ciTestGamingChild} alt="" src="/group-11@2x.png" />
      <FrameComponent2 />
      <section className={styles.visualGalleryParent}>
        <VisualGallery />
        <div className={styles.actionButtonsWrapper}>
          <div className={styles.actionButtons}>
            <button className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-1@2x.png"
              />
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
        <div className={styles.visualElements}>
          <div className={styles.designShape1} />
          <img
            className={styles.imageContainerIcon}
            alt=""
            src="/image-container@2x.png"
          />
          <img
            className={styles.image231Transformed11}
            alt=""
            src="/image-23-1transformed-1-1@2x.png"
          />
        </div>
      </section>
      <section className={styles.vRContent}>
        <div className={styles.categoryHeader}>
          <div className={styles.categoryHeaderInner}>
            <div className={styles.discoverTheVirtualRealityGParent}>
              <h1 className={styles.discoverTheVirtualContainer}>
                <span>{`Discover the `}</span>Virtual
                <span>{` Reality Gaming `}</span>
              </h1>
              <div className={styles.aWellDesignedGaming}>
                A well-designed gaming header often incorporates elements such
                as game characters, iconic symbols, vibrant colors, and dynamic
                visuals to convey excitement, adventure, and the immersive
                nature of gaming.
              </div>
            </div>
          </div>
          <button className={styles.callToAction}>
            <img
              className={styles.callToActionChild}
              alt=""
              src="/rectangle-1.svg"
            />
            <b className={styles.playNow1}>Play now</b>
          </button>
        </div>
      </section>
      <section className={styles.testimonialContainer}>
        <div className={styles.headerContent2}>
          <div className={styles.featureIconParent}>
            <img
              className={styles.featureIcon}
              loading="lazy"
              alt=""
              src="/star-1@2x.png"
            />
            <div className={styles.hTMLGenerator}>
              <h1 className={styles.gamingSpaning}>Gaming spaning</h1>
            </div>
          </div>
          <div className={styles.featureIconGroup}>
            <img
              className={styles.featureIcon1}
              loading="lazy"
              alt=""
              src="/star-1-1@2x.png"
            />
            <div className={styles.actionPackedWrapper}>
              <h1 className={styles.actionPacked}>Action - packed</h1>
            </div>
          </div>
          <div className={styles.featureIconContainer}>
            <img
              className={styles.featureIcon2}
              loading="lazy"
              alt=""
              src="/star-1-2@2x.png"
            />
            <div className={styles.mindBendingWrapper}>
              <h1 className={styles.mindBending}>mind - bending</h1>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <img
              className={styles.featureIcon3}
              loading="lazy"
              alt=""
              src="/star-1-3@2x.png"
            />
            <div className={styles.collectionOgGamesWrapper}>
              <h1 className={styles.collectionOgGames}>collection og games</h1>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameContainer}>
            <div className={styles.hashTableReaderParent}>
              <div className={styles.hashTableReader}>
                <h1 className={styles.welcomeToTheContainer}>
                  <span>{`Welcome to the top `}</span>games
                </h1>
              </div>
              <div className={styles.gameCategoriesPanel}>
                <button className={styles.vectorGroup}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/rectangle-1@2x.png"
                  />
                  <div className={styles.mewestGames}>Mewest games</div>
                </button>
                <button className={styles.gameTypeButtons}>
                  <img
                    className={styles.gameTypeButtonsChild}
                    alt=""
                    src="/rectangle-1-3.svg"
                  />
                  <div className={styles.latestGames}>Latest games</div>
                </button>
                <button className={styles.gameTypeButtons1}>
                  <img
                    className={styles.gameTypeButtonsItem}
                    alt=""
                    src="/rectangle-1-3.svg"
                  />
                  <div className={styles.fightGames}>Fight games</div>
                </button>
                <button className={styles.gameTypeButtons2}>
                  <img
                    className={styles.gameTypeButtonsInner}
                    alt=""
                    src="/rectangle-1-5.svg"
                  />
                  <div className={styles.sportGames}>sport games</div>
                </button>
              </div>
            </div>
          </div>
          <TeamMemberGrid />
        </div>
      </section>
      <div className={styles.headerContent3}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/star-1@2x.png" />
          <div className={styles.dataTree}>
            <h1 className={styles.gamingSpaning1}>Gaming spaning</h1>
          </div>
        </div>
        <div className={styles.starGroup}>
          <img className={styles.starIcon} alt="" src="/star-1-1@2x.png" />
          <div className={styles.actionPackedContainer}>
            <h1 className={styles.actionPacked1}>Action - packed</h1>
          </div>
        </div>
        <div className={styles.starContainer}>
          <img className={styles.frameChild1} alt="" src="/star-1-2@2x.png" />
          <div className={styles.mindBendingContainer}>
            <h1 className={styles.mindBending1}>mind - bending</h1>
          </div>
        </div>
        <div className={styles.starParent1}>
          <img className={styles.frameChild2} alt="" src="/star-1-3@2x.png" />
          <div className={styles.collectionOgGamesContainer}>
            <h1 className={styles.collectionOgGames1}>collection og games</h1>
          </div>
        </div>
      </div>
      <section className={styles.gameCategories}>
        <div className={styles.callToAction1}>
          <div className={styles.quoteBlockParent}>
            <QuoteBlock
              quoteBox="/quote-box@2x.png"
              oneOfTheStandoutFeaturesO="One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance."
              reviewerAvatars="/ellipse-12@2x.png"
              arleneMcCoy="Arlene McCoy"
              mcDonalds="McDonald's"
            />
            <QuoteBlock
              quoteBox="/rectangle-21@2x.png"
              oneOfTheStandoutFeaturesO="Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming."
              reviewerAvatars="/ellipse-13@2x.png"
              arleneMcCoy="Kathryn Murphy"
              mcDonalds="General Electric"
              propColor="#fff"
              propWidth="235.4px"
              propLineHeight="110.6%"
              propMinWidth="89px"
              propRight="33.7px"
            />
          </div>
          <div className={styles.socialMediaIcons}>
            <div className={styles.socialEngagementPanel}>
              <div className={styles.socialEngagementPanelInner}>
                <img className={styles.groupIcon} alt="" src="/group-39.svg" />
              </div>
              <img
                className={styles.engagementIndicatorIcon}
                alt=""
                src="/engagement-indicator@2x.png"
              />
              <div className={styles.socialEngagementPanelChild}>
                <img
                  className={styles.frameChild3}
                  alt=""
                  src="/group-40.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <GroupComponent />
      <section className={styles.image2411Parent}>
        <img className={styles.image2411} alt="" src="/image-24-1-1@2x.png" />
        <img className={styles.pageContentIcon} alt="" src="/frame-2@2x.png" />
        <img
          className={styles.graphicElementIcon}
          loading="lazy"
          alt=""
          src="/vector-5.svg"
        />
        <img
          className={styles.groupIcon1}
          loading="lazy"
          alt=""
          src="/group-10.svg"
        />
        <img
          className={styles.designElementIcon}
          loading="lazy"
          alt=""
          src="/vector-6.svg"
        />
        <img
          className={styles.groupIcon2}
          loading="lazy"
          alt=""
          src="/group-111.svg"
        />
        <img
          className={styles.frameChild4}
          loading="lazy"
          alt=""
          src="/group-1000001744.svg"
        />
        <img
          className={styles.visualElementsIcon}
          alt=""
          src="/visual-elements.svg"
        />
        <img
          className={styles.visualElementsIcon1}
          alt=""
          src="/visual-elements.svg"
        />
        <img
          className={styles.visualElementsIcon2}
          alt=""
          src="/visual-elements.svg"
        />
        <img
          className={styles.visualElementsIcon3}
          alt=""
          src="/visual-elements.svg"
        />
      </section>
      <LayerHandler />
    </div>
  );
};

export default CITestGaming;
