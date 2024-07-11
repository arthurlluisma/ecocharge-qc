import Image from "next/image";
import Link from "next/link";
import styles from "co-mission/styles/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Home() {
    return (
        <div className={styles.mainNav}>
            <Link href="/" className={styles.navLeft}>
                <Image className={styles.logo} src="/comission-logo2.png" fill alt="comission" />
            </Link>

            {/* div for other buttons at right of nav */}
            <div className={styles.navRight}>
                <div className={styles.exploreButton}>
                    {/* how do i put a dropdown menu here */}
                    {/* TODO: get icon from fontawesome */}
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
