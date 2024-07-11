import Image from "next/image";
import styles from "co-mission/styles/Card.module.css";
import Popup from "co-mission/components/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Nunito_Sans } from "next/font/google";
import { useState } from "react";

const nunitoSans = Nunito_Sans({
    weight: "700",
    subsets: ["latin"],
});

export default function Card({ post }) {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <a className={styles.card} onClick={() => setToggle(true)}>
                <Image className={styles.img} src={post.pic} fill alt="" />
                <div className={[styles.info, nunitoSans.className]}>
                    <div className={styles.price}>
                        <FontAwesomeIcon className="fa-2xl" icon={faSackDollar} />
                        <div>
                            <p>Starting at...</p>
                            <p>${post.price}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.filter}></div>
            </a>
            {/* {toggle && <Popup post={post} setToggle={() => setToggle()} />} */}
            <Popup post={post} toggle={toggle} setToggle={() => setToggle()} />
        </>
    );
}
