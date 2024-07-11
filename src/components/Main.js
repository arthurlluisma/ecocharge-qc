import styles from "co-mission/styles/Main.module.css";
import Feed from "co-mission/components/Feed";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <>
            <div className={styles.mainHeader}>
                <div className={styles.headerBG}>
                    <div className={styles.headerBGOverlay}></div>
                </div>
                <div className={styles.headerSearch}>
                    <p className={styles.searchMessage}>Search for the art you want, from the creators you love.</p>
                    <button className={styles.searchButton}>
                        <div className={styles.searchButtonInner}>
                            <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faSearch}></FontAwesomeIcon>
                        </div>
                    </button>
                    <input
                        className={styles.searchBar}
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    ></input>
                </div>
            </div>
            <Feed search={searchValue.toLowerCase()} isShowEverything={searchValue === ""} />
        </>
    );
}
