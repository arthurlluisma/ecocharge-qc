import Image from "next/image";
import Head from "next/head";
import styles from "co-mission/styles/Account.module.css";
import {
  getAccountIds,
  getAccountData,
} from "co-mission/helpers/accountHelper";
import Nav from "co-mission/components/Nav";

export default function Account({ accountData }) {
  return (
    <>
      <Head>
        <title>EcoCharge QC</title>
      </Head>
      <div className={styles.background}>
        <div className={styles.main}>
          <Nav />
          <div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src={accountData.img}
                fill
                alt=""
              />
            </div>
            <h1>{accountData.id}</h1>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.info}>
              <h2>Info:</h2>
              <p>{accountData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAccountIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const accountData = getAccountData(params.id);
  return {
    props: {
      accountData,
    },
  };
}
