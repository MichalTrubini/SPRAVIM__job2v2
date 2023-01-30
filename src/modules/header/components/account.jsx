import styles from "./account.module.css";

const Account = () => {
  return (
    <div className={styles.row}>
      <div className={styles.accountContainer}>
        <p className={styles.text}>Môj účet</p>
      </div>
    </div>
  );
};

export default Account;
