import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession();
  // console.log(session);
  // console.log(status);
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Auth</title>
        <meta name="description" content="Next Auth App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
      {session && `Hello ${session.user.name}`}
    </div>
  );
}
