import "co-mission/styles/globals.css";
import { Noto_Sans } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const notoSans = Noto_Sans({
    weight: "700",
    subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
    return (
        <main className={notoSans.className}>
            <Component {...pageProps} />
        </main>
    );
}
