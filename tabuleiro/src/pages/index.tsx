import Head from "next/head";
import Subdivisao from "@/components/subdivisao";
import GenerateBoard from "@/components/generate-board";


export default function Home() {
  return (
    <>
      <Head>
        <title>Tabuleiro</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <GenerateBoard/>
      </main>
    </>
  );
}