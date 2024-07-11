import Link from "next/link";
import Image from "next/image";
import styles from "co-mission/styles/HomeLink.module.css";

export default function HomeLink() {
    return (
        <Link className={styles.link} href="/">
            <Image className={styles.img} src="/placeholder-logo.png" fill alt="comission"></Image>
        </Link>
    );
}
