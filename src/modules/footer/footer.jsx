import styles from "./footer.module.css";
import facebookLogo from "../../assets/facebook-circle-line.svg";
import instagramLogo from "../../assets/instagram-line.svg";
import { useState } from "react";
import checkCircleImage from "../../assets/check-circle.svg";
import patterFooterImage from "../../assets/pattern-footer.svg";
import infoIcon from "../../assets/information-line.svg";
import { Link } from "react-router-dom";
import Copyright from "./copyright";

const Footer = () => {
  const [email, setEmail] = useState({
    email: "",
    isValid: false,
  });

  const [formSubmit, setFormSubmit] = useState(false);

  function emailValidation() {
    const regex = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;
    return regex.test(email.email);
  }

  const formValidationHandler = (e) => {
    e.preventDefault();
    setFormSubmit(true)
    const nextFormState = {
      ...email,
      isValid: emailValidation(),
    };
    setEmail(nextFormState);
  };

  const inputHandler = (e) => {
    const nextFormState = {
      ...email,
      [e.target.name]: e.target.value,
    };
    setEmail(nextFormState);
  };

  return (
    <footer id="footerID" className={`${styles.footer} sitePadding`}>
      <div className={styles.pattern}>
        <img src={patterFooterImage} alt="pattern" />
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {email.isValid ? (
            <div className={styles.confirmation}>
              <img src={checkCircleImage} alt="checkmark" className={styles.imageCircle} />
              <h2 className={`${styles.heading} ${styles.headingSubmit}`}>
                Ďakujeme. Budeme vás informovať o novinkách.
              </h2>
            </div>
          ) : (
            <form className={styles.form} onSubmit={formValidationHandler}>
              <h2 className={styles.heading}>Poďte s nami do toho</h2>
              <p className={styles.text}>
                Čoskoro budete môcť využívať Skinekt aj na vlastnej koži. Zadajte svoj mail a buďte prví kto bude mať
                možnosť využívať Skinekt. Vysoké zľavy pre vás.
              </p>
              <input
                className={styles.input}
                placeholder="Váš e-mail"
                name="email"
                onChange={inputHandler}
                onClick={()=>{setFormSubmit(false)}}
                value={email.email}
              />
              <button className={styles.button}>Potvrdiť</button>
              {!email.isValid & formSubmit ? (
                <div className={styles.error}>
                  <img src={infoIcon} alt="info" />
                  <p className={styles.errorMessage}>Zadaný e-mail je neplatný. Skúste to ešte raz.</p>
                </div>
              ) : null}
              <p className={styles.gdpr}>Váš e-mail bude u nás v <Link to={'/gdpr'} className={styles.link}>bezpečí</Link>.<Link to={'/pageNotFound'} className={styles.link}>404</Link></p>
            </form>
          )}
        </div>

        <div className={styles.social}>
          <a href='/' target="_blank"><img src={facebookLogo} alt="facebook" className={styles.socialIcon}/></a>
          <a href='/' target="_blank"><img src={instagramLogo} alt="instagram" className={styles.socialIcon}/></a>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
