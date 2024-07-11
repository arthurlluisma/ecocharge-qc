import Link from "next/link";
import styles from "co-mission/styles/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.mainNav}>
      <Link href="/" className={styles.navLeft}>
        <p className={styles.logo}>EcoCharge QC</p>
      </Link>
      <div className={styles.navRight}>
        <div className={styles.exploreButton}>
          <p className={styles.explore}>Explore</p>
          <FontAwesomeIcon
            className={styles.exploreAngle}
            style={{ fontSize: "20px" }}
            icon={faAngleDown}
          ></FontAwesomeIcon>
        </div>
        <div className={styles.joinButton}>
          <p className={styles.join}>Join</p>
        </div>
      </div>
    </div>
  );
}
