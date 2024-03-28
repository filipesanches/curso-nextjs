import Titulo from "@/components/Titulo";
import Head from "next/head";
import styles from '@/styles/myapp.module.css'
import Estilo from "@/components/estilo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={styles.title}>
        Welcome to myapp
      </h2>
      <Titulo />
      <Estilo red/>
      <Estilo padding/>
    </>
  );
}
