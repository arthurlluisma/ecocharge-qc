import Image from "next/image";
import styles from "co-mission/styles/Card.module.css";
import Popup from "co-mission/components/Popup";
import { Nunito_Sans } from "next/font/google";
import { useState } from "react";

const nunitoSans = Nunito_Sans({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false
});

export default function Card({ post }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <a className={styles.card} onClick={() => setToggle(true)}>
        <Image className={styles.img} src={post.pic} fill alt="" />
        <div className={[styles.info, nunitoSans.className]}>
          <div className={styles.description}>
            <div>
              <p>{post.category}</p>
            </div>
          </div>
        </div>
        <div className={styles.filter}></div>
      </a>
      <Popup post={post} toggle={toggle} setToggle={() => setToggle()} />
    </>
  );
}
