import Link from "next/link";
import styles from "co-mission/styles/Popup.module.css";
import Image from "next/image";

export default function Popup({ post, toggle, setToggle }) {
    return (
        <div className={styles.toggle}>
            <div className={styles.main} data-toggle={toggle ? "true" : "false"}>
                <a className={styles.exit} onClick={() => setToggle(false)}>
                    X
                </a>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={post.pic} fill alt="" />
                </div>
                <div className={styles.info}>
                    <h1>{post.username}</h1>
                    <Link className={styles.link} href={`account/${post.username}`}>
                        Comission me!
                    </Link>
                </div>
            </div>
        </div>
    );
}
