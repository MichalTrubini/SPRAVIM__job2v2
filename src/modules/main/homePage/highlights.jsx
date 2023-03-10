import styles from "./highlights.module.css";
import zdravieImage from "../../../assets/zdravie@2x.webp";
import sportImage from "../../../assets/sport@2x.webp";
import lifestyleImage from "../../../assets/lifestyle@2x.webp";
import useWindowDimensions from "../../../util/WindowDimensions";
import { useEffect, useRef, useState } from "react";

const Highlights = () => {
  const { width } = useWindowDimensions();
  const [positionParent, setPositionParent] = useState(0);
  const [positionHighlights, setPositionHighlights] = useState(0);
  const [positionImageOne, setPositionImageOne] = useState(0);
  const [positionImageTwo, setPositionImageTwo] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerWidth = width * 0.44;

  const scrollHandler = (item) => {
    const element = document.getElementById(item);
    const siteMainNav = document.getElementById("siteMainNav");
    let headerOffset = siteMainNav.offsetHeight;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    function windowScroll(item) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    windowScroll();
  };

  useEffect(() => {
    const scrollableSection = document.getElementById("scrollID");
    const highlightsSection = document.getElementById("highlightsID");
    const header = document.getElementById("siteMainNav");
    const imageOne = document.getElementById("imageContainerOne");
    const imageTwo = document.getElementById("imageContainerTwo");

    //set element height

    setElementHeight(imageOne.getBoundingClientRect().height);
    setHeaderHeight(header.getBoundingClientRect().height);

    //get position of elements

    window.addEventListener("scroll", handleScroll);
    scrollableSection.addEventListener("scroll", handleScroll);
    return () => {
      scrollableSection.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };

    function handleScroll() {
      const observerOne = new IntersectionObserver(handleIntersection);
      const observerTwo = new IntersectionObserver(handleIntersection);
      const observerThree = new IntersectionObserver(handleIntersection);
      const observerFour = new IntersectionObserver(handleIntersection);

      function handleIntersection(entries) {
        const entry = entries[0];
        if (entry.target.id === "scrollID")
          setPositionParent(entry.boundingClientRect.top + entry.boundingClientRect.height / 2);
        if (entry.target.id === "imageContainerOne")
          setPositionImageOne(entry.boundingClientRect.top + entry.boundingClientRect.height);
        if (entry.target.id === "imageContainerTwo")
          setPositionImageTwo(entry.boundingClientRect.top + entry.boundingClientRect.height);
        if (entry.target.id === "highlightsID") setPositionHighlights(entry.boundingClientRect.top - headerHeight);
      }

      observerOne.observe(scrollableSection);
      observerTwo.observe(imageOne);
      observerThree.observe(imageTwo);
      observerFour.observe(highlightsSection);
    }
  }, [positionParent, positionImageOne, positionImageTwo, positionHighlights, headerHeight]);

  useEffect(() => {
    //logic that controls animation in the highlights section on scroll

    const sliderElements = document.querySelectorAll('[data-act="animate"]');
    if (positionImageOne - positionParent < 0) {
      sliderElements[0].classList.remove("isActive");
    } else {
      sliderElements[0].classList.remove("isPrev");
      sliderElements[0].classList.add("isActive");
    }

    if (
      sliderElements[1].previousElementSibling.classList.contains("isActive") ||
      positionImageTwo - positionParent < 0
    )
      sliderElements[1].classList.remove("isActive");
    else if (positionImageTwo - positionParent > 0) {
      sliderElements[1].classList.add("isActive");
    }

    if (
      sliderElements[1].previousElementSibling.classList.contains("isActive") ||
      sliderElements[2].previousElementSibling.classList.contains("isActive")
    )
      sliderElements[2].classList.remove("isActive");
    else sliderElements[2].classList.add("isActive");
  });

  const scrollable = useRef(null);
  const scrollableParent = useRef(null);

  useEffect(() => {
    const header = document.getElementById("siteMainNav");

    window.addEventListener("scroll", function (e) {
      const scrollableElement = scrollable.current;
      if (scrollableElement) {
        const r = scrollableParent.current.getBoundingClientRect();
        const progress =
          scrollableElement.scrollTop / (scrollableElement.scrollHeight - scrollableElement.clientHeight);
        console.log("1: ", progress);
        if (progress <= 0.1 && r.y < header.getBoundingClientRect().height) {
          window.document.body.style.overflow = "hidden";
          scrollableElement.style.overflow = "scroll";

          window.addEventListener("wheel", function (e) {
            const scrollableElement = scrollable.current;
            if (scrollableElement) {
              const progress =
                scrollableElement.scrollTop / (scrollableElement.scrollHeight - scrollableElement.clientHeight);
              console.log("2: ", progress);
              if (e.deltaY === 100) {
              if (progress >= 0.99) {
                window.document.body.style.overflow = "scroll";
                scrollableElement.style.overflow = "hidden";
              } else  {
                scrollableElement.scrollBy({top: e.deltaY, behavior: 'smooth'});
              }
              }
              if (e.deltaY === -100) {
                if (progress <= 0.99) {

                  scrollableElement.scrollBy({top: e.deltaY, behavior: 'smooth'});
                } else  {
                  window.document.body.style.overflow = "scroll";
                  scrollableElement.style.overflow = "hidden";
                }
                }
            }
          });
        
        }


      }
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ width: `${headerWidth}px`, height: `${elementHeight}px` }}
        className={`${styles.header} ${styles.headerDesktop} sitePadding`}
      >
        <div>
          <h2 className={styles.heading}>Pre koho je Skinekt pr??nosom</h2>
          <div
            className={`${styles.link} ${styles.linkDesktop}`}
            onClick={() => {
              scrollHandler("footerID");
            }}
          >
            <p className={styles.linkText}>Zauj??ma ma to</p>
          </div>
        </div>
        <div className={styles.description}>
          <div className={`${styles.textContainer} ${styles.textContainerDT} isActive`} data-act="animate">
            <h3 className={styles.textHeading}>??port</h3>
            <p className={styles.text}>
              Ve??mi presne monitorujme polohu tela ??portovca, jeho fyziologick?? hodnoty a celkov?? stav. Tieto d??ta
              transformujeme na inform??cie, ktor?? pom??haj?? ??portovcom zlep??ova?? ich v??kon a techniku.
            </p>
          </div>
          <div className={`${styles.textContainer} ${styles.textContainerDT}`} data-act="animate">
            <h3 className={styles.textHeading}>lifestyle</h3>
            <p className={styles.text}>
              ??i u?? pracujete dlh?? dobu za po????ta??om, alebo len chcete vedie?? o sebe viac pre zlep??enie zdravia, tak
              Skinekt v??m v tomto smere pom??ha z??skavan??m d??t a ich spracovan??m a vyhodnocovan??m.
            </p>
          </div>

          <div className={`${styles.textContainer} ${styles.textContainerDT}`} data-act="animate">
            <h3 className={styles.textHeading}>zdravie</h3>
            <p className={styles.text}>
              Pr??ve v tejto oblasti m?? Skinekt obrovsk?? vyu??itie. Lek??r vie dokonale vyhodocova?? d??ta o pacientovi aj na
              ve??k?? vzdialenos??, viete by?? informovan?? o stave seniorov a pod.{" "}
            </p>
          </div>
        </div>
      </div>
      <div id="highlightsID" className={styles.sectionWrapper} ref={scrollableParent}>
        <section
          ref={scrollable}
          id="scrollID"
          className={styles.highlights}
          style={{ overflow: "hidden", transition: "all 1s ease" }}
        >
          <div className={`${styles.container} sitePadding`}>
            <div className={styles.leftWrapper}>
              <div className={`${styles.header} ${styles.headerMobile}`}>
                <h2 className={styles.heading}>Pre koho je Skinekt pr??nosom</h2>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.highlight}>
                <div id="imageContainerOne" className={styles.imageContainer}>
                  <img src={sportImage} alt="sport" />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.textHeading}>??port</h3>
                  <p className={styles.text}>
                    Ve??mi presne monitorujme polohu tela ??portovca, jeho fyziologick?? hodnoty a celkov?? stav. Tieto d??ta
                    transformujeme na inform??cie, ktor?? pom??haj?? ??portovcom zlep??ova?? ich v??kon a techniku.
                  </p>
                </div>
              </div>
              <div className={styles.highlight}>
                <div id="imageContainerTwo" className={styles.imageContainer}>
                  <img src={lifestyleImage} alt="lifestyle" />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.textHeading}>lifestyle</h3>
                  <p className={styles.text}>
                    ??i u?? pracujete dlh?? dobu za po????ta??om, alebo len chcete vedie?? o sebe viac pre zlep??enie zdravia,
                    tak Skinekt v??m v tomto smere pom??ha z??skavan??m d??t a ich spracovan??m a vyhodnocovan??m.
                  </p>
                </div>
              </div>
              <div className={styles.highlight}>
                <div id="imageContainerThree" className={styles.imageContainer}>
                  <img src={zdravieImage} alt="zdravie" />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.textHeading}>zdravie</h3>
                  <p className={styles.text}>
                    Pr??ve v tejto oblasti m?? Skinekt obrovsk?? vyu??itie. Lek??r vie dokonale vyhodocova?? d??ta o pacientovi
                    aj na ve??k?? vzdialenos??, viete by?? informovan?? o stave seniorov a pod.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${styles.link} ${styles.linkMobile}`}
              onClick={() => {
                scrollHandler("footerID");
              }}
            >
              <p className={styles.linkText}>Zauj??ma ma to</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Highlights;
