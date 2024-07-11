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
          <h1>{post.category}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link className={styles.link} href={`account/${post.category}`}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
