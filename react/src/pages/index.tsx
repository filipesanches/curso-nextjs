import Container from "@/components/Container";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Course React</title>
        <meta name="description" content="Course React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
    </>
  );
}
